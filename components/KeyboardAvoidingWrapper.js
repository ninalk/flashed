import React from 'react';

// keyboard avoiding view
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingWrapper;