import React, { Component } from "react";
// import io from "socket.io-client";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import Socket from "./utils/socket";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      messages: [],
      myUsername: "",
      users: []
    };
    Socket.emit("NEW_USER");

    Socket.on("GET_CURRENT_USER", user => {
      console.log("GET_CURRENT_USER returned: ", user);
      this.setState({
        myId: user.id,
        myUsername: user.username
      });
    });

    // this needs to be updated somehow??
    Socket.on("UPDATE_USER_LIST", users => {
      console.log("UPDATE_USER_LIST returned:", users);
      this.setState({ users: users });
    });

    Socket.on("RECEIVE_BROADCAST", response => {
      console.log("Receive broadcast: ", response);
      let messages = [...this.state.messages, response];
      this.setState({ messages });
    });
  }

  // handlesend emits the newMessage, and adds it into the messages
  handleSend = message => {
    const newMessage = {
      username: this.state.myUsername,
      message: message,
      timestamp: new Date()
        .toTimeString()
        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
      // ignorethis: true
    };
    Socket.emit("BROADCAST_MESSAGE", newMessage);
    console.log("Sending broadcast: ", newMessage);
    // let messages = [...this.state.messages, newMessage];
    // this.setState({ messages });
  };
  render() {
    return (
      <div id="container">
        <Sidebar users={this.state.users} />
        <section id="chat-container">
          <MessagesList
            messages={this.state.messages}
            myUsername={this.state.myUsername}
          />
          <MessageForm onSend={this.handleSend} />
        </section>
      </div>
    );
  }
}
