
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';

const WalletUl = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto
`

const WalletThumbnail = ({ wallet }) => {
    let imagePath = '.' + wallet.image;
    console.log(imagePath);
    const navigate = useNavigate()
    return (
      <li key={wallet.id} onClick={() => {
          navigate(`/id/${wallet.id}`, { state: { data: wallet } })
      }}>
        <img src={imagePath} alt={wallet.name}/>
        <p>{wallet.name}</p>
        <p>${wallet.price}</p>
      </li>
    )
}

const WalletList = ({ data }) => {
    // console.log(data);
  return (
    <WalletUl>
      {data.map(element => {
        return <WalletThumbnail wallet={element} />
      })}
    </WalletUl>
  )
}




const WalletDetails = () => {
    const location = useLocation();

    return(
        <div>
        
        <div/>
    )
}

export { WalletList, WalletThumbnail, WalletDetails }
