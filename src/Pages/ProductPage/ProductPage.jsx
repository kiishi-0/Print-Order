import React from 'react';
import '../ProductPage/ProductPage.css';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import  cal from '../../images/calendar-solid.svg'

class ProductPage extends React.Component{
    render(){
        return(
            <div class="container">
                <header>
                    <Nav1 />
                    <Nav2 />
                </header>
                
                <div className="product-div">
                    <div className="title-div">
                        <h1>Magazines</h1>
                        <div className="carousel">
                        <div className="slide">
                                
                        </div>
                        </div>
                    </div>
                    <div className="product-details-div">
                        <h2>Job Details</h2>
                        <form action="#" method="post" className='details-div'>
                            <div className='sec1 sec'>
                                <input type="text" name="title" id="title" placeholder='Job Title'/>
                                <input type="number" name="copies" id="copies" placeholder='Number of Copies'/>
                                <input type="number" name="pages" id="pages" placeholder='Number of Pages'/>
                                <textarea name="description" id="description" cols="30" rows="5" placeholder='Job Description'></textarea>
                            </div>
                            <div className='sec2 sec'>
                                <span className='date'>
                                    <p>Due Date</p>
                                    <img src={cal} alt="calender" srcset="" width={20}/>
                                    <input type="date" name="due-date" id="due-date" />
                                </span>
                                <span className='design'>
                                    <p>Job Design: </p>
                                    <input type="file" name="design" id="design" />
                                </span>
                                <span className='design'>
                                    <p>Job Content: </p>
                                    <input type="file" name="content" id="content" />
                                </span>
                                <textarea name="address" id="address" cols="30" rows="5" placeholder='Address'></textarea>
                            </div>
                            <button>SUBMIT</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ProductPage