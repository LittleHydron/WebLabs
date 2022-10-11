import React from 'react';

const Catalog = ({tiles}) => {
    return (
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
                    <button className="more_btn" style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Catalog;