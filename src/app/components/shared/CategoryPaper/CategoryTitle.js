import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';

export default function CategoryTitle(props) {
    const classes = useStyles();
    return (
        <div className={classes.title}>
            <Typography
                variant="h4"
                style={{ display: 'inline', fontWeight: 500 }}
            >
                Kategoria:
            </Typography>
            <Typography
                variant="h4"
                component={Link}
                to={`/kategorie/${props.category}`}
                className={clsx(
                    classes.categoryTitle,
                    props.isSelectedCategory && classes.selected
                )}
            >
                {props.category}
            </Typography>
            <Divider className={classes.divider} />
        </div>
    );
}
