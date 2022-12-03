import React, {useState} from 'react';
import Tile from "./Tile";
import {Link} from "react-router-dom";
import {getRequest, sleep} from "../API";

const SectionWithTiles = () => {
    let tiles = [];
    let [needLoading, setNeed] = useState(true);
    let comeBack = [];
    getRequest({}).then(res => {
        tiles = [...res.data];
        comeBack = tiles.filter(
            (value, index) => {
                return (index < NumberOfItemsInRow);
            }
        );
        sleep(300);
        setNeed(false);
    });
    let [temp, setTemp] = useState([...comeBack]);
    let NumberOfItemsInRow = 6;
    let [all, setAll] = useState(false);
    return (
        <div className="wrap">{
            (() => {
                if (needLoading){
                    return <div className="loader">Loading...</div>
                }else
                return <div className="inside_content">
                    <div className="tile_list">
                        {
                            (() => {
                                let array = [];
                                let tmp = [], maxKey = 0;
                                for (let i = 0; i < temp.length; ++i) {
                                    tmp.push(<Tile tile={temp[i]} key={temp[i].id}/>)
                                    maxKey = Math.max(maxKey, temp[i].id);
                                    if ((i + 1) % NumberOfItemsInRow === 0) {
                                        array.push(<div style={{display: 'flex', justifyContent: 'space-between'}} key={i}> {tmp}</div>);
                                        tmp = [];
                                    }
                                }
                                while (tmp.length > 0 && tmp.length < NumberOfItemsInRow) {
                                    ++maxKey;
                                    tmp.push(<Tile tile={{type: 'fake item'}} key={maxKey}/>);
                                }
                                array.push(<div style={{display: 'flex', justifyContent: 'space-between'}} key={temp.length}>{tmp}</div>);
                                return <div>{array}</div>;
                            })()
                        }
                    </div>
                    <div className="more_btn_div">
                        <Link to="/" className="more_btn" onClick={() => {
                            setAll(!all);
                            if (all) {
                                setTemp([...tiles]);
                            } else {
                                setTemp([...comeBack]);
                            }
                        }}>View more</Link>
                    </div>
                </div>
            })()
        }
        </div>
    );
};

export default SectionWithTiles;