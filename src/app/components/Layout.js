import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar/Navbar';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        '& .MuiTypography-h4': {
            [theme.breakpoints.only('xs')]: {
                fontSize: '1.8rem'
            }
        },
        '& .MuiContainer-root': {
            paddingLeft: '15px',
            paddingRight: '15px',
            [theme.breakpoints.only('xs')]: {
                padding: 0
            },
            [theme.breakpoints.only('sm')]: {
                maxWidth: '720px'
            },
            [theme.breakpoints.up('lg')]: {
                maxWidth: '1140px'
            },
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    
}))

export default function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <main className={classes.layout}>
                    {/* <div className={classes.appBarSpacer} /> */}
                <Container fixed>
                    {props.children}
                </Container>
            </main>

        </div>
    )
}