//@flow
import { useState, useEffect } from 'react';
import API from 'app/api';

import { addArticleFormItems } from './addArticleFormItems';

function useAAddArticleForm(id?: string, history: Object) {
    const [ArticleItems, setArticleItems] = useState(addArticleFormItems());

    // const getArticleData = () => {
    //     setShowLoader(true);
    //     API.get(`articles/article?_id=${id}`).then(
    //         res => {
    //             setArticleData(res.data.article);
    //             setShowLoader(false);
    //         },
    //         err => {
    //             setShowLoader(false);
    //             if (err.response.status === 404) {
    //                 history.push('/404?mess=Artykuł nie został znaleziony');
    //             }
    //             console.log(err);
    //         }
    //     );
    // };

    return { ArticleItems };
}

export default useAAddArticleForm;
