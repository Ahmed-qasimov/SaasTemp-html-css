import React from 'react';
import './dociye.css'

const Loader = (props) => {
    return (
        <div>
            <div className="ui segment loader-container">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">{props.text}</div>
                </div>
                <p></p>
            </div>
        </div>
    )
    }

export default Loader;