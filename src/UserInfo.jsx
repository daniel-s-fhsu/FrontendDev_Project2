import React from "react";

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {  username: "dan",
                        luckyNumber: 42
        }
    }
    render() {
        return <div>
        <p>Username: {this.state.username}</p>
        <p>Lucky Number: {this.state.luckyNumber}</p>
        <button onClick={this.props.handleClick}>Click Me</button>
    </div>;
    }
}

export default UserInfo;