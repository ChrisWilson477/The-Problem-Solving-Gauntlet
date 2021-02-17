import React from 'react';
import TextBox from './TextBox.jsx';

const TextComponent = ({someText, alertWindow}) => {
  return (
    <div>
      <h2>
        {someText.map((currentItem, i) =>
            <TextBox
                func={alertWindow}
                text={currentItem}
                key={i}
            />
        )}
      </h2>
    </div>
  )};

export default TextComponent;