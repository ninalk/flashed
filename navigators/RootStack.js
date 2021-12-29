import React from 'react';
import { Colors, RightIcon } from './../components/styles';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import CategoryForm from './../screens/CategoryForm';
import CategoryDetails from './../screens/CategoryDetails';
import CardForm from './../screens/CardForm';
import EditCardForm from './../screens/EditCardForm';

const Stack = createNativeStackNavigator();
const { main, primary } = Colors;

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const RootStack = () => {
    return (
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                <NavigationContainer>
                    <Stack.Navigator 
                        initialRouteName="Login"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: 'transparent'
                            },
                            headerTintColor: primary,
                            headerTransparent: true,
                            headerTitle: '',
                            headerLeftContainerStyle: {
                                paddingLeft: 20
                            }
                        }}
                    >
                    {storedCredentials ? (
                        <>
                            <Stack.Screen 
                                options={{
                                    headerTitle: 'My Decks',
                                    headerStyle: {
                                        backgroundColor: primary,
                                    },
                                    headerTransparent: false,
                                    headerTintColor: main,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                                name="Home" 
                                component={Home} 
                                 
                            />
                            <Stack.Screen name="CategoryForm" component={CategoryForm} 
                                options={{
                                    headerStyle: {
                                        backgroundColor: primary,
                                    },
                                    headerTransparent: false,
                                    headerTintColor: main,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <Stack.Screen
                                options={({route}) => ({
                                    headerTitle: route.params.category,
                                    headerStyle: {
                                        backgroundColor: primary,
                                    },
                                    headerTransparent: false,
                                    headerTintColor: main,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                })} 
                                name="CategoryDetails" 
                                component={CategoryDetails} 
                            />
                            <Stack.Screen name="EditCard" component={EditCardForm} 
                                options={{
                                    headerStyle: {
                                        backgroundColor: primary,
                                    },
                                    headerTransparent: false,
                                    headerTintColor: main,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <Stack.Screen name="CardForm" component={CardForm} 
                                options={{
                                    headerStyle: {
                                        backgroundColor: primary,
                                    },
                                    headerTransparent: false,
                                    headerTintColor: main,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Signup" component={Signup} />
                        </>
                    )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
        
    )
}

export default RootStack;