import React from 'react';
import queryString from 'query-string';
import error from 'assets/img/error.png';
import { useStyles } from './styles';
import { Typography, Container } from '@material-ui/core';

type Props = {
    location: {
        search: string
    },
    queryValues: {
        mess?: string
    }
};

export default function NotFound(props: Props) {
    const queryValues =
        props.location.search !== ''
            ? queryString.parse(props.location.search)
            : '';
    const mess = props.location.search !== '' ? queryValues.mess : undefined;

    const classes = useStyles();
    return (
        <Container fixed>
            {mess !== undefined && (
                <div className={classes.mess}>
                    <Typography variant="subtitle1">{mess}</Typography>
                </div>
            )}
            <div className={classes.container}>
                <img src={error} alt="404 Not found" className={classes.img} />;
            </div>
        </Container>
    );
}
