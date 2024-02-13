import { LinearGradient } from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 8px;
	padding-bottom: 80px;
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
	font-size: 18px;
	margin-top: 4px;
	align-self: flex-start;
	max-width: 70%;
`
export const TitleYellow = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-ExtraBold';
`
export const Heading = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-SemiBold';
	font-size: 16px;
	margin-top: 10px;
	align-self: flex-start;
	max-width: 70%;
`

export const Touchable = styled.TouchableOpacity`
	width: 100%;
`
export const Card = styled.ImageBackground`
	width: 100%;
	margin-top: 10px;
	border-radius: 10px;
	height: 230px;
	background-color: #323232;
	justify-content: flex-end;
	elevation: 5;
	padding-bottom: 14px;
`
export const CardContent = styled.View`
	padding-left: 12px;
`
export const CardTitle = styled.Text`
	color: #ffff;
	font-size: 20px;
	font-family: 'OpenSans-ExtraBold';
	opacity: 1;
	margin-bottom: 2px;
`
export const CardDescription = styled.Text`
	color: #ffff;
	font-size: 12px;
	font-family: 'OpenSans-Medium';
	margin-bottom: 6px;
`

export const CardTitleSm = styled.Text`
	color: #ffff;
	font-size: 14px;
	font-family: 'OpenSans-ExtraBold';
	opacity: 1;
`
export const CardFooter = styled.View`
	flex-direction: row;
`
export const CardTextRow = styled.View`
	flex-direction: row;
	align-items: center;
	margin-right: 16px;
`
export const CardText = styled.Text`
	color: #ccff00;
	font-size: 12px;
	font-family: 'OpenSans-Medium';
	margin-left: 2px;
`
export const CardSm = styled.ImageBackground`
	width: 130px;
	border-radius: 10px;
	height: 130px;
	background-color: #323232;
	elevation: 5;
	margin-right: 8px;
	justify-content: flex-end;
	padding-bottom: 10px;
`
export const HList = styled.FlatList`
	margin-top: 12px;
	padding-bottom: 12px;
`
