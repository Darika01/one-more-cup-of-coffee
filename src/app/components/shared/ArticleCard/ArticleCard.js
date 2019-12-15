import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Icon from '@material-ui/core/Icon';

import { useStyles } from './styles';
import { Link } from '@material-ui/core';

export default function ArticleCard(props) {
    const classes = useStyles(props);

    const art = props.art;

    const [IsCardHover, setIsCardHover] = useState(false);

    return (
        <React.Fragment>
            <Link component={RouterLink} to={'/'}>
                <Card
                    className={classes.card}
                    onMouseOver={() => setIsCardHover(true)}
                    onMouseOut={() => setIsCardHover(false)}
                >
                    {/* <CardActionArea> */}
                    <CardContent>
                        <div className={classes.cardBgr}>
                            <div className={classes.cardIconPosition}>
                                <Icon
                                    className={clsx(
                                        classes.cardIcon,
                                        IsCardHover && classes.cardHover
                                    )}
                                >
                                    {art.artColors[2]}
                                </Icon>
                            </div>
                        </div>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="subtitle1">
                                {art.title} vmdfvdlm vdlf ldcn kf kc dkdkcdn
                                dkfc fhvbvjnddfj fknkvfnvd fnd v gf
                                gbbvgfbgfbgfbgb kdvfvndfvndkf fvhd njkdvndkfjv
                                dkvjdfkjfvnk
                            </Typography>
                        </div>
                        <div className={classes.cardContentOpacity}></div>
                    </CardContent>
                    <CardActions className={classes.cardAuthor}>
                        <Typography variant="body1" className={classes.author}>
                            {art.author}
                        </Typography>
                    </CardActions>
                    {/* </CardActionArea> */}
                </Card>
            </Link>
        </React.Fragment>
    );
}
