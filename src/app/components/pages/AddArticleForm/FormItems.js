//@flow
import React from 'react';
import clsx from 'clsx';
import { Button, Typography, TextField } from '@material-ui/core';
import MainSelect from '../../shared/selects/MainSelect';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { useStyles } from './styles';

type Props = {
    articleItems: Object
    // isAddArticleMode: boolean
};
export default function FormItems(props: Props) {
    const classes = useStyles(useStyles);

    console.log(props.articleItems);

    const findItem = (name, val) => {
        const el = props.articleItems.find(el => el.name === name);
        console.log(el[val]);
        return el[val];
    };

    return (
        <div>
            <div className={classes.mainFormContainer}>
                <div className={classes.formItem}>
                    <Typography variant="subtitle1">
                        {findItem('title', 'title')}
                    </Typography>
                    <TextField
                        variant="outlined"
                        id={findItem('title', 'title')}
                        name={findItem('title', 'title')}
                        value={findItem('title', 'value')}
                    />
                </div>
                <div className={classes.formItem}>
                    <Typography variant="subtitle1">
                        {findItem('category', 'title')}
                    </Typography>
                    <MainSelect
                        id={findItem('category', 'title')}
                        name={findItem('category', 'title')}
                        options={
                            props.articleItems.find(
                                el => el.name === 'category'
                            ).options
                        }
                        value={findItem('category', 'value')}
                    />
                </div>
                <div className={classes.formItem}>
                    <Typography variant="subtitle1">
                        {findItem('description', 'title')}
                    </Typography>
                    <TextField
                        variant="outlined"
                        multiline
                        rows="14"
                        rowsMax="24"
                        id={findItem('description', 'title')}
                        name={findItem('description', 'title')}
                        value={findItem('description', 'value')}
                    />
                </div>
            </div>
        </div>
    );
}
