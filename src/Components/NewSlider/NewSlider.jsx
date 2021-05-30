import React from 'react';
import './NewSlider.scss';
import firstImage from '../../assets/imgs/1.jpg';
import secondImage from '../../assets/imgs/3.jpg';
import thirdImage from '../../assets/imgs/4.jpg';


export default function NewSlider({ count }) {

    let currentImage = count - 1;

    let sliderData = [firstImage, secondImage, thirdImage];

    return (
        <section className="slider">
            {sliderData.map((slide, index) => {
                return (
                    <div 
                        className={index === currentImage ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === currentImage && (<img src={slide} alt="show image" className="image"></img>)}
                    </div>
                )
            })}
        </section>
    )
}