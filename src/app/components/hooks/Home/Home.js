//flow
import { useState, useEffect } from 'react';
import API from 'api';
function useHome() {
    const [Articles, setArticles] = useState({
        nauka: null,
        sztuka: null,
        filozofia: null,
        psychologia: null
    });
    const [ShowLoader, setShowLoader] = useState(false);

    const getArticles = cat => {
        setShowLoader(true);
        API.get(`articles/category/?category=${cat}`).then(
            res => {
                setArticles(articles => ({
                    ...articles,
                    [cat]: res.data.reverse().splice(0, 4)
                }));
                setShowLoader(false);
            },
            err => {
                setShowLoader(false);
                console.log(err);
            }
        );
    };

    useEffect(() => {
        Object.keys(Articles).forEach(cat => {
            getArticles(cat);
        });
        // eslint-disable-next-line
    }, []);

    return { Articles, ShowLoader };
}

export default useHome;
