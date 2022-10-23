import React, {useState} from 'react';
import FullItemList from "./FullItemList";
import Header from "./Header";

const Catalog = ({tiles}) => {
    let [tmp, setTmp] = useState([...tiles]);
    let [searchFilter, setFilter] = useState("");
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
                            tiles.map(
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
                            )
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
                        setTmp(tiles.filter((tile) => {
                            return (name === "select filter" || name === tile.creatorName)
                                    && (num === "select filter" || parseInt(num) === tile.numOfLamps)
                                    && (type === "select filter" || type === tile.type)
                                    && (tile.creatorName.includes(searchFilter)
                                    || tile.description.includes(searchFilter)
                                    || tile.type.includes(searchFilter)
                                    || ('' + tile.numOfLamps).includes(searchFilter)
                                    || ('' + (tile.numOfLamps*100)).includes(searchFilter)
                                    || ('' + tile.power).includes(searchFilter));
                        }));
                    })}>Apply</button>
                </div>
            </div>
        </div>
            <FullItemList tiles={tmp}/>
        </div>
    );
};

export default Catalog;