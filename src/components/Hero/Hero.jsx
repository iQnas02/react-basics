import React from 'react';
import './Hero.css';

const Hero = ({title, subtitle, text, color }) => {
    const heroStyle = {
        color: color
    };

    return (
        <div className="hero" style={heroStyle}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{text}</h3>
        </div>
    );
};

export default Hero;