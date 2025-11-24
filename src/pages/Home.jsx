import React from 'react';
import Slider from '../component/Slider';
import PopularSection from '../component/PopularSection';
import WinterCareTips from '../component/WinterCareTips';
import ExpertVets from '../component/ExpertVets';

const Home = () => {
    return (
        <div>
            <title>Home</title>
           <Slider/>
           <PopularSection/>
           <WinterCareTips/>
           <ExpertVets/>
        </div>
    );
};

export default Home;