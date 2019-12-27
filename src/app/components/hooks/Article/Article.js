//flow
import { useState, useEffect } from 'react';
import API from 'api';
function useArticle(id: string, history) {
    const [ArticleData, setArticleData] = useState(null);

    const [ShowLoader, setShowLoader] = useState(false);

    const getArticleData = cat => {
        setShowLoader(true);
        API.get(`articles/article?_id=${id}`).then(
            res => {
                console.log(res);
                setArticleData(res.data.article);
                setShowLoader(false);
            },
            err => {
                setShowLoader(false);
                if (err.response.status === 404) {
                    history.push('/404?mess=Artykuł nie został znaleziony');
                }
                console.log(err.response.status);
            }
        );
    };

    useEffect(() => {
        getArticleData();
        // eslint-disable-next-line
    }, []);

    return { ArticleData, ShowLoader };
}

export default useArticle;
