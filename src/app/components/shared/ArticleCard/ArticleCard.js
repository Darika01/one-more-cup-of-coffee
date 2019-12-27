//flow
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { useStyles } from './styles';
import { Link } from '@material-ui/core';

interface Art {
    artColors: array;
    author: string;
    category: string;
    dateModified: string;
    likes: array;
    title: string;
    _id: string;
}

interface Props {
    category: string;
    art: Art;
}

export default function ArticleCard(props: Props) {
    const classes = useStyles(props);

    const art = props.art;

    const [IsCardHover, setIsCardHover] = useState(false);

    return (
        <React.Fragment>
            <Link
                component={RouterLink}
                to={`/kategorie/${art.category}/${art._id}`}
            >
                <Card
                    className={classes.card}
                    onMouseOver={() => setIsCardHover(true)}
                    onMouseOut={() => setIsCardHover(false)}
                >
                    <CardContent>
                        <div className={classes.cardContentBgr}>
                            <div
                                className={clsx(
                                    classes.cardBgr,
                                    IsCardHover && classes.cardHover
                                )}
                            >
                                <div className={classes.cardIconPosition}>
                                    <i
                                        className={clsx(
                                            'fa fa-3x',
                                            art.artColors[2],
                                            classes.cardIcon,
                                            IsCardHover && classes.cardIconHover
                                        )}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="subtitle1">
                                {art.title}
                            </Typography>
                        </div>
                        <div className={classes.cardContentOpacity}></div>
                    </CardContent>
                    <CardActions className={classes.cardAuthor}>
                        <Typography variant="body1" className={classes.author}>
                            {art.author}
                        </Typography>
                    </CardActions>
                </Card>
            </Link>
        </React.Fragment>
    );
}
