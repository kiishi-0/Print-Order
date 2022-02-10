import React from 'react';
import '../Home/Home.css'
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import clientimg from '../../images/clientIcons.png';
import Categories from '../../Components/Categories/Categories';


class Home extends React.Component{
    render(){
        return(
            <div class="container">
                <header>
                    <Nav1 />
                    <Nav2 />
                </header> 
                <main className='home-div'>
                    <section className="landing-container">
                        <div className="landing"></div>
                    </section>
                    <Categories />
                    <section className='p-works-section'>
                        <h3>Previous Works</h3>
                        <div className='p-works-carousel-container'></div>
                    </section>
                    <section className='about-section'>
                        <div className='about-container'>
                            <h3>About Us</h3>
                            <p className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Id nibh tortor id aliquet lectus proin nibh nisl
                            condimentum. Leo a diam sollicitudin tempor id eu nisl 
                            nunc. Gravida in fermentum et sollicitudin ac orci phasellus. 
                            Sit amet commodo nulla facilisi nullam vehicula ipsum. 
                            Sed elementum tempus egestas sed sed. Suspendisse in 
                            est ante in nibh mauris cursus. Amet mattis vulputate enim
                            nulla aliquet porttitor lacus. Habitant morbi tristique 
                            senectus et netus et. Quam vulputate dignissim suspendisse 
                            in est ante in. Volutpat est velit egestas dui id ornare 
                            arcu. Felis eget velit aliquet sagittis. Magna fringilla 
                            urna porttitor rhoncus dolor purus non enim praesent. 
                            Vel pretium lectus quam id leo. In eu mi bibendum neque 
                            egestas congue quisque egestas diam. Commodo nulla facilisi 
                            nullam vehicula ipsum a. Ut eu sem integer vitae justo 
                            eget magna fermentum iaculis. Nullam eget felis eget nunc lobortis 
                            mattis aliquam faucibus purus. Scelerisque viverra mauris in aliquam. 
                            Mi ipsum faucibus vitae aliquet nec.
                            </p>
                        </div>
                    </section>
                    <section className='clients-section'>
                        <div className='clients-container'>
                            <h3>Our Clients</h3>
                            <div className='img-container'>
                                <img src={clientimg} alt='Our Client' title='Our Clients'/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home;