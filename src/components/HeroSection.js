import React from 'react';
//import '../App.css';
import './HeroSection.css';

function HeroSection(props) {
    return (
        <>
            <div className='hero-container'>
                <img className="hero-container-img" src={props.imgpath} alt="Betz-Group" />
                <h1 className="hero-container-title">{props.title}</h1>

                <p className="hero-container-subtitle">{props.subtitle}</p>

            </div>
        </>
    );
}

export default HeroSection;

