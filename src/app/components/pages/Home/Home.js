import React from 'react'
import CategoryPaper from '../../shared/CategoryPaper/CategoryPaper';

export default function Home() {

    const categories = ["nauka", "sztuka", "filozofia"];

    const articles = [
        {
            id: 0,
            artBgr: "#31335c",
            artIcon: "favorite_border",
            artIconColor: "#f5b2b2",
            author: "Admin"
        },
        {
            id: 1,
            artBgr: "#561435",
            artIcon: "credit_card",
            artIconColor: "#fcfcfc",
            author: "Daria"
        },
    ]

    return (
        <div>
            {categories.map((cat) => {
                return (
                    <CategoryPaper key={cat} category={cat} articles={articles} />
                )
            })}
        </div>
    )
}