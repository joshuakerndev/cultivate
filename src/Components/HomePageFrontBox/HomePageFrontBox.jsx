import React from 'react';
import './HomePageFrontBox.scss';

const HomePageFrontBox = () => {
    return (
        <div className="HomePageFrontBox">
            <h1 className="FrontBoxHeader">CULTIVATE</h1>
            <p className="FrontBoxRadioText">Nourishing the mind, body, and soul</p>
            <div className="RadioGroup">
                <input className="FrontBoxRadioButton" type="radio" value="1" name="radioButton" />
                <input className="FrontBoxRadioButton" type="radio" value="2" name="radioButton" />
                <input className="FrontBoxRadioButton" type="radio" value="3" name="radioButton" />
            </div>
        </div>
    )
}

export default HomePageFrontBox;