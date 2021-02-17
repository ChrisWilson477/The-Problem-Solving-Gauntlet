import React from 'react';


const TextBox = ({text, func}) => (

        <div className="textBoxOutterDiv" onClick={() => {func(text)}}>
            <h1 className="textBoxHeader">This should return the string at the corresponding index</h1>
            <h1 className="textBoxText">{text}</h1>
        </div>
    )


export default TextBox;