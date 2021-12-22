import React from 'react';
import { CategoryButton, CategoryText } from './styles';

const CategoryList = ({ categories }) => {
    
    return (
        categories.map((category) => {
            return (
                <CategoryButton key={category._id}>
                    <CategoryText>{category.category}</CategoryText>
                </CategoryButton>
            )
        })
    )

}

export default CategoryList;