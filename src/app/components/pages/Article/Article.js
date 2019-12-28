//@flow
import React from 'react';
import Loader from '../../shared/loaders/Loader';
import clsx from 'clsx';
import moment from 'moment';
import useArticle from 'app/components/hooks/Article/Article';
import { useStyles } from './styles.js';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CategoryTitle from '../../shared/CategoryPaper/CategoryTitle';

type Props = {
    history: Object,
    match: {
        params: {
            id: string
        }
    }
};

export default function Article(props: Props) {
    const { ArticleData, ShowLoader } = useArticle(
        props.match.params.id,
        props.history
    );

    const artColorProps = {
        bgrColor: ArticleData !== null && ArticleData.artColors[1],
        color: ArticleData !== null && ArticleData.artColors[0]
    };

    const classes = useStyles(artColorProps);

    const setDate = (date: string) => {
        date = moment().format('DD.MM.YYYY');
        return date;
    };

    return (
        <>
            {ArticleData !== null && (
                <div>
                    <div className={classes.headerContainer}>
                        <div className={classes.titleContainer}>
                            <div
                                className={clsx(
                                    classes.title,
                                    classes.titleText
                                )}
                            >
                                <Typography variant="h2" component="h1">
                                    {ArticleData.title}
                                </Typography>
                            </div>
                            <div
                                className={clsx(
                                    classes.title,
                                    classes.titleAuthor
                                )}
                            >
                                <i
                                    className={clsx(
                                        'fa fa-4x',
                                        ArticleData.artColors[2],
                                        classes.titleAuthorIcon
                                    )}
                                ></i>
                                <Typography variant="subtitle1">
                                    {ArticleData.author}
                                </Typography>
                            </div>
                            <div
                                className={clsx(
                                    classes.title,
                                    classes.titleInfo
                                )}
                            >
                                <div>
                                    <i
                                        className={clsx(
                                            'fa fa-thumbs-up',
                                            classes.titleInfoIcon
                                        )}
                                    ></i>
                                    <Typography variant="subtitle1">
                                        {ArticleData.likes.length}
                                    </Typography>
                                </div>
                                <div>
                                    <i
                                        className={clsx(
                                            'fa fa-calendar',
                                            classes.titleInfoIcon
                                        )}
                                    ></i>
                                    <Typography variant="subtitle1">
                                        {setDate(ArticleData.dateModified)}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Container fixed>
                        <CategoryTitle
                            category={ArticleData.category}
                            isSelectedCategory={false}
                        />
                        <Typography variant="body1">
                            {ArticleData.description}
                        </Typography>
                    </Container>
                </div>
            )}
            {ShowLoader && <Loader />}
        </>
    );
}
