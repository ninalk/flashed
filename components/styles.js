import styled from 'styled-components';
import Constants from 'expo-constants';
import { Dimensions, Animated } from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// colors
export const Colors = {
    primary: "rgb(228, 243, 224)",
    secondary: "rgb(224, 242, 224)",
    tertiary: "rgb(248, 253, 241)",
    grey: "rgb(206, 206, 206)",
    pink: "rgb(232, 146, 144)",
    green: "rgb(94, 145, 75)",
    yellow: "rgb(244, 210, 93)",
    blue: "rgb(100, 168, 192)",
    orange: "rgb(232, 126, 60)",
    main: "rgb(16, 71, 89)",
    main1: "rgb(150, 205, 190)",
    main2: "rgb(231, 203, 108)",
    white: "rgb(255, 255, 255)"
}

const { primary, secondary, tertiary, grey, white, green, blue, main, main1, main2 } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 80}px;
    background-color: ${primary};
    padding-bottom: 250px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const HomeContainer = styled(InnerContainer)`
    padding: 10px;
    background-color: ${primary};
`;

export const FormContainer = styled(InnerContainer)`
    background-color: ${primary};
    padding: 10px;
    ${'' /* padding-top: ${StatusBarHeight}px; */}
`

export const SubTitle = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: ${main};
    padding: 10px;

    ${(props) => props.home && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 82%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${tertiary};
    box-shadow: 0 1px 3px ${grey};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;

    ${(props) => props.cardCreate && `
        padding-left: 15px;
    `}

    ${(props) => props.answer && `
        height: 460px;
    `}

    ${(props) => props.question && `
        height: 100px;
    `}
`;

export const StyledInputLabel = styled.Text`
    color: ${main};
    font-size: 13px;
    text-align: left;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${main2};
    box-shadow: 0 1px 3px ${grey};
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
    color: ${white};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding-left: 20px;
    `}

    ${(props) => props.create == true && `
        font-size: 39px;
        color: ${main2};
        padding-bottom: 5px;
        box-shadow: 0 0 3px ${main2};
    `}

    ${(props) => props.edit == true && `
        font-size: 26px;
        color: ${main2};
        padding-bottom: 5px;
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
export const CategoryButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${main1};
    box-shadow: 1px 1px 3px ${main1};
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 0;
`
export const CategoryText = styled.Text`
    color: ${main};
    font-size: 16px;
    font-weight: bold;
`;

export const CreateLink = styled.TouchableOpacity`
    width: 60px; 
    height: 60px;
    align-items: center;
    border-radius: 50px;
    background-color: ${primary};
    border: 3px solid ${main2};
    margin-bottom: 10px;
    position: absolute;
    top: 85%;
    box-shadow: 0 0 3px ${main2};
`;

export const FooterStyle = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${primary};
`
export const LogoutButton = styled.TouchableOpacity`
    width: 60px; 
    height: 60px;
    align-items: center;
    background-color: ${primary};
    position: absolute;
    left: 28px;
    top: 86%;
`;

export const SettingsButton = styled.TouchableOpacity`
    width: 60px; 
    height: 60px;
    align-items: center;
    background-color: ${primary};
    position: absolute;
    right: 28px;
    top: 86%;
`;

export const EditLink = styled.TouchableOpacity`
    background-color: ${primary};
    margin-bottom: 10px;
`

export const EditText = styled.Text`
    color: ${main2};
    font-size: 18px;
    font-weight: bold;
`
export const DeleteView = styled.TouchableOpacity`
    padding-horizontal: 30px;
    background-color: ${grey};
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 0;
`
export const SlideView = styled.View`
    height: ${windowHeight - 260}px;
    width: ${windowWidth - 20}px;
    ${'' /* align-items: center; */}
    text-align: left;
`

export const CardView = styled.View`
    background-color: ${tertiary};
    padding: 15px;
    border-radius: 5px;
    height: ${props => props.question ? '100px' : '460px'};
    width: ${windowWidth * 0.9}px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    align-self: center; 
    box-shadow: 0 1px 3px ${grey};
`;

export const StyledText = styled.Text`
    font-size: 16px;
    color: ${main};
`
export const StyledViewLabel = styled.Text`
    color: ${main};
    font-size: 13px;
    margin-left: 12px;
    padding-bottom: 3px;
`;

export const SlideFooter = styled.View`
    width: ${windowWidth * 0.9}px;
    padding-left: 18px;
    flex-direction: row;
    justify-content: space-between;
`

export const NewCardAlert = styled.Text`
    font-size: 26px;
    color: ${main2};
`
export const NewCardAlertView = styled.View`
    top: 70%;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 3px ${main2};
`