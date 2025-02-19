import React, { useState } from 'react';
import './Bai4.css';

const Bai4 = () => {
    const [buttonText, setButtonText] = useState("");

    const handleClick = (text) => {
        setButtonText(text);
    };

    return (
        <div className="bai4">
            <h1>Bài 4</h1>
            <button onClick={() => handleClick("Button 1")}>Button 1</button>
            <button onClick={() => handleClick("Button 2")}>Button 2</button>
            <button onClick={() => handleClick("Button 3")}>Button 3</button>
            <button onClick={() => handleClick("Button 4")}>Button 4</button>
            <div className="text-display">
                {buttonText}
            </div>
        </div>
    );
};

export default Bai4;
