import React from 'react';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import './CategoriesPage.css'

class CategoriesPage extends React.Component{
    render(){
        return(
            <div class="container">
                <header>
                    <Nav1 />
                    <Nav2 />
                </header>
                <main>
                    <h1>Categories</h1>
                    <section class="categories-container">
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        <a href="#">
                            <div class="cat-btn cat"></div>
                        </a>
                        
                    </section>
                </main>
            </div>
        )
    }
}

export default CategoriesPage;