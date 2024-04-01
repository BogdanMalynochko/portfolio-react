import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = ({ title }) => {
    return (
        <ReactTypingEffect
            text={title}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
                return <h1>{text}</h1>;
            }}
            speed={60}
        />
    );
};

export default TypingEffect;
