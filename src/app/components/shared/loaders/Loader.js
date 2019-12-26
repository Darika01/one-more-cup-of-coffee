import React from 'react';
// import { useStyles } from './styles';
import './styles.css';

export default function Loader() {
    // const classes = useStyles();
    return (
        <div className="loader">
            <div className="lds-roller">
                {/* // <div className={classes.ldsRoller}> */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
