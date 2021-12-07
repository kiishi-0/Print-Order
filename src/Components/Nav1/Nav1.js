import React from 'react'
import "./Nav1.css"

class Nav1 extends React.Component{
    render(){
        return(
            <nav>
            <a href="#" class="logo">LOGO</a>
            <div class="burger-div">
                <a href="#">LOGIN</a>
                <a href="#">SIGN UP</a>
            </div>
        </nav>
        )
    }
}

export default Nav1