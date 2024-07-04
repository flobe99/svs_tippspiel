import React, { Component } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';


class NotFound extends Component {
    render() {

        return <div>
            <HeroSection
                title="Error, page not found"
                imgpath="images/Error.jpg"
            />
            <Cards />
        </div>;
    }
}

export default NotFound;


