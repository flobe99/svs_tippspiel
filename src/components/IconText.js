import React, { Component } from 'react';
import './IconText.css';

class IconText extends Component {
    render(props) {
        return (
            <>
                <div className="icon-Box-items">
                    <div className="icon">
                        <i className="far fa-check-circle" />
                    </div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.itemone}</p>
                    <p>{this.props.itemtwo}</p>
                </div>

            </>
        );
    }
}

export default IconText;
