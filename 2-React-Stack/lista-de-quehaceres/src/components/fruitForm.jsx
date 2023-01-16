import React, { useState } from 'react';

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

export default function FruitForm() {
    const [isTasty, setIsTasty] = useState(false);
    const [myVal, setMyVal] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + myVal + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={myVal} onChange={e => setMyVal(e.target.value)}>
            <option value="">Please select a value</option>
                {fruits.map((fruit, idx) =>
                    <option key={idx} value={fruit}>{fruit}</option>
                )}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)} /> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}   