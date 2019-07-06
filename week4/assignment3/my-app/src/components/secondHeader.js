import React, { Component } from 'react';

class SecondHeader extends Component {
    state = {
        helloText: "Welcome Message"
    };

    handleClick = (e) => {
        this.setState(prevState => ({ helloText: "Have a good time!" }));
        e.target.style.cursor = "default";
    }
    render() {
        return (
            <div className="second-header">
                <div className="container">
                    <h1 id="mainTitle" className="addCursor" onClick={this.handleClick}>{this.state.helloText}</h1>
                </div>
            </div>
        );
    }
}

export default SecondHeader;