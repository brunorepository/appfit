import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 8px;
	padding-bottom: 24px;
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
`
export const LoginAccount = styled.Text`
	color: #ccff00;
	font-size: 12px;
	margin-top: 24px;
	font-family: 'OpenSans-SemiBold';
`
