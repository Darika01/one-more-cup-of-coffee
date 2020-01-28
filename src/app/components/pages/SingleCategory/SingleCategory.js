//@flow
import React from 'react';
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';
import Loader from '../../shared/loaders/Loader';
import useSingleCategory from 'app/actions/SingleCategory/SingleCategory';
import { Container } from '@material-ui/core';

type Props = {
    match: {
        params: {
            category: string
        }
    }
};

export default function SingleCategory(props: Props) {
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
