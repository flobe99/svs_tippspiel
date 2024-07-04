import React, { Component } from 'react';
import './Content.css';
import CardItem from './CardItem';

class TextContent extends Component {
    render() {
        return (
            <div className='content'>
                <h1>
                    {this.props.label}
                </h1>
                <p className='content-text'>
                    {this.props.children}
                </p>
                <div className='CardItem'>
                    <CardItem
                        src='images/Aktive-2019.jpg'
                        text='Unsere Aktive Mannschaft im Jahr 2019/2020'
                        label='Aktive 2019'
                        path='/services'
                    />
                </div>


            </div>
        )
    }
}

export default TextContent;


