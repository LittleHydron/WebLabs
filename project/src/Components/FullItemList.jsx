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
                        let obj = {
                            type: 'fake item',
                            id: 0
                        }
                        for (let i=0; i<tiles.length; ++ i){
                            tmp.push(<ListItem obj={tiles[i]} key={tiles[i].id}/>)
                            if ((i+1) % NumberOfItemsInRow === 0){
                                array.push(<div style={{display: 'flex', justifyContent: 'space-between'}} key={i}>{tmp}</div>);
                                tmp = [];
                            }
                            obj.id = Math.max(obj.id, tiles[i].id);
                        }
                        while(tmp.length > 0 && tmp.length < NumberOfItemsInRow){
                            ++ obj.id;
                            tmp.push(<ListItem obj={obj} key={obj.id}/>);
                        }
                        array.push(<div style={{display: 'flex', justifyContent: 'space-between'}} key={tiles.length}>{tmp}</div>);
                        return <div>{array}</div>;
                    })()
                }
            </div>
        </div>
    );
};

export default FullItemList;