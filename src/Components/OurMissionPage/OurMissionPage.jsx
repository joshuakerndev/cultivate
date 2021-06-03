import React, { useEffect, useState } from 'react';
import './OurMissionPage.scss';
import missionImage1 from '../../assets/imgs/16.jpg';
import field from '../../assets/imgs/field.png';
import houses from '../../assets/imgs/houses.png';
import mountain from '../../assets/imgs/mountain.png';
import sky from '../../assets/imgs/sky.png';


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
                <div className="MountainParallaxDiv">
                    <img
                        src={field}
                        className="field"
                        alt="field" />
                    <img
                        src={houses}
                        className="houses"
                        alt="houses" />
                    <img
                        src={mountain}
                        className="mountain"
                        alt="mountain" />
                    <img
                        src={sky}
                        className="sky"
                        alt="sky" />
                    <h1 className="OurMissionHeader" id="OurMissionFirstHeader">What is the Secret to Cultivate?</h1>
                    <section className="shadow">

                    </section>  
                </div>
                
            </div>
            
            

            <div className="OurMissionDiv">
                
                <div className="OurMissionText1">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget 
                        ultrices diam. Sed posuere ultrices congue. Morbi laoreet rhoncus 
                        porta. Vestibulum eleifend efficitur imperdiet. Ut feugiat volutpat 
                        lectus, vestibulum elementum nisl. Suspendisse potenti. Vivamus mollis 
                        sit amet arcu at bibendum.
                    </p>
                </div>
                <div className="OurMissionImage1">
                    <img
                        src={missionImage1}
                        alt="Planter seedlings" />
                </div>
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