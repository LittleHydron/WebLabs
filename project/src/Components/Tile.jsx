import React from 'react';
import image from './images/lamp.png';

const Tile = ({tile}) => {
    if (tile.type === "fake item"){
        return (
            <div className="Tile1">

            </div>
        );
    }
    return (
        <div className="Tile">
            <img src={image} alt="..."/>
            <div className="tile_heading">
                <strong>Created by {tile.creatorName}</strong>
            </div>
            <div className="tile_text">
                <p>Type: {tile.type}</p>
                <p>Has {tile.numOfLamps} lamps</p>
                <p>Power: {tile.power}</p>
            </div>
        </div>
    );
};

export default Tile;