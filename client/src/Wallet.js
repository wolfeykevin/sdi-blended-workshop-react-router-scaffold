import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const WalletUl = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: center;
    width: 80%;
    margin: auto;
    justify-content: center;
    transform: translate(-1%, 0%);
`

const WalletInfoUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    grid-template-columns: auto auto auto;`
    



const WalletInfoLiLeft = styled.li`
    
    padding: 4px;

`
const WalletInfoLiCenter = styled.li`
    
    padding: 4px;
    max-width: 500px;


`
const WalletInfoLiRight = styled.li`
    
    padding: 4px;

`

const WalletImg = styled.img`
    width: 30%;
    height: auto;
    transition-duration: 0.4s;
    &:hover {
      width: 35%;
      transition-duration: 0.4s;
      box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

    }

`
const WalletImageSpecific = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;



`


const WalletThumbnail = ({ wallet }) => {
    let imagePath = wallet.image;
    const navigate = useNavigate();

    return (
      <li key={wallet.id} onClick={() => {
          navigate(`/id/${wallet.id}`, { state: { wallet: wallet } })
      }}>
        <WalletImg src={imagePath} alt={wallet.name} />
        <p>{wallet.name}</p>
        <p>${wallet.price}</p>
      </li>
    )
}

const WalletList = ({ data }) => {

  return (
    <WalletUl>
      {data.map(element => {
        return <WalletThumbnail wallet={element} />
      })}
    </WalletUl>
  )
}



const WalletDetails = ({ data, cart, addToCart }) => {
  let params = useParams();
  const navigate = useNavigate();
  if ((data.length === 1) || (params.idnumber > data.length-1))
  {
    return <h1>data is undefined</h1>
  } else {
    
    let wallet = data[params.idnumber]
    // console.log(wallet)
    // let wallet = data.wallet
    let imagePath = wallet.image;
    return(
      <WalletInfoUl>
        <WalletInfoLiLeft>
            <button><img src={wallet.image} alt="wallet front" width={150} onClick={() => {document.getElementById('walletImgView').src=wallet.image}}/></button>
            <br></br>
            <button><img src={wallet.back} alt="wallet back" width={150} onClick={() => {document.getElementById('walletImgView').src=wallet.back}}/></button>
            <br></br>
            <button onClick = {() =>{
              addToCart(wallet);
              navigate(`/cart`);
            }}>Add to Cart</button>
        </WalletInfoLiLeft>

        <WalletInfoLiCenter>
          <WalletImageSpecific id="walletImgView" src={imagePath} alt={wallet.name} />      
          <p>{wallet.name}</p>
          <p>${wallet.price}</p>
        </WalletInfoLiCenter>

        <WalletInfoLiRight>
          <p>{wallet.color}</p>
          {wallet.info.map((el) => {
            return <p>{el}</p>
          })}
        </WalletInfoLiRight>



      </WalletInfoUl>
  )
  }

}

export { WalletList, WalletThumbnail, WalletDetails }



