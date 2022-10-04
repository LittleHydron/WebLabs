import React from 'react';
import logo from './images/Tip.png'

const Description = () => {
    return (
        <div className="inside_content description">
            <div className="image_part1">
                <img src={logo} alt="no_image"/>
            </div>
            <div className="text_part1">
                <h1>Welcome</h1>
                <p>To my fabulous lighter shop! Here you can find and buy almost any lighter or lamp you want!</p>
            </div>
        </div>
    );
};

export default Description;