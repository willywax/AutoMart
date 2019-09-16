import React from 'react';
import Card from './Card';
import Camaro from '../images/camaro.jpg';
import Car2 from '../images/car2.jpeg';
import Car3 from '../images/car3.jpg';
import Dodge from '../images/dodge.jpg';

function Content(){
    return (
        <div id="content">
            <Card image={Camaro} />
            <Card image={Car2} />
            <Card image={Car3} />
            <Card image={Dodge} />
        </div>
    )
}

export default Content;