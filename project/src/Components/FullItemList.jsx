import React from 'react';
import InsideContentList from "./InsideContentList";

const FullItemList = ({tiles}) => {

    const NumberOfItemsInRow = 4;

    let tilesByRows = [];
    for (let i=0; i<tiles.length; ++ i){
        if (i % NumberOfItemsInRow === 0){
            tilesByRows.push([]);
        }
        tilesByRows[Math.floor(i/NumberOfItemsInRow)].push(tiles[i]);
    }
    while (tilesByRows[Math.floor(tiles.length / NumberOfItemsInRow)].length < NumberOfItemsInRow){
        tilesByRows[Math.floor(tiles.length / NumberOfItemsInRow)].push({
            type: "fake item"
        });
    }
    return (
        <div className="wrap">
            {
                tilesByRows.map(
                    (tiles, index) => {
                        return <InsideContentList tiles={tiles} key={index}/>;
                    }
                )
            }
        </div>
    );
};

export default FullItemList;