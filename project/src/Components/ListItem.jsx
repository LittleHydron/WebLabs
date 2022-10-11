import React from 'react';
import image from './images/lamp.png';

const ListItem = ({obj}) => {
    if (obj.type === "fake item") return(
        <div style={{width: '20%'}}>

        </div>
    );
    return (
        <div className="listItem">
            <div className="imagePart">
                <img src={image} alt="lamp..."/>
            </div>
            <h3>Created by {obj.creatorName}</h3>
            <div className="stupidText lst">
                This lamp is so great that my mother decided to light it every night so that my neighbours can't sleep to make them see this lamp whole night.
            </div>
            <div className="pricePart lst">
                <div className="phrase">
                    <strong>Price: </strong>
                </div>
                <div className="number">
                    $ {obj.numOfLamps * 100}
                </div>
            </div>
            <button className="more_btn lst">View more</button>
        </div>
    );
};

export default ListItem;