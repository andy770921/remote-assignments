import React, { Component } from 'react';

const manu_btn = document.querySelector('.manu_btn');
const cross = document.querySelector('.cross');
const main_nav = document.querySelector('.main-nav');

class Header extends Component {

    handleClickMenu = (event) => {
        event.target.style.visibility = "hidden";
        event.target.nextElementSibling.style.visibility = "visible";
        main_nav.style.display = "block";
        main_nav.style.position = "fixed";
        main_nav.style.width = "35%";
        main_nav.style.height = "100%";
        main_nav.style.minWidth = "200px";
        main_nav.style.backgroundColor = "white";
        main_nav.style.top = "0";
        main_nav.style.right = "0";
        main_nav.style.textAlign = "left";
        for (var i = 0; i < main_nav.children.length; i++) {
            main_nav.children[i].style.display = "block";
            main_nav.children[i].style.margin = "1.8em 0";
        };
    };

    handleClickCross = (event) => {
        event.target.style.visibility = "hidden";
        event.target.previousElementSibling.style.visibility = "visible";
        main_nav.style.width = "auto";
        main_nav.style.backgroundColor = "transparent";
        main_nav.style.position = "static";
        for (var i = 0; i < main_nav.children.length; i++) {
            main_nav.children[i].style.display = "inline";
            main_nav.children[i].style.margin = "0";
        }
        main_nav.style.display = "none";
    };

    render() {
        return (
            <header className="main-header">
                <div className="container group">
                    <h3 className="website-title">Website Title / Logo</h3>
                    <ul className="main-nav">
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                    </ul>
                    <div className="manu_btn" onClick={this.handleClickMenu}></div>
                    <div className="cross" onClick={this.handleClickCross}></div>
                </div>
            </header>
        );
    }
}

export default Header;