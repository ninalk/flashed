import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text } from 'react-native';
import { CategoryButton, CategoryText, DeleteView} from './styles';

const Category = ({ item, getCategoryDetails }) => {
    
    const handleDelete = () => {
        console.log('handle delete')
    }
    
    const rightSwipeActions = () => {
        return (
            <DeleteView onPress={() => handleDelete()}>
                <Text>Delete</Text>
            </DeleteView>
        );
      };
    
    const swipeFromRightOpen = () => {
        console.log('Swipe from right');
    };

    return (
        <Swipeable
            renderRightActions={rightSwipeActions}
            onSwipeableRightOpen={swipeFromRightOpen}
        >
            <CategoryButton onPress={() => getCategoryDetails({item})}>
                <CategoryText>{item.category}</CategoryText>
                <CategoryText>{item.cards.length}</CategoryText>
            </CategoryButton>
        </Swipeable>
    )
}

export default Category;