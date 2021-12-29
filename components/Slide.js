import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { 
    SlideView, 
    CardView, 
    StyledText,
    StyledViewLabel,
    EditLink,
    EditText,
    SlideFooter
} from './styles';

const Slide = ({ data, index, cards, navigation }) => {
    // toggle answer
    const [answer, setAnswer] = useState(false);

    const handleShowOrHideAnswer = () => {
        setAnswer(prevCheck => !prevCheck)
    }

    return (
        <SlideView>
            <StyledViewLabel>Question</StyledViewLabel>
            <CardView question={true}>
                <StyledText>{data.question}</StyledText>
            </CardView>
            <StyledViewLabel>Answer</StyledViewLabel>
            <Pressable onPress={() => handleShowOrHideAnswer()}>
                <CardView>
                    <StyledText>{answer ? data.answer : ''}</StyledText>
                </CardView>
            </Pressable>
            <SlideFooter>
                <EditLink onPress={() => navigation.navigate('EditCard', {
                        cardId: data._id,
                        question: data.question,
                        answer: data.answer
                    })}>
                    <EditText>Edit</EditText>
                </EditLink>
                <StyledText counter={true}>{index + 1}/{cards.length}</StyledText>
                <StyledText>Shuffle</StyledText>
            </SlideFooter>
        </SlideView>
    )
}

export default Slide;