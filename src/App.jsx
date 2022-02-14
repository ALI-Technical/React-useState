import react, { useState } from 'react';
import './App.css';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import bulbOff from './Images/bulb-off.jpg'
import bulbOn from './Images/bulb-on.jpg'
import Button from './Button';

function App() {
    const [heading, SetHeading] = useState("black")
    const [img, SetImg] = useState(bulbOff);
    const [btnName, SetBtnName] = useState("Turn On");
    const [color, setColor] = useState("white")
    const [modeIcon, setModeIcon] = useState(<MdDarkMode size={70} className='darkMdIcon' />);
    /* Bulb On Off Toggker */
    const toggler = () => {
        btnName === "Turn On" ? SetBtnName("Turn Off") : SetBtnName("Turn On");
        (img === bulbOff) ?
            SetImg(bulbOn) : SetImg(bulbOff)
    }
    /* Dark Mode */
    const darkMode = () => {
        (heading === "black") ?
            SetHeading("white") : SetHeading("black");

        (color === "white") ?
            setColor("black") : setColor("white");

        (modeIcon == <MdDarkMode size={70} className='darkMdIcon' />) ?
            setModeIcon(<MdLightMode size={70} className='darkMdIcon' />) : setModeIcon(<MdDarkMode size={70} className='darkMdIcon' />);
    }
    return (
        <div style={{ backgroundColor: color, height: 617 }}>
            <div className="darkMode-div">
                <h1 className={heading}>Magic Bulb.com</h1>
                <button onClick={darkMode}>{modeIcon}</button>
            </div>
            <div className="bulb-div">
                <img src={img} alt="" />
                <Button btnName={btnName} toggler={toggler} />
            </div>
        </div>
    );
}

export default App;