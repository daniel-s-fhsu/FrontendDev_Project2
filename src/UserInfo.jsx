import React from "react";

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {  
            username: "dan",
            luckyNumber: this.getRandomNumber()
        };

        this.generateLuckyNumber = this.generateLuckyNumber.bind(this);
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    generateLuckyNumber() {
        this.setState({ luckyNumber: this.getRandomNumber() });
    }

    render() {
        return (
            <div>
                <p>Username: {this.state.username}</p>
                <p>Your lucky number is: {this.state.luckyNumber}</p>
                <button onClick={this.generateLuckyNumber}>Generate New Lucky Number</button>
            </div>
        );
    }
}

export default UserInfo;
