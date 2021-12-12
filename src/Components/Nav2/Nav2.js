import React from 'react';
import "./Nav2.css"
import burger from '../../images/burger.svg'


class Nav2 extends React.Component{
    render(){
        return (
            <nav class="nav2">
                <button class="burger">
                    <img src={burger} alt="burger bars"/>
                </button>
                <div class="burger-div">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACTS</a>
                </div>
            </nav>
        )
    }
}

export default Nav2