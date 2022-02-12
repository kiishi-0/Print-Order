import React from 'react';
import '../SummaryPage/SummaryPage.css';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';

class SummaryPage extends React.Component{
    render(){
        return(
            <div className='container'>
                <header>
                    <Nav1 />
                    <Nav2 />
                </header>
                <main className='summary-div'>
                    <h1>Order Summary</h1>
                    <div className='orders'>
                        <div className='order'>
                            <h3 className='order-title'>Order 1</h3>
                            <div className='job-title-section sec'>
                                <h4>JOB TITLE:</h4>
                                <div className='j-title'>Lorem Ipsum</div>
                            </div>
                            <div className='copies-date-section sec'>
                                <div className='page-section'>
                                    <h4>PAGES:</h4>
                                    <h6>20</h6>
                                </div>
                                <div className='copies-section'>
                                    <h4>COPIES:</h4>
                                    <h6>450</h6>
                                </div>
                                <div className='date-section'>
                                    <h4>DATE DUE:</h4>
                                    <h6>23/09/2022</h6>
                                </div>
                            </div>
                            <div className='address-section sec'>
                                <h4>ADDRESS:</h4>
                                <div className='address'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Ut tempor senectus arcu cursus tortor odio ornare </p>
                                </div>
                            </div>
                            <div className='info-section sec'>
                                <h4>ADDITIONAL INFORMATION:</h4>
                                <div className='info'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ut tempor senectus arcu cursus tortor odio ornare velit 
                                    blandit. Elit faucibus ante sed nascetur. Tincidunt </p>
                                </div>
                            </div>
                            <div className='buttons-section sec'>
                                <button className='edit-btn'>EDIT</button>
                                <button className='submit-btn'>SUBMIT ORDER</button>
                            </div>
                        </div>
                        <div className='order'>
                            <h3 className='order-title'>Order 1</h3>
                            <div className='job-title-section sec'>
                                <h4>JOB TITLE:</h4>
                                <div className='j-title'>Lorem Ipsum</div>
                            </div>
                            <div className='copies-date-section sec'>
                                <div className='page-section'>
                                    <h4>PAGES:</h4>
                                    <h6>20</h6>
                                </div>
                                <div className='copies-section'>
                                    <h4>COPIES:</h4>
                                    <h6>450</h6>
                                </div>
                                <div className='date-section'>
                                    <h4>DATE DUE:</h4>
                                    <h6>23/09/2022</h6>
                                </div>
                            </div>
                            <div className='address-section sec'>
                                <h4>ADDRESS:</h4>
                                <div className='address'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Ut tempor senectus arcu cursus tortor odio ornare </p>
                                </div>
                            </div>
                            <div className='info-section sec'>
                                <h4>ADDITIONAL INFORMATION:</h4>
                                <div className='info'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ut tempor senectus arcu cursus tortor odio ornare velit 
                                    blandit. Elit faucibus ante sed nascetur. Tincidunt </p>
                                </div>
                            </div>
                            <div className='buttons-section sec'>
                                <button className='edit-btn'>EDIT</button>
                                <button className='submit-btn'>SUBMIT ORDER</button>
                            </div>
                        </div>
                        <div className='order'>
                            <h3 className='order-title'>Order 1</h3>
                            <div className='job-title-section sec'>
                                <h4>JOB TITLE:</h4>
                                <div className='j-title'>Lorem Ipsum</div>
                            </div>
                            <div className='copies-date-section sec'>
                                <div className='page-section'>
                                    <h4>PAGES:</h4>
                                    <h6>20</h6>
                                </div>
                                <div className='copies-section'>
                                    <h4>COPIES:</h4>
                                    <h6>450</h6>
                                </div>
                                <div className='date-section'>
                                    <h4>DATE DUE:</h4>
                                    <h6>23/09/2022</h6>
                                </div>
                            </div>
                            <div className='address-section sec'>
                                <h4>ADDRESS:</h4>
                                <div className='address'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Ut tempor senectus arcu cursus tortor odio ornare </p>
                                </div>
                            </div>
                            <div className='info-section sec'>
                                <h4>ADDITIONAL INFORMATION:</h4>
                                <div className='info'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ut tempor senectus arcu cursus tortor odio ornare velit 
                                    blandit. Elit faucibus ante sed nascetur. Tincidunt </p>
                                </div>
                            </div>
                            <div className='buttons-section sec'>
                                <button className='edit-btn'>EDIT</button>
                                <button className='submit-btn'>SUBMIT ORDER</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default SummaryPage;