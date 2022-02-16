import React from 'react';
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import brochure from '../../images/brochures.jpg'
import mag from '../../images/magazine-2.jpg'
import pck from '../../images/product-package.png'

import '../Categories/Categories.css';

class Categories extends React.Component{
    render(){
        return(
            <section class="categories-section">
                <h3>Categories</h3>
        <div class="back">
            {/* <div class="arr1 arrow" id="arrow1">
                <img src={arrowLeft} alt="" />
            </div>
            <div class="slider-back">
                <div class="slider-div">
                    <div class="cat">
                             
                    </div>
                </div>
                   
            </div>
            <div class="arr2 arrow" id="arrow2">
                <img src={arrowRight} alt="" />
            </div> */}
            <div className='cat'>
                <img src={mag} alt="brochure" />
                <div className='details'>
                    <p>Magazines</p>
                </div>
            </div>
            <div className='cat'>
                <img src={brochure} alt="brochure" />
                <div className='details'>
                    <p>Brochures</p>
                </div>
            </div>
            <div className='cat'>
                <img src={pck} alt="Food Packs" />
                <div className='details'>
                    <p>Food Packs</p>
                </div>
            </div>
            <div className='cat more'>
            <img src={pck} alt="Food Packs" />
                <div className='details'>
                    <p>View More</p>
                </div>
            </div>
        </div>
        
    </section>
        )
    }
}

export default Categories ;