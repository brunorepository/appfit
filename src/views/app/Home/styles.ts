import { LinearGradient } from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-left: 14px;
	padding-right: 14px;
	padding-top: 8px;
	padding-bottom: 96px;
`
export const Objective = styled.Text`
	font-family: 'OpenSans-Medium';
	color: #e5e5e5;
	align-self: flex-start;
	font-size: 10px;
	margin-top: 3px;
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 20px;
	margin-top: 4px;
	align-self: flex-start;
	max-width: 70%;
`
export const TitleYellow = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-ExtraBold';
`
export const Heading = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
	font-size: 16px;
	margin-top: 20px;
	align-self: flex-start;
	max-width: 70%;
`
export const HeadingWarning = styled.Text`
	color: #e5e5e5;
	font-family: 'OpenSans-Regular';
	font-size: 12px;
	margin-top: 4px;
	align-self: flex-start;
`
export const Card = styled.Image`
	width: 100%;
	margin-top: 16px;
	border-radius: 10px;
	height: 220px;
	background-color: #323232;
	border: solid 0.5px #ccff00;
	elevation: 5;
`
export const CardSm = styled.Image`
	width: 140px;
	margin-top: 14px;
	border-radius: 10px;
	height: 150px;
	background-color: #323232;
	border: solid 0.5px #ccff00;
	elevation: 5;
	margin-right: 8px;
`
export const HList = styled.FlatList``
