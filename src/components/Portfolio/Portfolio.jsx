import React from 'react';
import './Portfolio.css';

const Portfolio = ({title, text, color }) => {
    const PortfolioStyle = {
        color: color
    };

    return (
        <div className="portfolio" style={PortfolioStyle}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Portfolio;