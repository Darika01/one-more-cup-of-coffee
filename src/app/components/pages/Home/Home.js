import React from 'react';
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';
import useHome from 'components/hooks/Home/Home';
import Loader from '../../shared/loaders/Loader';

export default function Home() {
    const { Articles, ShowLoader } = useHome();

    return (
        <>
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
        </>
    );
}
