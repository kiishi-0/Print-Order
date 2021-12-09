import React from 'react';
import Nav1 from '../Nav1/Nav1';
import './LoginForm.css';

class LoginForm extends React.Component{

 render(){
     return(
         <main class="login-section">
            <header>
                <Nav1 />
            </header> 
            <section>
                <h1>Login to Print Order</h1>
                <form method="#" action='#' autoComplete='on'>
                    <input type="textbox" name='username'/>
                    <input type="password" name='password'/>
                    <input type="submit" value="Login"/>
                </form>
            </section>
         </main>
     )
 }
}

export default LoginForm;