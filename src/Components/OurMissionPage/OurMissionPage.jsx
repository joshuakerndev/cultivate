import React, { useEffect } from 'react';
import './OurMissionPage.scss';

const OurMissionPage = () => {

    //Get page y offset
    useEffect(() => {
        function handleScroll() {
          const scrollTop = window.scrollY;
          console.log(scrollTop);
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