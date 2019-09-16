import React from 'react';


function Card (props){
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.image} alt="Camaro" />
            </div>
            <div className="card-label flex-row">
                <h3>BMW 3SERIES V8</h3>
                <span className="price theme-color">$4,400</span>
            </div>
            <div className="card-description">
                <hr />
                <p>
                    Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street
                    art pork belly.
                </p>
            </div>
            <div className="card-button flex-row">
                <button className="theme-color-btn btn" id="" onclick="openPreview()">PREVIEW</button>
            </div>
        </div>
    )
}

export default Card;