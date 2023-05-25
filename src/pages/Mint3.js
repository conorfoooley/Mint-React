import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/scss/Mint3.scss';
import mayorImg from '../style/images/skyscraper_logo_empiresrise.png';
import skyscraperNFTImg from '../style/images/skyscraper_NFT.png';
import { Row, Col } from 'react-bootstrap';
import Web3 from 'web3';

const Mint3 = () => {
    const [nftCount, setNftCount] = useState(1);
    const web3 = new Web3(window.ethereum);
    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.enable();
            console.log('Connected to wallet:', await web3.eth.getCoinbase());
            // code to execute after wallet connection is successful
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error('MetaMask is not installed');
        }
    };
    return (
        <div className='expires'>
            <Row className='d-flex justify-content-center'>
                <img src={mayorImg} alt='NYC' className='logo-image'/>
            </Row>
            <Row className='expires-div'>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <img src={skyscraperNFTImg} className='nft-img'/>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className='mt-4 right-div'>
                    <Row>
                        <Col lg={9} md={9} sm={9} xs={9} className='d-flex flex-column'>
                            <div  onClick={connectWallet} className='ms-auto me-auto connect-wallet justify-content-center align-items-center d-flex'>
                                Connect Wallet
                            </div>
                            <div className='d-flex mt-2 ms-auto me-auto'>
                                <div onClick={() => {nftCount>0? setNftCount(nftCount - 1):setNftCount(0)}} className='nft-minus d-flex justify-content-center align-items-center'>-</div>
                                <div className='nft-number d-flex justify-content-center align-items-center'>
                                    Purchase {nftCount} Land Deeds
                                </div>
                                <div onClick={() => {setNftCount(nftCount + 1)}} className='nft-plus d-flex justify-content-center align-items-center'>+</div>
                            </div>
                            <div className='d-flex justify-content-center my-2'>
                                PRICE {(nftCount*0.085).toFixed(3)} ETH
                            </div>
                            <div className='d-flex mt-2 ms-auto me-auto nft-rest justify-content-center align-items-center'>
                                980/2500 LAND DEEDS MINTED
                            </div>
                            <div className='d-flex flex-column align-items-center mt-3'>
                                <div>
                                LEGENDS OF NYC . . . MINT YOUR LAND DEEDS
                                </div>
                                <div>
                                ALIGN TO YOUR CHOSEN FACTION AND LET US RISE TOGETHER. . .
                                </div>
                                <div>
                                WE WILL FIGHT THE MAN UNTIL THE TIME WILL COME 
                                </div>
                                <div>
                                WHERE WE HAVE TO FIGHT FOR OUR FACTIONS . . .
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>    
        </div>
  )
}

export default Mint3;