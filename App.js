import React, { useState } from 'react';

// import RootStack
import RootStack from './navigators/RootStack';

// app loading
// tells splash screen to keep the splash screen visible while the Apploading component is mounted
import AppLoading from 'expo-app-loading';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {
    const [appReady, setAppReady] = useState(false);
    const [storedCredentials, setStoredCredentials] = useState('');

    const checkLoginCredentials = () => {
        AsyncStorage
            .getItem('flashedCredentials')
            .then((result) => {
                if(result !== null) {
                    setStoredCredentials(JSON.parse(result));
                } else {
                    setStoredCredentials(null);
                }
            })
            .catch(err => console.log(err))
    }

    if (!appReady) {
        return (
            <AppLoading
                startAsync={checkLoginCredentials}
                onFinish={() => setAppReady(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
            <RootStack />
        </CredentialsContext.Provider>
    );
}


