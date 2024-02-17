import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-bottom: 24px;
	border-radius: 20px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -38px;
`
export const ButtonsGroup = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding-left: 14px;
	padding-right: 14px;
	margin-top: 24px;
`
export const Label = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 18px;
	margin-left: 2px;
	margin-bottom: 3px;
`
export const LabelText = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 12px;
	margin-left: 2px;
	margin-bottom: 12px;
`
export const Imc = styled.Text`
	color: #ffff;
	font-size: 14px;
	font-family: 'OpenSans-SemiBold';
	margin-left: 12px;
	margin-right: 12px;
	text-align: center;
	align-self: center;
`
export const ImcStrong = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-Bold';
`
export const FlexColumn = styled.View`
	flex-direction: column;
	margin-top: 16px;
	margin-bottom: 16px;
	padding-top: 8px;
`
export const Info = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Medium';
	font-size: 14px;
	margin-top: 2px;
`
export const ForgotPassword = styled.Text`
	margin-top: 4px;
	font-family: 'OpenSans-SemiBold';
	font-size: 14px;
	color: #ccff00;
`
export const LoginAccount = styled.Text`
	color: #ccff00;
	font-size: 12px;
	font-family: 'OpenSans-SemiBold';
`
