import React, {Component} from "react";
import Card from "./Card";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";

class StorePage extends Component{
    constructor(){
        super();

        this.state = {
            currentColor: "black",
            isActive: false,
            cartNum: 0,
            shoppingCart: false,
            shoppingCartPrice: 0,
            storeArr: [
                       {img: "https://source.unsplash.com/5-jX_6kqsaw/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 0,
                        price: 22.30,
                        shoppingItemPrice: 0,
                        name: "WOOF HOODIE"},
                       {img: "https://source.unsplash.com/O4TscN7RnSc/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 1,
                        price: 29.95,
                        shoppingItemPrice: 0,
                        name: "BEIGE T-SHIRT"},
                       {img: "https://source.unsplash.com/PJTfOzSo8fQ/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 2,
                        price: 39.99,
                        shoppingItemPrice: 0,
                        name: "DENIM OVERALLS WITH STRAPS"},
                       {img: "https://source.unsplash.com/GVaRGYa_cmk/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 3,
                        price: 24.99,
                        shoppingItemPrice: 0,
                        name: "GREY ONESIE"},
                       {img: "https://source.unsplash.com/AQRp2NH-O8k/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 4,
                        price: 12.99,
                        shoppingItemPrice: 0,
                        name: "YELLOW POM POM BEANIE"},
                       {img: "https://source.unsplash.com/mftVVfdXomc/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 5,
                        price: 39.99,
                        shoppingItemPrice: 0,
                        name: "FRENCH FRIES T-SHIRT"},
                       {img: "https://source.unsplash.com/icoKXy3bDBw/400x500",
                        valueNum: 0,
                        checkout: false,
                        id: 6,
                        price: 26.50,
                        shoppingItemPrice: 0,
                        name: "PINK HOODIE"}
                    ]
        }

        this.addNum = this.addNum.bind(this);
        this.addCartNum = this.addCartNum.bind(this);
        this.subtractCartNum = this.subtractCartNum.bind(this);
        this.subtractNum = this.subtractNum.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.getShoppingItemPrice = this.getShoppingItemPrice.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.removeItemPrice = this.removeItemPrice.bind(this);
        this.toggleCartActive = this.toggleCartActive.bind(this);
    };

    addCartNum(){
        let num = this.state.cartNum;
        num++;
        
        this.setState({
            cartNum: num
        })
        console.log(this.state.cartNum);
      }

    subtractCartNum(){
        let num = this.state.cartNum;
        num--;

        this.setState({
            cartNum: num
        })
    }

    toggleCartActive(){
        let tempActive = this.state.isActive;
        let realTempActive = !tempActive;
        this.setState({
            isActive: realTempActive
        })
    }

    addItemToCart(item){
        let arr = this.state.storeArr;
        console.log(item.img);
        let arrImg = item.img;
        console.log(arrImg);
        let index = arr.findIndex(items => items.img === arrImg);

        if(arr[index].checkout === false){
            arr[index].checkout = true;
            this.setState({
                storeArr: arr
            })
            console.log(this.state.storeArr);
            this.addCartNum();
        }
    }

    removeItemFromCart(item){
        let arr = this.state.storeArr;
        let arrImg = item.img;
        let index = arr.findIndex(items => items.img === arrImg);

            if(arr[index].checkout === true){
                arr[index].checkout = false;
                this.setState({
                    storeArr: arr
                })
                this.subtractCartNum(item);
                this.removeItemPrice(item);
                this.getShoppingItemPrice(item);
                this.getPrice();
            }

    }

    addNum(item){
        let arr = this.state.storeArr;
        let arrImg = item.img;
        let index = arr.findIndex(items => items.img === arrImg);
        let itemNum = arr[index].valueNum;
        itemNum++;
        arr[index].valueNum = itemNum;
        this.setState({
            storeArr: arr
        })
        this.getPrice();
        this.getShoppingItemPrice(item);
    }

    subtractNum(item){
        let arr = this.state.storeArr;
        let arrImg = item.img;
        let index = arr.findIndex(items => items.img === arrImg);
        let itemNum = arr[index].valueNum;
        if(itemNum > 0){
            itemNum--;
            arr[index].valueNum = itemNum;
            this.setState({
            storeArr: arr
        })
        }
        this.getPrice();
        this.getShoppingItemPrice(item);
    }

    getShoppingItemPrice(item){
        let arr = this.state.storeArr;
        let arrImg = item.img;
        let index = arr.findIndex(items => items.img === arrImg);
        let itemPrice = arr[index].price;
        let valueAmount = arr[index].valueNum;

        let totalPrice = itemPrice * valueAmount;
        arr[index].shoppingItemPrice = totalPrice;

        this.setState({
            storeArr: arr
        })
    }

    getPrice(){
        let arr = this.state.storeArr;
        let arrCheckout = arr.filter(items => items.checkout === true);
        let totalAmount = 0;
        let amountRound = 0;

        if(arrCheckout.length == 0){
            this.setState({
                shoppingCartPrice: amountRound
            })
            this.toggleCartActive();
        }

        else{
            for(let i = 0; i < arrCheckout.length; i++){
                let itemPrice = arrCheckout[i].price;
                let amountCheckout = arrCheckout[i].valueNum;
                let prices = itemPrice * amountCheckout;
    
                totalAmount += prices;
                amountRound = totalAmount.toFixed(2);
                this.setState({
                    shoppingCartPrice: amountRound
                })
            }
        }

    }

    removeItemPrice(item){
        let arr = this.state.storeArr;
        let arrImg = item.img;
        let index = arr.findIndex(items => items.img === arrImg);

        let totalPrice = 0;
        let numItems = 0;
        arr[index].shoppingItemPrice = totalPrice;
        arr[index].valueNum = numItems;

        this.setState({
            storeArr: arr
        })
    }

    render(){
        const{storeArr, cartNum, shoppingCart, currentColor, isActive} = this.state;
        
            const shopping =shoppingCart;
        

        return(
            <div>
                <div className="storePageHeader">
                    <Header cartNum = {cartNum}
                    addCart = {this.toggleCartActive}
                    currentColor = {currentColor}/>
                </div>
                
                <div className="itemContainer">
                    {storeArr.map((card) => {
                       return(
                    
                          <Card imgSrc={card.img}
                            addNum = {this.addNum}
                            subtractNum = {this.subtractNum}
                            id = {card.id}
                            card = {card}
                            addCart = {this.addItemToCart}
                            name = {card.name}
                            price = {card.price}
                           />
                    
                      )
                    })}
                </div>
                
                    <ShoppingCart storeArr={storeArr}
                    addStore = {this.toggleCartActive}
                    addNum = {this.addNum}
                    subtractNum = {this.subtractNum}
                    totalPrice = {this.state.shoppingCartPrice}
                    removeItem = {this.removeItemFromCart}
                    isActive = {isActive}
                   />
                
            </div>
        )
    }
}

export default StorePage;