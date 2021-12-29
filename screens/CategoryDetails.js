import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Carousel from './../components/Carousel';

// API client
import axios from 'axios';

import {
    HomeContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    ButtonText,
    Line,
    CreateLink,
    EditButton
} from './../components/styles';

const CategoryDetails = ({ route, navigation }) => {   
    const [cards, setCards] = useState([]);
    const { categoryId, category } = route.params;
    
    const getCards = () => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories/' + categoryId;

        axios.get(url, cards)
        .then((res) => {
            const result = res.data;
            console.log(result.data.cards, ' cards')
            setCards([...result.data.cards])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCards();
    }, []);

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <Carousel cards={cards} />
                    {/* <EditButton>
                        <ButtonText edit={true}>Edit</ButtonText>
                    </EditButton> */}
                    <CreateLink onPress={() => navigation.navigate('CardForm', {
                        categoryId: categoryId
                    })}>
                        <ButtonText create={true}>+</ButtonText>
                    </CreateLink>
                </HomeContainer>
            </InnerContainer>
        </>
    )
}

export default CategoryDetails;