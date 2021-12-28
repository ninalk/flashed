import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SlideView, AnswerView, QuestionView, StyledText } from './styles';

const Slide = ({ data }) => {
    return (
        <SlideView>
            <QuestionView>
                <StyledText>{data.question}</StyledText>
            </QuestionView>
            <AnswerView>
                <StyledText>{data.answer}</StyledText>
            </AnswerView>
        </SlideView>
    )
}

const Carousel = ({ cards }) => {
    console.log(cards, ' in carousel')
    return (
        <FlatList 
            data={cards}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
                return <Slide data={item} />
            }}
            keyExtractor={(item) => item._id}
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}


export default Carousel;