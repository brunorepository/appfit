import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 24px;
	padding-bottom: 32px;
	border-radius: 20px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -38px;
`
export const Logo = styled.Image`
	width: 120px;
	height: 120px;
	border-radius: 100px;
`
export const Forms = styled.View``

export const ButtonGroup = styled.View`
	flex-direction: column;
	width: 100%;
	align-items: center;
`
