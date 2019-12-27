import React from 'react';
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import ArticleCard from '../ArticleCard/ArticleCard';

import { SeeMoreButton } from '../buttons/Buttons';
import { useStyles } from './styles';
import CategoryTitle from './CategoryTitle';

export default function CategoryPaper(props) {
    const classes = useStyles();

    const category = props.category;
    const isSelectedCategory = props.isSelectedCategory;

    const articles = props.articles;

    return (
        <Paper className={classes.paper}>
            <CategoryTitle
                category={category}
                isSelectedCategory={isSelectedCategory}
            />
            <div className={classes.container}>
                {articles.map(art => {
                    return (
                        <div key={art._id}>
                            <ArticleCard category={category} art={art} />
                        </div>
                    );
                })}
            </div>
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
