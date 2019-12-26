import React from 'react';
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { Paper, Typography, Divider } from '@material-ui/core';

import ArticleCard from '../ArticleCard/ArticleCard';

import { SeeMoreButton } from '../buttons/Buttons';
import clsx from 'clsx';
import { useStyles } from './styles';

export default function CategoryPaper(props) {
    const classes = useStyles();

    const category = props.category;
    const isSelectedCategory = props.isSelectedCategory;

    const articles = props.articles;

    function artCardData(art) {
        const artCardData = {
            artColors: art.artColors,
            author: art.author,
            category: art.category,
            dateModified: art.dateModified,
            likes: art.likes,
            title: art.title,
            _id: art._id
        };
        return artCardData;
    }

    return (
        <Paper className={classes.paper}>
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
                    to={`/kategorie/${category}`}
                    className={clsx(
                        classes.categoryTitle,
                        isSelectedCategory && classes.selected
                    )}
                >
                    {category}
                </Typography>
                <Divider className={classes.divider} />
            </div>
            <div className={classes.container}>
                {articles.map(art => {
                    return (
                        <div key={art._id}>
                            <ArticleCard
                                category={category}
                                art={artCardData(art)}
                            />
                        </div>
                    );
                })}
            </div>
            {/* <Grid container spacing={spacing} alignItems="center">
                {articles.map(art => {
                    return (
                        <Grid item xs={6} md={4} lg={3} key={art._id}>
                            <ArticleCard
                                category={category}
                                art={artCardData(art)}
                            />
                        </Grid>
                    );
                })}
            </Grid> */}
            {!isSelectedCategory && (
                <div className={classes.seeMoreBtn}>
                    <SeeMoreButton
                        variant="contained"
                        component={Link}
                        to={`/kategorie/${category}`}
                    >
                        Zobacz więcej
                    </SeeMoreButton>
                </div>
            )}
        </Paper>
    );
}
