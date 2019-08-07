import React from 'react'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './styles';

const useStyles = makeStyles(theme => ({
    card: {
        // maxWidth: 345,
        '& .MuiCardContent-root': {
            padding: 0
        }
    },
    cardBgr: {
        height: 169,
        [theme.breakpoints.only('xs')]: {
            height: 140,
        },
        backgroundColor: props => props.artProps.artBgr,
        textAlign: 'center'
    },
    cardIcon: {
        marginTop: '20%',
        [theme.breakpoints.only('xs')]: {
            marginTop: '30%',
        },
        color: props => props.artProps.artIconColor
    },
    cardContent: {
        padding: '16px'
    },
    cardAuthor: {
        backgroundColor: '#f7f7f7',
        borderTop: '1px solid #00000020',
        textAlign: 'right'
    },
    author: {
        width: '100%',
        paddingRight: '1rem'
    }
}));

export default function ArticleCard(props) {
    const classes = useStyles(props);

    const artProps = props.artProps;


    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.cardBgr}>
                            <Icon className={classes.cardIcon}>{artProps.artIcon}</Icon>
                        </div>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardAuthor}>
                    <Typography variant="body1" className={classes.author}>
                        {artProps.author}
                    </Typography>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}