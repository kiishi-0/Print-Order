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
                    <section className="landing-container">
                        <div className="landing"></div>
                    </section>
                    <Categories />
                    <section className='p-works-section'>
                        <h3>Previous Works</h3>
                        <div className='p-works-carousel-container'></div>
                    </section>
                    <section className='about-section'>
                        <div className='about-container'></div>
                    </section>
                    <section className='clients-section'>
                        <div className='clients-container'></div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home;