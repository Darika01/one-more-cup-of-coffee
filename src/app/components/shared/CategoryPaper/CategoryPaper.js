import React from 'react'

import { Paper, Typography, Divider, Grid } from '@material-ui/core';

import ArticleCard from '../ArticleCard/ArticleCard'

import { SeeMoreButton } from '../buttons/Buttons';
import { useStyles } from './styles';

export default function CategoryPaper(props) {
    const classes = useStyles();

    const category = props.category;

    const articles = props.articles;
    
    const seeMore = () => {
        console.log('see more')
    }

    const spacing = window.innerWidth < 576 ? 1 : 3;

    function artCardData(art) {
        const artCardData = {
            artColors: art.artColors,
            author: art.author,
            category: art.category,
            dateModified: art.dateModified,
            likes: art.likes,
            title: art.title,
            _id: art._id
        }
        return artCardData
    }
    

    return (
        <Paper className={classes.paper}>
            <div className={classes.title}>
                <Typography variant="h4" style={{display:'inline', fontWeight: 500}}>
                    Kategoria: 
                </Typography>
                <Typography variant="h4" component="span" className={classes.categoryTitle}>
                    {category}
                </Typography>
                <Divider className={classes.divider} />
            </div>
            <Grid container spacing={spacing} alignItems="center">
                {articles.map((art) => {
                    return (
                        <Grid item xs={6} md={4} lg={3} key={art._id}>
                            <ArticleCard category={category} art={artCardData(art)} />
                        </Grid>
                    )
                })}
            </Grid>
            <div className={classes.seeMoreBtn}>
                <SeeMoreButton
                    variant="contained"
                    onClick={seeMore}
                >
                    Zobacz więcej    
                </SeeMoreButton>
            </div>
        </Paper>
    )
}