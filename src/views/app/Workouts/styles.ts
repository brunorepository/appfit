import { Dimensions } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	height: ${Dimensions.get('window').height};
	padding-left: 12px;
	padding-right: 12px;
`
export const Touchable = styled.TouchableOpacity`
	width: 100%;
`
export const Card = styled(LinearGradient)`
	width: 100%;
	margin-top: 10px;
	border-radius: 10px;
	background-color: #323232;
	justify-content: center;
	elevation: 5;
	border: solid 2px #ccff00;
	opacity: 0.9;
`
export const CardContent = styled.View`
	padding-left: 12px;
	padding-right: 12px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const FlexColumn = styled.View`
	flex-direction: column;
	padding-top: 12px;
	padding-bottom: 12px;

	flex: 0.9;
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
export const Exercice = styled.Image`
	width: 70px;
	height: 80%;
`
