import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// logo
import FlashedLogo from './../components/FlashedLogo';

import {
    HomeContainer,
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
    MsgBox
} from './../components/styles';

// import keyboard avoiding wrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

// colors
const { grey, primary, tertiary } = Colors;

const Create = () => {
    const handleCardCreate = (values, setSubmitting) => {
        console.log(values)
    }

    return (
        <>
        <StatusBar style="dark" />
        <InnerContainer>
            <HomeContainer>
                <FlashedLogo />
                <SubTitle>Create a flash card</SubTitle>
                <Formik
                        initialValues={{category: '', question: '', answer: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            if (values.category == '' || values.question == '' || values.answer == '') {
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
                                label="Category"
                                onChangeText={handleChange('category')}
                                onBlur={handleBlur('category')}
                                value={values.category}
                            />
                            <MyTextInput
                                label="Question"
                                onChangeText={handleChange('question')}
                                onBlur={handleBlur('question')}
                                value={values.question}
                            />
                            <MyTextInput
                                label="Answer"
                                onChangeText={handleChange('answer')}
                                onBlur={handleBlur('answer')}
                                value={values.answer}
                                answer={true}
                            />

                            {/* <MsgBox type={messageType}>{message}</MsgBox> */}
                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit} >
                                    <ButtonText>Add Card</ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton disabled={true} >
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>)}
                        </ StyledFormArea> )}

                    </Formik>
            </HomeContainer>
        </InnerContainer>

        </>
    )
}

const MyTextInput = ({label, ...props}) => {
    return (
        <View>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} cardCreate={true}/>
        </View>
    )
}

export default Create;
