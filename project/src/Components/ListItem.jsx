import React, {useContext} from 'react';
import {itemContext} from '../App';
import image from './images/lamp.png';
import {Link} from "react-router-dom";

const ListItem = ({obj}) => {
    let {item, setItem} = useContext(itemContext);
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
                {obj.description}
            </div>
            <div className="pricePart lst">
                <div className="phrase">
                    <strong>Price: </strong>
                </div>
                <div className="number">
                    $ {obj.numOfLamps * 100}
                </div>
            </div>
            <div style={{marginTop: '20px'}}>
            <Link to="/item" className="more_btn lst" onClick={
                (event) => {
                    setItem(obj);
                }
            }>View more</Link>
            </div>
        </div>
    );
};

export default ListItem;