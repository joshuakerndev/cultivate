import React from 'react';
import './HomePageFrontBox.scss';

const HomePageFrontBox = ({ count }) => {

    const boxText = [
        'Nourishing the mind, body, and soul', 
        'Freshest produce, at your fingertips',
        'Our passionate team is growing!'
    ]

    return (
        <div className="HomePageFrontBox">
            <h1 className="FrontBoxHeader">CULTIVATE</h1>
            <p className="FrontBoxRadioText">{boxText[ count -1 ]}</p>
            <div className="RadioGroup">
                <input 
                    className="FrontBoxRadioButton" 
                    type="radio" 
                    value="1" 
                    name="radioButton"
                    checked={count === 1 ? "true" : ""} 
                />
                <input 
                    className="FrontBoxRadioButton" 
                    type="radio" 
                    value="2" 
                    name="radioButton" 
                    checked={count === 2 ? "true" : ""} 
                />
                <input 
                    className="FrontBoxRadioButton" 
                    type="radio" 
                    value="3" 
                    name="radioButton" 
                    checked={count === 3 ? "true" : ""} 
                />
            </div>
        </div>
    )
}

export default HomePageFrontBox;