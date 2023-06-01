import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/scss/Mint2.scss';
import mayorImg from '../style/images/skyscraper_logo.webp';
import { Row } from 'react-bootstrap';
const Mint2a = () => {
    const navigate = useNavigate();
    const [typedLetters, setTypedLetters] = useState('');

    useEffect(() => {
        function handleKeyDown(event) {
        
        if (event.keyCode === 13) {
            if(typedLetters==='skyscraper'){
                navigate('/mint3');
            }
            console.log('Typed letters so far:', typedLetters);
            // Do something with the typed letters
            setTypedLetters('');
        } else {
            if ((event.keyCode >= 65 && event.keyCode <= 90) 
            && !event.shiftKey && event.key !== 'CapsLock'
            && event.key !== 'Tab' && !event.ctrlKey && !event.altKey) {
                setTypedLetters(prev => prev + event.key);
            }
            if(event.keyCode === 8){
                setTypedLetters(typedLetters.slice(0, -1));
            }
        }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
        document.removeEventListener('keydown', handleKeyDown);
        };
    }, [typedLetters]);

    return (
        <div className='mayor'>
            <Row className='d-flex justify-content-center'>
                <img src={mayorImg} alt='NYC' className='logo-image'/>
            </Row>
            <Row className='d-flex justify-content-center'>
                <div className='mint-time-div'>
                    <div className='mb-3 d-flex justify-content-center align-items-center mint-time'>
                        PROJECT SKYSCRAPER
                    </div>
                    <div className='text-row'>
                        (C) Copyright Guardian Anon Corp 1982 <br/>
                        Implemented by Barkman Anon <br/>
                        type skyscraper & press ENTER{typedLetters}
                    </div>
                    <div className="blink text-row">_</div>
                </div>
            </Row>    
        </div>
  )
}

export default Mint2a;