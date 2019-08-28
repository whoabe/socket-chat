import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="side-bar">
        <div>
          <h5>Number of users online: {this.props.users.length}</h5>
        </div>
        <div className="user-list">
          {this.props.users.map(user => {
            return <div>{user.username}</div>;
          })}
        </div>
      </div>
    );
  }
}
