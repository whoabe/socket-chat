import React, { Component } from "react";

export default class MessagesList extends Component {
  // renderMessage = (message) => {

  // }

  render() {
    const { messages } = this.props;
    return (
      <div className="messages-list">
        {messages.map((m, index) => {
          let imgSrc = `https://api.adorable.io/avatars/50/${m.username}.png`;

          let username = m.username;
          if (m.username === this.props.myUsername) {
            username = "You";
          }
          return (
            <div key={`m${index}`} className="message-div">
              <div className="username">
                <span>{username}</span>
              </div>
              <div className="message">
                <span>{m.message}</span>
              </div>
              <div>
                <span>{m.timestamp}</span>
              </div>
            </div>
          );
        })}
        {/* {messages.map(message => this.renderMessage(message))} */}
      </div>
    );
  }
}
