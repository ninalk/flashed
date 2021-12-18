import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    primary: "rgb(252, 247, 241)",
    secondary: "rgb(255, 255, 255)",
    tertiary: "rgb(172, 199, 28)",
    grey: "rgb(206, 206, 206)",
    pink: "rgb(232, 146, 144)",
    green: "rgb(94, 145, 75)",
    yellow: "rgb(244, 210, 93)",
    blue: "rgb(100, 168, 192)",
    orange: "rgb(232, 126, 60)"
}

const { primary, secondary, tertiary, grey, pink, green, yellow, blue, orange } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 100}px;
    background-color: ${primary};
    padding-bottom: 250px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const HomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
    background-color: ${primary};
`;

// export const PageTitle = styled.Text`
//     font-size: 30px;
//     text-align: center;
//     font-weight: bold;
//     color: ${pink};
//     padding: 10px;

//     ${(props) => props.home && `
//         font-size: 35px;
//     `}
// `;

export const SubTitle = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: ${blue};
    padding: 10px;

    ${(props) => props.home && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px; 
    margin-vertical: 3px;
    margin-bottom: 10px;
`;

export const StyledInputLabel = styled.Text`
    color: ${grey};
    font-size: 13px;
    text-align: left;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${tertiary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding-left: 20px;
    `}
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? 'green' : 'red'}
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${grey};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${blue};
    font-size: 15px;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-top: 10px;
    margin-bottom: 10px;
`