import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import NewArrival from '../NewArrival/NewArrival';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Tools></Tools>
            <NewArrival></NewArrival>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;