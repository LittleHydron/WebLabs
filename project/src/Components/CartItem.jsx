import React, {useState} from 'react';
import img from './images/no-image-cart.png';
import {useDispatch, useSelector} from "react-redux";
import amountIncrease from "../actions/amountIncrease";
import amountDecrease from "../actions/amountDecrease";

const CartItem = ({index}) => {
    let state = useSelector(state=>state);
    let [amount, setAmount] = useState(state[index][1]);
    let dispatch = useDispatch();
    return (
        <div className="cartItem">
            <div className="left-part" style={{display:'flex', width: '40%'}}>
                <img src={img} alt=""/>
                <div style={{margin:'auto', width:'max-content'}}>
                    <h3>{state[index][0].color} lamp created by {state[index][0].creatorName} </h3>
                </div>
            </div>
            <div className="right-part" style={{display: 'flex', width: '40%'}}>
                <div className="control-wrap" style={{display: 'flex', margin: 'auto', justifyContent: 'space-between', width: '100%'}}>
                    <div className="control-part">
                        <button className="more_btn white" onClick={()=>{
                            dispatch(amountIncrease(index));
                            setAmount(amount+1);
                        }}>+</button>
                        <div style={{padding:'10px'}}>{amount}</div>
                        <button className="more_btn white" onClick={()=>{
                            dispatch(amountDecrease(index));
                            if (amount > 0)
                                setAmount(amount-1);
                        }}>-</button>
                    </div>
                    <div className="price">
                        <h2>${state[index][0].numOfLamps * 100 * amount}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;