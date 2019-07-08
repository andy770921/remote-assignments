import React, { Component } from 'react';


class Header extends Component {
    state = {
        manuStyle: {},
        liStyle: {},
        showManuBtn: true,
        showCrossBtn: false
    };

    manuStyle = {
        display : "block",
        position: "fixed",
        width : "35%",
        height : "100%",
        minWidth : "200px",
        backgroundColor : "white",
        top : "0",
        right : "0",
        textAlign : "left"
    };

    liStyle = {
        display : "block",
        margin : "1.8em 0"
    };

    handleClickMenu = (event) => {
        this.setState(prevState => ({  manuStyle: this.manuStyle, liStyle: this.liStyle, showManuBtn: false, showCrossBtn: true }));
    };

    handleClickCross = (event) => {
        this.setState(prevState => ({  manuStyle: {}, liStyle: {} , showManuBtn: true, showCrossBtn: false}));
    };

    render() {
        return (
            <header className="main-header">
                <div className="container group">
                    <h3 className="website-title">Website Title / Logo</h3>
                    <ul className="main-nav" style={this.state.manuStyle}>
                        <li style={this.state.liStyle}><a href="#">Item 1</a></li>
                        <li style={this.state.liStyle}><a href="#">Item 2</a></li>
                        <li style={this.state.liStyle}><a href="#">Item 3</a></li>
                        <li style={this.state.liStyle}><a href="#">Item 4</a></li>
                    </ul>
                    {(this.state.showManuBtn)? <div className="manu_btn" onClick={this.handleClickMenu}></div>: ''}
                    {(this.state.showCrossBtn)? <div className="cross" onClick={this.handleClickCross}></div>: ''}
                </div>
            </header>
        );
    }
}

export default Header;