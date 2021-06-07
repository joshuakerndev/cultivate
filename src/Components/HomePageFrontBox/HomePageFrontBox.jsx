import React from 'react';
import './HomePageFrontBox.scss';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePageFrontBox = ({ count }) => {

    const boxText = [
        {
            text: 'Nourishing the mind, body, and soul',
            link : '/our-mission'
        }, 
        {
            text: 'Freshest produce, at your fingertips',
            link : '/shop'
        },
        {
            text: 'Our passionate team is growing!',
            link : '/contact'
        }
    ]

    return (
        <div className="HomePageFrontBox">
            <h1 className="FrontBoxHeader">CULTIVATE</h1>
            <p className="FrontBoxRadioText">
                <Link className="FrontBoxLink" to={boxText[ count -1 ].link}>
                    {boxText[ count -1 ].text}
                </Link>
            </p>
            <div className="RadioGroup">
                <label className="CustomRadioContainer">
                    <input 
                        className="FrontBoxRadioButton" 
                        type="radio" 
                        value="1" 
                        name="radioButton"
                        checked={count === 1 ? "true" : ""} 
                    />
                    <span className="CustomRadioButton"></span>
                </label>
                <label className="CustomRadioContainer">
                    <input 
                    className="FrontBoxRadioButton" 
                    type="radio" 
                    value="2" 
                    name="radioButton" 
                    checked={count === 2 ? "true" : ""} 
                    />
                    <span className="CustomRadioButton"></span>
                </label>
                <label className="CustomRadioContainer">
                    <input 
                        className="FrontBoxRadioButton" 
                        type="radio" 
                        value="3" 
                        name="radioButton" 
                        checked={count === 3 ? "true" : ""} 
                    />
                    <span className="CustomRadioButton"></span>
                </label>
            </div>
        </div>
    )
}

export default HomePageFrontBox;