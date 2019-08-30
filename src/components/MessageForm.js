import React, { Component } from "react";

// how to limit the number of characters you can type in the form??

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      // isInvalid: false,
      feedback: ""
      // isTpying: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message.length > 0) {
      this.props.onSend(this.state.message);
      this.setState({ message: "" });
      // this.setState({ message: "", isInvalid: false });
    } else {
      this.setState({
        // isInvalid: true,
        feedback: "unable to send empty message"
      });
    }
  };

  handleInput = e => {
    // this.setState({ message: e.target.value });
    // console.log(e.target.value.length);
    if (e.target.value.length > 250) {
      this.setState({
        // isInvalid: true,
        feedback: "MAXIMUM NUMBER OF CHARACTERS REACHED (250)",
        message: e.target.value.substring(0, 250)
      });
    } else {
      // if (this.state.isInvalid === true) {
      //   this.setState({ isInvalid: false });
      // }
      this.setState({
        message: e.target.value,
        feedback: ""
      });
    }
  };

  // sendMessage = () => {
  //   this.props.sendMessage(this.state.message);
  // };
  componentWillUnmount() {
    this.stopCheckingTyping();
  }

  // sendTyping = () => {
  //   this.lastUpdateTime = Date.now();
  //   if (!this.state.isTyping) {
  //     this.setState({ isTyping: true });
  //     this.props.sendTyping(true);
  //     this.startCheckingTyping();
  //   }
  // };

  /*
   *	startCheckingTyping
   *	Start an interval that checks if the user is typing.
   */
  // startCheckingTyping = () => {
  //   console.log("Typing");
  //   this.typingInterval = setInterval(() => {
  //     if (Date.now() - this.lastUpdateTime > 300) {
  //       this.setState({ isTyping: false });
  //       this.stopCheckingTyping();
  //     }
  //   }, 300);
  // };

  /*
   *	stopCheckingTyping
   *	Start the interval from checking if the user is typing.
   */
  // stopCheckingTyping = () => {
  //   console.log("Stop Typing");
  //   if (this.typingInterval) {
  //     clearInterval(this.typingInterval);
  //     this.props.sendTyping(false);
  //   }
  // };

  render() {
    const { message } = this.state;
    return (
      <div className="message-input">
        <form onSubmit={this.handleSubmit} className="message-form">
          <input
            id="message"
            ref={"messageinput"}
            type={"text"}
            value={message}
            placeholder="Your message"
            onChange={this.handleInput}
            autoFocus={true}
            autoComplete={"off"}
            className="form-control"
          />
          {/* <button className="send">Submit</button> */}
        </form>
      </div>
    );
  }
}
