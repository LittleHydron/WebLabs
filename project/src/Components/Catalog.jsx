import React, {useState} from 'react';
import FullItemList from "./FullItemList";
import Header from "./Header";
import {getRequest, sleep} from "../API";

let descriptions=  [
    "This lamp is so great that my mother decided to light it every night so that my neighbours can't sleep to make them see this lamp whole night.",
    "Fabulous lamp for your crafting table, that will fully express great and wild nature of your imagination and creativity.",
    "Masterpiece for those, who is willing to show their friends how great, smart and nearly perfect they are.",
];

let tmp = [], tiles = [];
let firstLoad = true;

const Catalog = () => {
    let [searchFilter, setFilter] = useState("");
    let [needLoading, setNeed] = useState(false);
    if (firstLoad) {
        firstLoad = false;
        setNeed(true);
        getRequest({}).then(resp => {
            sleep(300);
            console.log("now");
            tiles = [...resp.data];
            tmp = [...tiles];
            for (let i = 0; i < tiles.length; ++i) {
                tiles[i].description = descriptions[i % 3];
            }
            setNeed(false);
        });
    }
    return (
        <div><Header needSearch={true} setFilter={setFilter}/>
            <div className = "filterPart">
                <div className = "filterPartContent">
                    <div className="leftPart">
                        <select className = "option" name="Filter" id="creatorNameSelect">
                            <option value="select filter"> Select creator's name</option>
                            {
                                tiles.map(
                                    (value) => {
                                        return value.creatorName;
                                    }
                                ).filter(
                                    (value, index, self) => {
                                        return self.indexOf(value) === index;
                                    }
                                ).sort(
                                    (value1, value2) => {
                                        return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                    }
                                ).map(
                                    (el) => {
                                        return <option value={el} key={el}> {el} </option>
                                    }
                                )
                            }
                        </select>
                        <select className = "option" name="Filter" id="numberSelect">
                            <option value="select filter"> Select number of lamps</option>
                            {
                                (() => {
                                    console.log(tiles);
                                    return tiles.map(
                                        (value) => {
                                            return value.numOfLamps;
                                        }
                                    ).filter(
                                        (value, index, self) => {
                                            return self.indexOf(value) === index;
                                        }
                                    ).sort(
                                        (value1, value2) => {
                                            return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                        }
                                    ).map(
                                        (el) => {
                                            return <option value={el} key={el}> {el} </option>
                                        }
                                    );
                                })()
                            }
                        </select>
                        <select className = "option" name="Filter" id="typeSelect">
                            <option value="select filter"> Select type</option>
                            {
                                tiles.map(
                                    (value) => {
                                        return value.type;
                                    }
                                ).filter(
                                    (value, index, self) => {
                                        return self.indexOf(value) === index;
                                    }
                                ).sort(
                                    (value1, value2) => {
                                        return (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1));
                                    }
                                ).map(
                                    (el) => {
                                        return <option value={el} key={el}> {el} </option>
                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="rightPart">
                        <button className="more_btn white" onClick={(()=>{
                            let name = document.getElementById("creatorNameSelect").value;
                            let num = document.getElementById("numberSelect").value;
                            let type = document.getElementById("typeSelect").value;
                            setNeed(true);
                            let props = {
                                type: null,
                                name:null,
                                numberOfLamps: null
                            };
                            if (name !== "select filter"){
                                props.creatorName = name;
                            }
                            if (num !== "select filter"){
                                props.numberOfLamps = parseInt(num);
                            }
                            if (type !== "select filter"){
                                props.type = type;
                            }
                            getRequest({
                                type:props.type,
                                numberOfLamps:props.numberOfLamps,
                                creatorName:props.creatorName
                            }).then(resp => {
                                sleep();
                                let d = resp.data;
                                for (let i=0; i<d.length; ++ i){
                                    d[i].description = descriptions[i%3];
                                }
                                tmp = d.filter((tile) => tile.creatorName.includes(searchFilter)
                                    || tile.description.includes(searchFilter)
                                    || tile.type.includes(searchFilter)
                                    || ('' + tile.numOfLamps).includes(searchFilter)
                                    || ('' + (tile.numOfLamps*100)).includes(searchFilter)
                                    || ('' + tile.power).includes(searchFilter));
                                setNeed(false);
                            });
                        })}>Apply</button>
                    </div>
                </div>
            </div>
            {
                (() => {
                    if (needLoading){
                        return <div className="loader">Loading...</div>
                    }else{
                        return <FullItemList tiles={tmp}/>
                    }
                })()
            }
        </div>
    );
};

export default Catalog;