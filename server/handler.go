package main

import (
	r "github.com/dancannon/gorethink"
	"github.com/mitchellh/mapstructure"
)

const(
	ChannelStop = iota
	UserStop
	MessageStop
)

func addChannel(client *Client, data interface{}) {
	var channel Channel
	err := mapstructure.Decode(data, &channel)
	if err != nil {
		client.send <- Message{"err", err.Error()}
		return
	}
	go func() {
		err = r.Table("channel").
			Insert(channel).
			Exec(client.session)
		if err != nil {
			client.send <- Message{"err", err.Error()}
		}
	}()
}

func subscribeChannel(client *Client, data interface{}) {
	stop:= client.NewStopChannel(ChannelStop)
	result := make(chan r.ChangeResponse)
	cursor, err := r.Table("channel").
		Changes(r.ChangesOpts{IncludeInitial: true}).
		Run(client.session)
	if err != nil {
		client.send <- Message{"err", err.Error()}
	}

	go func() {
		var change r.ChangeResponse
		for cursor.Next(&change) {
			result <- change
		}
		}()

		go func(){
			for {
				select{
					case <-stop:
						cursor.Close()
						return
					case change := <-result:
						if change.NewValue != nil && change.OldValue == nil {
							client.send <- Message{"channel add", change.NewValue}
							fmt.Println("sent channel add message")
						}
				}
			}
			}()
}
