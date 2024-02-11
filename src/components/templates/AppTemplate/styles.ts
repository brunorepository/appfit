import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: ${(props: { jc: string }) => props.jc || 'space-between'};
	background-color: #1c1c1e;
	height: ${Dimensions.get('window').height};
	padding-bottom: 64px;
`
export const Header = styled.ImageBackground`
	width: 100%;
	height: 190px;
	align-items: center;
	justify-content: center;
	padding-bottom: 38px;
	padding-top: 24px;
`
export const Logo = styled.Image`
	width: 85px;
	height: 85px;
`
export const Touchable = styled.TouchableOpacity``

export const Heading = styled.View`
	flex-direction: column;
	align-self: flex-start;
	padding-right: 64px;
`
export const Title = styled.Text`
	color: #ffff;
	font-size: 26px;
	margin-top: -55px;
	align-self: flex-start;
	margin-left: 24px;
	max-width: 260px;
	font-family: 'OpenSans-SemiBold';
	line-height: 34px;
`
export const Warning = styled.Text`
	font-family: 'OpenSans-SemiBold';
	color: #ffff;
	margin-top: 6px;
	margin-left: 24px;
`
export const TitleYellow = styled.Text`
	color: #ccff00;
	font-size: 30px;
	margin-top: -6px;
	align-self: flex-start;
	margin-left: 24px;
	max-width: 260px;
	font-family: 'OpenSans-Bold';
`
export const CreateAccount = styled.Text`
	margin-top: 30px;
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
`
export const CreateAccountYellow = styled.Text`
	color: #cf0;
	font-family: 'OpenSans-SemiBold';
	margin-top: 32px;
	margin-left: 6px;
`
export const ForgotPassword = styled.Text`
	color: #cdcdcd;
	font-family: 'OpenSans-SemiBold';
	text-decoration: underline;
	margin-top: 12px;
	align-self: flex-start;
	margin-left: 20px;
`
export const TextRow = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
export const Footer = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
`
