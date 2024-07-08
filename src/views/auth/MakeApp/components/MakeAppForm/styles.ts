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
export const AppPreview = styled.View`
	width: 50%;
	height: 180px;
	background-color: #141416;
	border-radius: 10px;
	align-items: center;
`
export const AppHeader = styled.View`
	flex-direction: row;
	width: 100%;
	height: 34px;
	background-color: #1c1c1e;
	align-items: center;
	justify-content: space-between;
	padding-left: 12px;
	padding-right: 12px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`
export const ContentPreview = styled.View`
	width: 85%;
	background-color: #191919;
	margin-top: 8px;
	height: 80px;
	border-radius: 8px;
	padding: 14px;
`
export const Skeleton1 = styled.View`
	width: 60%;
	height: 14px;
	background-color: #0ed907;
	border-radius: 100px;
	margin-bottom: 8px;
`
export const Skeleton2 = styled.View`
	width: 90%;
	height: 14px;
	background-color: #0ed907;
	border-radius: 100px;
	margin-top: 4px;
`
export const AppName = styled.Text`
	color: #0ed907;
	font-family: 'OpenSans-Bold';
`
export const Forms = styled.View`
	width: 90%;
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
