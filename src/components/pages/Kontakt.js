import React, { Component } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import TextContainer from '../TextContainer';



class Kontakt extends Component {
    render() {
        window.scrollTo(0, 0)
        return <div>
            <HeroSection
                title="Kontakt"
                imgpath="images/Kontakte.jpg" />

            <div className="content">
                <TextContainer title="Kontakt">
                    <p>Florian Stöferle</p>
                    <p>Kreppachstr. 14</p>
                    <p>88471 Untersulmetingen</p>
                    <p>Email: flo.stoeferle@gmail.com</p>
                </TextContainer>
            </div>
        </div >;
    }
}

export default Kontakt;


