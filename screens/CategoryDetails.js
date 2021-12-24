import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

// API client
import axios from 'axios';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

import {
    DetailsContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    ButtonText,
    Line,
    CreateLink,
    StyledButton
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
            // setCards([...result.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //     getCards();
    // }, []);

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <DetailsContainer>
                    <SubTitle>{category}</SubTitle>
                </DetailsContainer>
            </InnerContainer>
        </>
    )
}

export default CategoryDetails;