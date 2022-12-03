import React, {useContext, useState} from 'react';
import img from './images/big_lamp.jpeg';
import {itemContext} from "../App";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import listInsert from "../actions/listInsert";

const Item = () => {
    let dispatch = useDispatch();
    let {item, setItem} = useContext(itemContext);
    let [number, setNumber] = useState(1);
    return (
        <div className="wrap">
            <div className="inside_content">
                <div className="item-content">
                        <div className="item-image-part">
                            <img src={img} alt="Lamp..."/>
                        </div>
                        <div className="item-text-part">
                            <div className="characteristics_part">
                                <div className="characteristic">{item.type}</div>
                                <div className="characteristic">{item.creatorName}</div>
                                <div className="characteristic">{item.power}</div>
                                <div className="characteristic">{item.numOfLamps}</div>
                            </div>
                            <h1>Great Lamp!</h1>
                            <p>{item.description}</p>
                            <div className="field_part">
                                <div className="field">
                                    Enter amount<br/>
                                    <input id="amountField" type="number" name="amount" onChange={((event) => {
                                        event.target.value = '' + Math.max(parseInt(event.target.value), 0);
                                        setNumber(parseInt(event.target.value));
                                    })}/>
                                </div>
                                <div className="field">
                                    Choose colour<br/>
                                    <select id="colourSelect">
                                        <option value="white">White</option>
                                        <option value="green">Green</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="yellow">Yellow</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="item-price">
                    <h2>Price: {item.numOfLamps * 100 * number}$</h2>
                    <div className="button-part">
                        <Link to="/catalog" className="more_btn white">Go back</Link>
                        <Link to="/catalog" className="more_btn" onClick={() => {
                            let colour = document.getElementById("colourSelect").value;
                            let amount = document.getElementById("amountField").value;
                            if (amount === "") amount = '1';
                            dispatch(listInsert(
                                {body: {...item, color: colour}, amount: parseInt(amount)}
                            ));
                        }}>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;