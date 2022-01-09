import React from 'react';
import HomeHead from './HomeHead';
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutApp from "./HomeAboutApp";
import HomeAboutUs from "./HomeAboutUs";


const Home = () => {
    return (
        <>
           <HomeHead />
            <HomeThreeColumns />
            <HomeAboutApp />
            <HomeAboutUs />

        </>
    );
};

export default Home;
