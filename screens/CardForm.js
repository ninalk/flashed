import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// API client
import axios from 'axios';

import {
    FormContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    ButtonText,
    Line,
    CategoryButton,
    CategoryText,
    CreateLink,
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    Colors,
} from '../components/styles';

// import keyboard avoiding wrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// colors
const { primary } = Colors;

const CardForm = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const handleCardCreate = (values, setSubmitting) => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories/' + categoryId + '/cards';

        axios.post(url, values)
        .then((res) => {
            const result = res.data;
            console.log(result, ' new card')
            setSubmitting(false);
        })
        .catch((err) => {
            console.log(err)
            setSubmitting(false);
        })
    }

    return (
        <KeyboardAvoidingWrapper>
        <StatusBar style="dark" />
        <InnerContainer>
            <FormContainer>
                <SubTitle>Create a Card</SubTitle>
                <Formik
                        initialValues={{question: '', answer: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            if (values.question == '' || values.answer == '') {
                                setSubmitting(false);
                            } else {
                                handleCardCreate(values, setSubmitting);
                                resetForm();
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => 
                        (<StyledFormArea >
                            <MyTextInput
                                label="Question"
                                onChangeText={handleChange('question')}
                                onBlur={handleBlur('question')}
                                value={values.question}
                                question={true}
                            />
                            <MyTextInput
                                label="Answer"
                                onChangeText={handleChange('answer')}
                                onBlur={handleBlur('answer')}
                                value={values.answer}
                                answer={true}
                            />
                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit} >
                                    <ButtonText>Add Flash Card</ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton disabled={true} >
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>)}
                        </StyledFormArea> )}
                    </Formik>
            </FormContainer>
        </InnerContainer>

        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, ...props}) => {
    return (
        <View>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput 
                {...props} 
                cardCreate={true} 
                multiline={true}
            />
        </View>
    )
}

export default CardForm;
