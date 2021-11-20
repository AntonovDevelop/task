import React from 'react';
import { useState } from 'react'; // Подключаем ссылку на useState.
import './App.css';

interface ButtonProps {
    text: string;
    onClick: () => any; // TODO: Что это за пропс?
}

var Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} id="MyButton">{props.text}</button>
    );
};
export default Button;
