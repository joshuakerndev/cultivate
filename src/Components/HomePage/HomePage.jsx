import React, { useState } from 'react';
import './HomePage.scss';
import { useInterval } from '../../hooks/useInterval';
import NewSlider from '../NewSlider/NewSlider';
import HomePageFrontBox from '../HomePageFrontBox/HomePageFrontBox';

const HomePage = () => {

    const [count, setCount] = useState(1);
    

    useInterval(() => {
        if(count < 3) {
            setCount(count + 1);
        } else {
            setCount(1);
        }
    }, 9000);

    return (
        <div className="HomePage">
            <NewSlider count={count} />
            <HomePageFrontBox count={count} />
        </div>
    )
}

export default HomePage;