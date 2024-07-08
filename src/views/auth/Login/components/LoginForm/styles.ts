import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 32px;
	padding-bottom: 32px;
	border-radius: 20px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -38px;
`
export const UserType = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
`
export const UserButton = styled.TouchableOpacity`
	flex: 0.25;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #242424;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	border-color: #0ed907;
	border-width: ${({ isSelected }: any) => (isSelected ? '1px' : '0px')};
`
export const UserText = styled.Text`
	color: #ffff;
	margin-top: 6px;
	font-family: 'OpenSans-SemiBold';
	text-align: center;
	font-size: 12px;
`
export const Forms = styled.View``
export const ForgotPassword = styled.Text`
	margin-top: 4px;
	font-family: 'OpenSans-SemiBold';
	font-size: 12px;
	color: #0ed907;
	text-decoration-line: underline;
`
export const ButtonGroup = styled.View`
	flex-direction: column;
	width: 100%;
	align-items: center;
`
export const Icon = styled.Image`
	width: 28px;
	height: 28px;
`
