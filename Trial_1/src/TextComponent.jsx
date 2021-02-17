import React from 'react';
import TextBox from './TextBox.jsx';

const TextComponent = ({someText, alertWindow}) => {



    return (

        <div>
            <h3>
        {someText.map((currentItem, i) => {
              {console.log(currentItem)}
                <TextBox
                    text={currentItem}
                    func={alertWindow}
                />
        })}
            </h3>
        </div>
    )
};

export default TextComponent;