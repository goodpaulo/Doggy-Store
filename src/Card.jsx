import React, {Component} from "react";

class Card extends Component{
    constructor(){
        super();
    };

    render(){
        const{imgSrc, id, addCart, card, name, price} = this.props;

        return(
            <div key={id} className="item">
                <img src={imgSrc} alt="dog"/>
                <p className="cardInfo">{name}</p>
                <p className="cardInfo">{price} USD</p>
                <button className="itemButton" key={id} onClick={() => addCart(card)}>Add to cart</button>
            </div>
        )
    }
}

export default Card;