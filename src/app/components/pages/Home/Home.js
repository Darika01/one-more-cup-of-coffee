import React from 'react';
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';
import useHome from 'app/components/hooks/Home/Home';
import Loader from 'app/components/shared/loaders/Loader';
import { Container } from '@material-ui/core';

export default function Home() {
    const { Articles, ShowLoader } = useHome();

    return (
        <Container fixed>
            {Object.keys(Articles).map(cat => {
                if (Articles[cat] !== null) {
                    return (
                        <CategoryPaper
                            key={cat}
                            category={cat}
                            articles={Articles[cat]}
                            isSelectedCategory={false}
                        />
                    );
                } else return null;
            })}
            {ShowLoader && <Loader />}
        </Container>
    );
}
