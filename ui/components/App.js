import React, { Component } from 'react';
import ChannelSection from './channels/channel_section';
import UserSection from './users/user_section';
import MessageSection from './messages/message_section';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: [],
      connected: false
    }
  }
  componentDidMount() {
    let ws = this.ws = new WebSocket('ws://echo.websocket.org');
    
  }

  newChannel(channel){
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }
  addChannel(name){
    let { channels } = this.state;
    let msg = {
      name:'channel add',
      data: {
        id: channels.length,
        name
      }
    };
    this.ws.send(JSON.stringify(msg));
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    //TODO get channel messages
  }
  setUserName(name){
    let { users } = this.state;
    users.push({id: users.length, name});
    this.setState({users});
  }
  addMessage(body){
    let {messages, users} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({id: messages.length, body, createdAt, author});
    this.setState({messages});
  }
  render() {
    return (

        <div className="app">
          <div className="nav">
            <ChannelSection
                {...this.state}
                addChannel={this.addChannel.bind(this)}
                setChannel={this.setChannel.bind(this)}
            />
            <UserSection
                {...this.state}
                setUserName={this.setUserName.bind(this)}
            />
          </div>
          <MessageSection
            {...this.state}
            addMessage={this.addMessage.bind(this)}
        />
        </div>


    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
