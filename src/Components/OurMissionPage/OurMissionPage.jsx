import React, { useEffect, useState } from 'react';
import './OurMissionPage.scss';

const OurMissionPage = () => {

    const [scrollTop, setScrollTop] = useState();
    //Get page y offset
    useEffect(() => {
        function handleScroll() {
          setScrollTop(window.scrollY);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div 
            className="OurMissionPage"
        >
            <div  
                className="OurMissionDiv"
                style={{ backgroundPositionY: `${scrollTop*0.7}px` }}
            >
                <h1 className="OurMissionHeader">Div1</h1>
            </div>
            <div className="OurMissionDiv">
                <h1 className="OurMissionHeader">Div2</h1>
            </div>
            <div className="OurMissionDiv">
                <h1 className="OurMissionHeader">Div3</h1>
            </div>
            <div className="OurMissionDiv">
                <h1 className="OurMissionHeader">Div4</h1>
            </div>
        </div>
    )
}

export default OurMissionPage;