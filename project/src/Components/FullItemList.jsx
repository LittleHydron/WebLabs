import React from 'react';
import ListItem from "./ListItem";

const FullItemList = ({tiles}) => {
    const NumberOfItemsInRow = 4;
    return (
        <div className="wrap">
            <div className="inside_content">
                {
                    (()=>{
                        let array = [];
                        let tmp = [];
                        for (let i=0; i<tiles.length; ++ i){
                            tmp.push(<ListItem obj={tiles[i]} key={i}/>)
                            if ((i+1) % NumberOfItemsInRow === 0){
                                array.push(<div style={{display: 'flex', justifyContent: 'space-between'}}>{tmp}</div>);
                                tmp = [];
                            }
                        }
                        while(tmp.length > 0 && tmp.length < NumberOfItemsInRow){
                            tmp.push(<ListItem obj={{type: 'fake item'}} key={tmp.length+1}/>);
                        }
                        array.push(<div style={{display: 'flex', justifyContent: 'space-between'}}>{tmp}</div>);
                        return <div>{array}</div>;
                    })()
                }
            </div>
        </div>
    );
};

export default FullItemList;