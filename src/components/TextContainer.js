import React, { Component } from 'react';
import './TextContainer.css';


class TextContainer extends Component {
    render() {
        return (
            <>
                <div className="container" style={{ background: this.props.bgcolor }}>
                    <div className='text-container'>
                        <h1 className="text-container-title">{this.props.title}</h1>
                        <div className='text-container-content'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TextContainer;
