import React, { Component } from "react";

export default class MessagesList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  scrollDown = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.scrollDown();
    }
  }
  render() {
    const { messages, myUsername } = this.props;
    return (
      <div className="messages-list">
        {messages.map((m, index) => {
          let imgSrc = `https://api.adorable.io/avatars/100/${m.username}.png`;

          let username = m.username;
          // if (m.username === this.props.myUsername) {
          //   username = "You";
          // }
          return (
            <div
              key={`m${index}`}
              className={`message-container ${m.username === myUsername &&
                "right"}`}
            >
              <div className="image-container">
                <img src={imgSrc} alt="profile"></img>
              </div>
              <div className="umt-container">
                <div className="username">
                  <span className="username">{username}</span>
                </div>
                <div
                  className={`message ${m.username === myUsername && "right"}`}
                >
                  <span>{m.message}</span>
                </div>
                <div className={`time ${m.username === myUsername && "right"}`}>
                  <span>{m.timestamp}</span>
                </div>
              </div>
              <div
                ref={el => {
                  this.messagesEnd = el;
                }}
              ></div>
            </div>
          );
        })}
        {/* {messages.map(message => this.renderMessage(message))} */}
      </div>
    );
  }
}
