import React from 'react';
import { useStyles } from './styles';
import { Typography, Link } from '@material-ui/core';

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div>
                <Typography
                    variant="subtitle2"
                    className={classes.footerInfoText}
                >
                    &copy; 2018 Copyright:{' '}
                    <Link
                        href="https://github.com/Darika01/one-more-cup-of-coffee"
                        rel="nofollow"
                        target="_blank"
                    >
                        Daria Kukareka
                    </Link>
                </Typography>
            </div>
        </footer>
    );
}
