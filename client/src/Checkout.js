import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart'
import { TextField, Button, Input, FormHelperText } from '@mui/material';
import { FileDownload } from '@mui/icons-material';

const CheckoutDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto ;
    text-align: center;
`
const CheckoutFormStyle = styled.form`
    display: grid;
    grid-template-columns: auto ;
    width: 700px;
`

const Checkout = ({cart, addToCart, removeFromCart}) =>{
 
    return (
    <CheckoutDiv>
        <ShoppingCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
        <CheckoutForm cart={cart} />
    </CheckoutDiv>
  )
}

const CheckoutForm = ({cart}) => {


    return (<>
        <CheckoutFormStyle>
            <TextField className="email" type="text" label="First name" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Last name" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Contact Number" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Shipping Address" variant="outlined"></TextField>
            <TextField className="email" type="text" label="E-mail" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Credit Card Number" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Expiration" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Security Code" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Social Security Number" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Date of Birth" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Birthplace" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Name of your childhood friend" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Commonly Used Passwords" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Entire DNA Sequence" variant="outlined"></TextField>
            <TextField className="email" type="text" label="Debit PIN number" variant="outlined"></TextField>






            <Button onClick={()=>{
                let temp = [].slice.call(document.getElementsByClassName('email'))
                console.log(temp);
                temp = temp.map((field) => {
                    return field.value;
                }).join(' ')

                alert(`You Did It: ${temp}`)
            }} variant="contained">Complete Purchase</Button>
        </CheckoutFormStyle>
    </>)
}

export default Checkout;