import React from 'react';
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'

import '../Categories/Categories.css';

class Categories extends React.Component{
    render(){
        return(
            <section class="categories-section">
                <h3>Categories</h3>
        <div class="back">
            <div class="arr1 arrow" id="arrow1">
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
            </div>
        </div>
    </section>
        )
    }
}

export default Categories ;