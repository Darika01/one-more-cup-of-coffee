//@flow
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Link, Container, Paper } from '@material-ui/core';

import useAAddArticleForm from '../../../actions/AddArticleForm/AddArticleForm';
import FormItems from './FormItems';
import cup from 'assets/img/cup.png';

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

type Props = {
    history: Object,
    match: {
        params: {
            id: string
        }
    }
};

export default function AddArticleForm(props: Props) {
    const classes = useStyles(useStyles);
    const { ArticleItems } = useAAddArticleForm(
        props.match.params.id,
        props.history
    );

    const formTitle =
        props.match.params.id === undefined
            ? 'stwórz własny niepowtarzalny artykuł'
            : 'edytuj artykuł';

    return (
        <div>
            <div className={classes.headerContainer}>
                <div>
                    <Typography
                        variant="h2"
                        component="h1"
                        className={classes.titleText}
                    >
                        {formTitle.toUpperCase()}
                    </Typography>
                </div>
                <div className={classes.title}>
                    <img
                        src={cup}
                        alt="Cup Of Coffee"
                        className={classes.titleImg}
                    />
                    ;
                </div>
            </div>
            <Container fixed>
                <Paper elevation={3} className={classes.paper}>
                    <FormItems
                        articleItems={ArticleItems}
                        isAddArticleMode={
                            props.match.params.id === undefined ? true : false
                        }
                    />
                    <div className={classes.formBtns}>
                        <Button
                            variant="contained"
                            className={clsx('mainBtn', classes.addBtn)}
                            // endicon={<SaveIcon />}
                        >
                            {props.match.params.id === undefined
                                ? 'Dodaj artykuł'
                                : 'Zapisz artykuł'}
                            {props.match.params.id === undefined ? (
                                <AddIcon className={'btnIcon'} />
                            ) : (
                                <SaveIcon className={'btnIcon'} />
                            )}
                        </Button>
                        <Button
                            variant="contained"
                            className={clsx('mainBtn', classes.cancelBtn)}
                            // endicon={<CloseIcon />}
                        >
                            Anuluj <CloseIcon className={'btnIcon'} />
                        </Button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}
