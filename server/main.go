package main

import (
	"net/http"
)

type Channel struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

//
// func addChannel(data interface{}) error {
// 	var channel Channel
// 	err := mapstructure.Decode(data, &channel)
// 	if err != nil {
// 		return err
// 	}
//
// 	channel.Id = "1"
// 	fmt.Println("added channel")
// 	return nil
// }

func main() {
	router := NewRouter()
	router.Handle("channel add", addChannel)
	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}

//
// func handler(w http.ResponseWriter, r *http.Request) {
//
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	for {
// 		var inMessage Message
// 		var outMessage Message
// 		if err := socket.ReadJSON(&inMessage); err != nil {
// 			fmt.Println(err)
// 			return
// 		}
//
// 		fmt.Printf("%#v\n", inMessage)
// 		switch inMessage.Name {
// 		case "channel add":
// 			{
// 				err := addChannel(inMessage.Data)
// 				if err != nil {
// 					outMessage = Message{"error", err}
// 					if err := socket.WriteJSON(outMessage); err != nil {
// 						fmt.Println(err)
// 						break
// 					}
// 				}
// 			}
// 		case "channel subscribe":
// 			{
// 				go subscribeChannel(socket)
// 			}
// 		}
//
// 	}
// }
//
// func subscribeChannel(socket *websocket.Conn) {
// 	for {
// 		time.Sleep(time.Second * 1)
// 		message := Message{"channel add",
// 			Channel{"1", "Software Support"}}
// 		socket.WriteJSON(message)
// 		fmt.Println("sent new channel")
// 	}
// }
