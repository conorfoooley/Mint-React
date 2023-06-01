import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/scss/Mint1.scss';

const Mint1 = () => {
    const navigate = useNavigate();
    const [disableKeyEvent, setDisableKeyEvent] = useState(true);
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const text = 'PCX82 V1.2\nCopyright IBM 1982\nLoading /machines/pcx82/ibm/5150/rom/basic/BASIC100.json5.......\nLoading /machines/pcx82/ibm/5150/rom/bios/1981-04-24/PCBIOS-REVI.json5.......\nLoading /machines/pcx82/ibm/video/mda/IBM-MDA.json5.......\nLoading /machines/pcx82/diskettes.json\nBusX86: 32kb ROM at 0xF600\nLoading /disks/pcx82/work/IBM/NYC-MAYORS OFFICE LAND DEED SALE/Modified-Project-Skyscraper.json....\nBusX86: 8kb ROM at 0xFE00\nMounted "NYC-MAYORS OFFICE LAND DEED SALE (MODIFIED)" (Format Unknown*) in drive A\nBusX86: 64kb RAM at 0x0\nBusX86: 4kb VIDEO at 0x00000\nInitialization complete\nPress any key to continue';
    useEffect(() => {
        if (index < text.length) {
          setDisableKeyEvent(true);
          setTimeout(() => {
            setDisplayText(text.slice(0, index + 1));
            setIndex(index + 1);
          }, 20);
        }
        else{
          setDisableKeyEvent(false);
        }
      }, [index, text]);
   
    function handleKeyDown(event) {
      console.log("this is dandle",disableKeyEvent);
      if (!disableKeyEvent) {
        navigate('/mint2');
      }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [disableKeyEvent]);
    
    
  return (
    <>
        <div className="mint1-screen">
            <div className="text-row" style={{wordWrap:'break-word'}} dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, "<br>") }} />
            <div className="text-row blink">_</div>
        </div>
    </>
  )
}

export default Mint1;