import React from 'react';
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';
import Loader from '../../shared/loaders/Loader';
import useSingleCategory from 'components/hooks/SingleCategory/SingleCategory';
import { Container } from '@material-ui/core';

export default function SingleCategory(props) {
    const category = props.match.params.category;
    const { Articles, ShowLoader } = useSingleCategory(category);

    return (
        <Container fixed>
            {!ShowLoader && Articles.arts.length > 0 && (
                <CategoryPaper
                    category={category}
                    articles={Articles.arts}
                    isSelectedCategory={true}
                />
            )}
            {ShowLoader && <Loader />}
        </Container>
    );
}
