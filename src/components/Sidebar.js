import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="side-bar">
        <div>
          <h4>Users online: {this.props.users.length}</h4>
        </div>
        <div className="user-list">
          {this.props.users.map(user => {
            return <div className="online-user">{user.username}</div>;
          })}
        </div>
      </div>
    );
  }
}
