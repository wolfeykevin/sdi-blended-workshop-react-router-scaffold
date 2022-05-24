import './App.css';
import React from 'react';
import styled from 'styled-components';

const ShoppingCartDiv = styled.div`
    text-align: center;
    transform: translate(-1%, 0%);
`
const CarttUl = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: auto ;
    text-align: center;
    width: 80%;
    margin: auto;
    justify-content: center;
    transform: translate(-1%, 0%);
`

const CartItemDiv = styled.div`
    padding-top: 20px;
`

const CartItem = ({ item, addToCart, removeFromCart }) => {
    return (
        <CartItemDiv>
            <img src = {item.wallet.image} alt={item.wallet.name} width={100}></img>
            <p>{item.wallet.name}</p>
            <p>Price per item: {item.wallet.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={()=>{
                addToCart(item.wallet);
            }}>+
            </button>
            <button onClick={()=>{
                removeFromCart(item.wallet);
            }}>-
            </button>
        </CartItemDiv>
    )
  }

const ShoppingCart = ({ cart, addToCart, removeFromCart }) =>
{
  return (
      <ShoppingCartDiv>
        <CarttUl>
            <li>
                <h1>Shopping Cart</h1>
            </li>
            {cart.map(element => {
                return <CartItem item={element} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
            })}
            <li>
                <p>Total Price: ${cart.map(element=>element.quantity*element.wallet.price).reduce((a,b) => a+b,0)}</p>
            </li>
        </CarttUl>
        
        
      </ShoppingCartDiv>

  )
}

export default ShoppingCart;