
import React, { Component } from 'react';
import './homepage-card.css'



function Simplecard({ image, title, body }) {
    return (
        <div className="card-container">
            <div className="image-container" >
                <img src={image} alt='' />

            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>

            </div>

            <div className="btn">
                <button>
                    <a>View More</a>
                </button>
            </div>

        </div>
    )
}

export default Simplecard;


