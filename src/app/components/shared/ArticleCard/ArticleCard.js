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
        },
        // height: '342px',
        // '& .MuiCardContent-root': {
        //     '&:hover': {
        //         content: '',
        //         position: 'absolute',
        //         right: 0,
        //         bottom: 0,
        //         width: '100%',
        //         height: '25px',
        //         backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',}
        // }
    },
    cardBgr: {
        height: 169,
        [theme.breakpoints.only('xs')]: {
            height: 140,
        },
        backgroundColor: props => props.art.artColors[1],
        textAlign: 'center'
    },
    cardIcon: {
        marginTop: '20%',
        [theme.breakpoints.only('xs')]: {
            marginTop: '30%',
        },
        color: props => props.art.artColors[0]
    },
    cardContent: {
        padding: '1.25rem',
        height: '5.5rem',
        paddingBottom: '0.2rem',
        // height: '100%',
        '& h6': {
            height: '100%',
        },
    },
    cardContentOpacity: {
        content: '',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        height: '2.2rem',
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',

    },
    cardAuthor: {
        backgroundColor: '#f7f7f7',
        borderTop: '1px solid #00000020',
        textAlign: 'right',
        position : 'relative',
        padding: '0.8rem 0.5rem'
    },
    author: {
        width: '100%',
        paddingRight: '1rem'
    }
}));

export default function ArticleCard(props) {
    const classes = useStyles(props);

    const art = props.art;


    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.cardBgr}>
                            <Icon className={classes.cardIcon}>{art.artColors[2]}</Icon>
                        </div>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="subtitle1">
                                {art.title} vmdfvdlm vdlf ldcn  kf kc dkdkcdn dkfc fhvbvjnddfj fknkvfnvd fnd v gf gbbvgfbgfbgfbgb kdvfvndfvndkf fvhd njkdvndkfjv dkvjdfkjfvnk
                            </Typography>
                        </div>
                        <div className={classes.cardContentOpacity}></div>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardAuthor}>
                    <Typography variant="body1" className={classes.author}>
                        {art.author}
                    </Typography>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}