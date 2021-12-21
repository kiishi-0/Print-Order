import React from 'react';
import '../Home/Home.css'
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import Categories from '../../Components/Categories/Categories';


class Home extends React.Component{
    render(){
        return(
            <div class="container">
                <header>
                    <Nav1 />
                    <Nav2 />
                </header>
                <main>
                    <div class="landing-container">
                        <div class="landing"></div>
                    </div>
                    <Categories />
                </main>
            </div>
        )
    }
}

export default Home;