import React from 'react';
import { useState } from 'react'; // Подключаем ссылку на useState.
import MyButton from './MyButton';

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    count = props.start;
    var [count, setCount] = useState(0); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
        <MyButton
            text={"Прибавить " + props.step}
            onClick={handleIncrease}
        />
        </div>
    );
    /*
    <div>
        <div>Значение счётчика: {count}.</div>
        <button onClick={handleIncrease}>Прибавить 1</button>
    </div>
    */
};
export default Counter;