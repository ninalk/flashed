import React from 'react';
import { CategoryButton, CategoryText } from './styles';


const CategoryView = ({ categories }) => {
    
    return (
        categories.map((category) => {
            return (
                <CategoryButton 
                    key={category._id}
                    category={category.category}
                >
                    <CategoryText>{category.category} ({category.cards.length})</CategoryText>
                </CategoryButton>
            )
        })
    )

}

export default CategoryView;