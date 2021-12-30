import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Carousel from './../components/Carousel';

// API client
import axios from 'axios';

import {
    HomeContainer,
    InnerContainer,
    ButtonText,
    CreateLink,
    NewCardAlert,
    NewCardAlertView,
    Colors
} from './../components/styles';

// icons
import { Octicons } from '@expo/vector-icons';

const { main2 } = Colors;

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
                    {cards.length ? 
                        <>
                        <Carousel cards={cards} navigation={navigation} />
                        <CreateLink onPress={() => navigation.navigate('CardForm', {
                            categoryId: categoryId
                        })}>
                            <ButtonText create={true}>+</ButtonText>
                        </CreateLink>
                        </>
                        :
                        <>
                        <NewCardAlertView>
                            <NewCardAlert>
                                CREATE FLASHCARDS!
                            </NewCardAlert>
                            <Octicons name="arrow-down" size={50} color={main2} />
                        </NewCardAlertView>
                        <CreateLink onPress={() => navigation.navigate('CardForm', {
                            categoryId: categoryId
                        })}>
                            <ButtonText create={true}>+</ButtonText>
                        </CreateLink>
                        </>
                    }
                </HomeContainer>
            </InnerContainer>
        </>
    )
}

export default CategoryDetails;