//@flow
import { useState, useEffect } from 'react';
import API from 'app/api';
function useArticle(id: string, history: Object) {
    const [ArticleData, setArticleData] = useState(null);

    const [ShowLoader, setShowLoader] = useState(false);

    const getArticleData = () => {
        setShowLoader(true);
        API.get(`articles/article?_id=${id}`).then(
            res => {
                setArticleData(res.data.article);
                setShowLoader(false);
            },
            err => {
                setShowLoader(false);
                if (err.response.status === 404) {
                    history.push('/404?mess=Artykuł nie został znaleziony');
                }
                console.log(err);
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
