import React from 'react';
import Tile from "./Tile";

const SectionWithTiles = ({tiles}) => {
    return (
        <div className="inside_content">
            <div className="tile_list">
                {tiles.map(
                    tile => <Tile tile={{...tile}} key={tile.id}/>
                )}
            </div>
            <div className="more_btn_div">
                <button className="more_btn">View more</button>
            </div>
        </div>
    );
};

export default SectionWithTiles;