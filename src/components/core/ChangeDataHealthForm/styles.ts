import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 8px;
	padding-bottom: 24px;
	padding-left: 12px;
	padding-right: 12px;
	border-radius: 10px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -38px;
`
export const Forms = styled.ScrollView`
	align-self: flex-start;
	width: 100%;
	background-color: #191919;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-bottom: 16px;
	border: solid 1px #0ed907;
`
export const LoginAccount = styled.Text`
	color: #0ed907;
	font-size: 12px;
	margin-top: 24px;
	font-family: 'OpenSans-SemiBold';
`
