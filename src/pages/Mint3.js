import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/scss/Mint3.scss';
import mayorImg from '../style/images/skyscraper_logo_empiresrise.png';
import skyscraperNFTImg from '../style/images/skyscraper_NFT.png';
import { Row, Col, Button } from 'react-bootstrap';
import Web3 from 'web3';

const Mint3 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [nftCount, setNftCount] = useState(1);
    const [showAccount, setShowAccount] = useState('');
    const [isConencted, setIsConnected] = useState(false);
    const web3 = new Web3(window.ethereum);

    useEffect(() => {
        setIsConnected(isConencted);    
    },[isConencted]);

    const connectWallet = async () => {
        if (window.ethereum) {

          try {
            await window.ethereum.enable();
            
            let walletaddress = await web3.eth.getCoinbase();
            setIsConnected(true);
            if (isConencted == true) {
                return;
            }
            for (let i = 0 ; i < 5 ; i ++) {
                setShowAccount(prev => prev + walletaddress[i]);
            }
            
            setShowAccount(prev => prev + '...');
            for (let j = 38; j < 42 ; j ++) {
                setShowAccount(prev => prev + walletaddress[j]);
            }

          } catch (error) {
            console.error(error);
          }
        } else {
          console.error('MetaMask is not installed');
        }
    };
    
    return (
        <>
            {windowWidth>768?(
                <div className='expires'>
                    <Row className='d-flex justify-content-center'>
                        <img src={mayorImg} alt='NYC' className='logo-image'/>
                    </Row>
                    <Row className='expires-div'>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <img src={skyscraperNFTImg} className='nft-img'/>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='mt-4 right-div'>
                            <Row>
                                <Col lg={9} md={10} sm={12} xs={12} className=' d-flex flex-column'>
                                    <Button  onClick={connectWallet} className='ms-auto me-auto connect-wallet justify-content-center align-items-center d-flex'>
                                        {!isConencted ? 'connect wallet' : showAccount}
                                    </Button>
                                    <div className='d-flex mt-2 ms-auto me-auto'>
                                        <Button onClick={() => {nftCount>0? setNftCount(nftCount - 1):setNftCount(0)}} className='nft-minus d-flex justify-content-center align-items-center'>-</Button>
                                        <div className='nft-number d-flex justify-content-center align-items-center'>
                                            Purchase {nftCount} Land Deeds
                                        </div>
                                        <Button onClick={() => {setNftCount(nftCount + 1)}} className='nft-plus d-flex justify-content-center align-items-center'>+</Button>
                                    </div>
                                    <div className='d-flex justify-content-center my-2'>
                                        PRICE {(nftCount*0.085).toFixed(3)} ETH
                                    </div>
                                    <div className='d-flex mt-2 ms-auto me-auto nft-rest justify-content-center align-items-center'>
                                        980/2500 LAND DEEDS MINTED
                                    </div>
                                    <div className='d-flex flex-column align-items-center mt-3'>
                                        <div className='text-center'>
                                        The Citizens’ Coalition for a Fair City is calling on all paw folk to band together and rise up!
                                        </div>
                                        <div className='text-center'>
                                        The land deed sale is a chance for us to take back our city from Mayor Silverpaw and his cronies.
                                        </div>
                                        <div className='text-center'>
                                        Let’s show them that we won’t be pushed around any longer!
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>    
                </div>
                ):
            (
                <div className='expires'>
                    <Row className='d-flex justify-content-center'>
                        <img src={mayorImg} alt='NYC' className='logo-image'/>
                    </Row>
                    <Row className='expires-div'>
                        <Col sm={12}>
                            <div className='d-flex flex-column align-items-center mt-5'>
                                <div className='text-center'>
                                The Citizens’ Coalition for a Fair City is calling on all paw folk to band together and rise up!
                                </div>
                                <div className='text-center'>
                                The land deed sale is a chance for us to take back our city from Mayor Silverpaw and his cronies.
                                </div>
                                <div className='text-center'>
                                Let’s show them that we won’t be pushed around any longer!
                                </div>
                            </div>
                        </Col>
                        
                        <Col sm={12} className='mt-4 right-div d-flex flex-column'>
                            <Button  onClick={connectWallet} className='ms-auto me-auto connect-wallet-mob justify-content-center align-items-center d-flex'>
                                {!isConencted ? 'connect wallet' : showAccount}
                            </Button>
                            <div className='d-flex mt-2 ms-auto me-auto'>
                                <Button onClick={() => {nftCount>0? setNftCount(nftCount - 1):setNftCount(0)}} className='nft-minus-mob d-flex justify-content-center align-items-center'>-</Button>
                                <div className='nft-number-mob d-flex justify-content-center align-items-center'>
                                    Purchase {nftCount} Land Deeds
                                </div>
                                <Button onClick={() => {setNftCount(nftCount + 1)}} className='nft-plus-mob d-flex justify-content-center align-items-center'>+</Button>
                            </div>
                            <div className='d-flex justify-content-center my-2'>
                                PRICE {(nftCount*0.085).toFixed(3)} ETH
                            </div>
                            <div className='d-flex mt-2 ms-auto me-auto nft-rest-mob justify-content-center align-items-center'>
                                980/2500 LAND DEEDS MINTED
                            </div>
                        </Col>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <img src={skyscraperNFTImg} className='nft-img-mob'/>
                        </Col>
                    </Row>    
                </div>
            )}
            </>
  )
}

export default Mint3;