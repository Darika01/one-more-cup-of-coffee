//flow
import { useState, useEffect } from 'react';
import API from 'api';
function useSingleCategory(category: string) {
    const [Articles, setArticles] = useState({ arts: [] });

    const [ShowLoader, setShowLoader] = useState(false);

    const getArticles = cat => {
        setShowLoader(true);
        API.get(`articles/category/?category=${cat}`).then(
            res => {
                setArticles(articles => {
                    return { arts: articles.arts.concat(res.data) };
                });
                setShowLoader(false);
            },
            err => {
                setShowLoader(false);
                console.log(err);
            }
        );
    };

    useEffect(() => {
        setArticles({ arts: [] });
        if (category !== 'wszystkie') {
            getArticles(category);
        } else {
            const categories = ['nauka', 'sztuka', 'filozofia', 'psychologia'];
            categories.forEach(cat => {
                getArticles(cat);
            });
        }
    }, [category]);

    return { Articles, ShowLoader };
}

export default useSingleCategory;
