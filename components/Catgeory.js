import React from 'react';
import { CategoryButton, CategoryText } from './styles';

const Category = ({ item, getCategoryDetails }) => {

    return (
        <CategoryButton onPress={() => getCategoryDetails({item})}>
            <CategoryText>{item.category}</CategoryText>
            <CategoryText>{item.cards.length}</CategoryText>
        </CategoryButton>
    )
}

export default Category;