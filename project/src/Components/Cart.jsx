import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

const Cart = () => {
    let cartList = useSelector(state=>state);
    let state = useSelector(state=>state);
    return (
        <div className="wrap">
            <div className="inside_content" style={{width: '70%'}}>
                <section style={{margin: 'auto', width: 'max-content'}}>
                    <h1>Shopping cart</h1>
                </section>
                <div className="cartList">
                    {
                        (() => {
                            if(cartList){
                                return cartList.map(
                                    (item,ind) => {
                                        return <CartItem index={ind} key={item[0].id}/>;
                                    }
                                )
                            }else{
                                return <div style={{fontSize: '20px', margin:'auto', width: 'max-content'}}>Cart is empty</div>
                            }
                        })()
                    }
                </div>
                <div className="totalAmount" style={{display: 'flex', justifyContent:'end'}}>
                    <div style={{display:'flex', width:'20%', justifyContent: 'space-between'}}>
                        <div> <h3>Total price:</h3></div>
                        <div> <h3>{
                            (() => {
                                let s = 0;
                                for (let elem of state){
                                    s += elem[0].numOfLamps * 100 * elem[1];
                                }
                                return s;
                            })()
                            }$</h3></div>
                    </div>
                </div>
                <div className="buttons" style={{display:'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <Link to="/catalog" className="more_btn white">Back to catalog</Link>
                    <Link className="more_btn">Continue</Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;