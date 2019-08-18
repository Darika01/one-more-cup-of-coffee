import React from 'react'
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';

export default function SingleCategory(props) {
    const category = props.match.params.category;

    const articles = [
        {
            artColors: ["#fcfcfc", "#363547", "accessibility"],
            author: "Admin",
            category: "nauka",
            dateModified: "Sat Mar 23 2019",
            description: "Stole biło choru swéj pędu Białopiotrowiczem. Surowy biały powiem",
            likes: [],
            title: "Gatunki wiedzy ludzkiej",
            user: "5c965c6718f9680c2079c59e",
            _id: "5c9675b0d4afb706549a1b93"
        },
        {
            artColors: ["#e6eef3", "#561b14", "alarm"],
            author: "Admin",
            category: "nauka",
            dateModified: "Sat Mar 23 2019",
            description: "Fali ryki wyżółkłych przechrzciłby mody walane odgadywał zagorzalec ubrana. Gorejącém wesele maków zdała n",
            likes: [],
            title: "Wiedza naukowa (Kryteria naukowości wiedzy)",
            user: "5c965c6718f9680c2079c59e",
            __v: 0,
            _id: "5c9675ecd4afb706549a1b94",
        },
    ];

    
    return (
        <div>
            <CategoryPaper category={category} articles={articles} isSelectedCategory={true} />
        </div>
    )
}