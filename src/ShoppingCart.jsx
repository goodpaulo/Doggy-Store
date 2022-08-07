import React, {Component} from "react";
import './App.css';

class ShoppingCart extends Component{
    constructor(){
        super();
    };

    render(){
        const{storeArr, addStore, addNum, subtractNum, totalPrice, removeItem, isActive} = this.props;

        let cardArr;
            cardArr = storeArr.filter((item) => item.checkout === true)
        return(
            <div>
             <div className={`background ${isActive ? "backgroundShown": ""}`} onClick={addStore}></div>
             <div className={`shoppingCart ${isActive ? "cartShown": ""}`}>
                <p className="shoppingHeader">Your Shopping Cart</p>
                <div className="cartItemContainer">{cardArr.map((card) => {
                     return(
                         <div className="cartItem">
                             <img src={card.img} alt="dog"
                             className="cartImg" />
                             <div className="cartRight">
                                 <div className="cartRightText">
                                    <p className="itemName">{card.name.substring(0, 10)}...</p>
                                    <p className="itemPrice">${card.shoppingItemPrice.toFixed(2)}</p>
                                 </div>
                                <div className="buttonContainer">
                                    <button onClick={() => subtractNum(card)}
                                    className="shopButton">-</button>
                                    <p className="valueNum">{card.valueNum}</p>
                                    <button onClick={() => addNum(card)}
                                    className="shopButton">+</button>
                                </div>
                             <button onClick={() => removeItem(card)}>Remove</button>
                             </div>
                         </div>
                     )
                 })}</div>
                            <p className="totalPrice">Total: {totalPrice}</p>
                            <button className="checkoutButton">Checkout</button>
                            <button className="closeButton" onClick={addStore}>Close</button>
              </div>
            </div>
        )
    }
}

export default ShoppingCart;