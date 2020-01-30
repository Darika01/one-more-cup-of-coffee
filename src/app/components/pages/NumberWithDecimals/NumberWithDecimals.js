import React, { useState } from 'react';
import { Button, Typography, TextField } from '@material-ui/core';

export default function NumberWithDecimals() {
    const [Currency, setCurrency] = useState(0);
    const [SuperValue, setSuperValue] = useState(null);

    const setNewValue = e => {
        //     const match = /(\d{0,2})[^.]*((?:\.\d{0,4})?)/g.exec(
        //         e.target.value.replace(/[^\d.]/g, '')
        //     );
        //     const newValue = match[1] + match[2];
        //     setCurrency(newValue);
        // setCurrency(e.target.value.replace(/(\.[\d]{4})./g, '$1'));
        setCurrency(e.target.value.replace(/(^\d+\.?\d{0,5}).*/, '$1'));
        // var regex4 = /^\d+\.?\d{0,4}$/;
        // var match4 = e.target.value.match(regex4);
        // console.log(match4);
        // setCurrency(e.target.value.match(regex4));
    };
    const sendData = () => {
        setSuperValue(parseFloat(Currency));
        console.log(parseFloat(Currency).toFixed(5));
        // const lol = setSuperValue(Currency.replace(/(\.[\d]{4})./g, '$1'));
    };

    return (
        <div>
            <TextField
                type="number"
                value={Currency}
                step=".0001"
                min="0"
                max="10"
                onChange={e => setNewValue(e)}
            />
            <button onClick={sendData}>Click</button>
            <p>{SuperValue !== null ? SuperValue : 'atata'}</p>
        </div>
    );
}
