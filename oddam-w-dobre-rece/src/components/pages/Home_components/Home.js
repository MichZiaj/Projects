import React from 'react';
import HomeHead from './HomeHead';
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutApp from "./HomeAboutApp";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizations from "./HomeOrganizations";

const Home = () => {
    return (
        <>
           <HomeHead />
            <HomeThreeColumns />
            <HomeAboutApp />
            <HomeAboutUs />
            <HomeOrganizations />

        </>
    );
};

export default Home;
