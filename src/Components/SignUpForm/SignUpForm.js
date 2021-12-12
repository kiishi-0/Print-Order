import React from 'react';
import Nav1 from '../Nav1/Nav1';
import './SignUpForm.css';

class SignUpForm extends React.Component{

 render(){
     return(
         <main class="login-section">
            <header>
                <Nav1 />
            </header> 
            <section>
                <h1>Sign Up</h1>
                <form method="#" action='#' autoComplete='on'>
                    <input type="text" name='name' placeholder='Company Name'/>
                    <input type="email" name='email'  placeholder='Email'/>
                    <input type="password" name='password'  placeholder='Password'/>
                    <input type="password" name='confirm password'  placeholder='Confirm Password'/>
                    <textarea name="w3review" rows="5" placeholder='Company Address'></textarea>
                    <input type="submit" value="Login"/>
                </form>
            </section>
         </main>
     )
 }
}

export default SignUpForm;