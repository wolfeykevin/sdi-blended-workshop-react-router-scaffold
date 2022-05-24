import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { WalletList, WalletDetails } from './Wallet'
import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout'


const NavigationButton = styled.button`
  display: flex;
  flex-direction: row;
  float: center;
  border-radius: 8px;
  margin: auto;  
  text-align: center;
  padding: 0px;
  background: gray;
  color: white;
  height: 2rem;
  padding-top: 0.33rem;
  padding-left: 1rem;
  width: 7rem;
  transition-duration: 0.4s;
  &:hover {
    color: white;
    transition-duration: 0.4s;
    background: darkblue;
  }
`

const HeaderDiv = styled.div`


`
const StyledH1 = styled.h1`
  font-size: 48px;
  font-color: black;
  margin: auto;
  text-align: center;
`


function App() {
  const [walletData, setWalletData] = useState([{
    id: 0,
    image: '',
    back: '',
    name: '',
    price: 0,
    color: '',
    info: [],
  }])

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let index = cart.findIndex(element => element.wallet === item)

    if (index === -1)
    {
      setCart(cart.concat([{
        quantity: 1,
        wallet: item
      }]));
    } else{
      let tempCart = cart.slice();
      tempCart[index].quantity++;
      setCart(tempCart);
    }

  }

  const removeFromCart = (item) => {
    let index = cart.findIndex(element => element.wallet === item);
    
    if (index !== -1)
    {
      let tempCart = cart.slice();
      let tempItem = tempCart[index];
      if(tempItem.quantity > 1)
      {
        tempItem.quantity--;
        setCart(tempCart);
      }
      else{
        tempCart.splice(index, 1);
        setCart(tempCart);
      }
    }

  }
  

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => {
      setWalletData(data.wallets);
      console.log('did fetch data')
    })
  }, [])

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={< WalletList data = {walletData}/>} />            
        <Route path='/id/:idnumber' element={<WalletDetails data = {walletData} cart={cart} addToCart={addToCart} />} />
        <Route path='/cart' element={<ShoppingCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
        <Route path='/checkout' element={<Checkout cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
      </Routes>
    </>
  );
}

const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <StyledH1>BOTTEGA VENETA</StyledH1>
      <NavigationButton onClick={() => {
          navigate(`/`)
      }}>
        Home Page
      </NavigationButton>
      <br></br>
      <NavigationButton onClick={() => {
          navigate(`/cart`)
      }}>
        Shopping Cart
      </NavigationButton>
      <br></br>
      <NavigationButton onClick={() => {
          navigate(`/checkout`)
      }}>
        Checkout
      </NavigationButton>
      <br></br>
    </HeaderDiv>
  )
}

export default App;