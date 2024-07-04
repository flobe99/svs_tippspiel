import React, { Component } from 'react';
import '../../App.css';
import EmailKontakt from '../EmailKontakt';
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
                    <p>Florian Betz</p>
                    <p>Kleines Eschle 24</p>
                    <p>88471 Baustetten</p>
                    <p>Email: florian@betz-group.de</p>
                </TextContainer>
            </div>
        </div >;
    }
}

export default Kontakt;


