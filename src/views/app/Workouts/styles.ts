import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-top: 4px;
`
export const Touchable = styled.TouchableOpacity`
	width: 100%;
`
export const Card = styled.TouchableOpacity`
	width: 95%;
	margin-top: 10px;
	border-radius: 20px;
	background-color: #323232;
	justify-content: center;
	elevation: 5;
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
	font-size: 16px;
	font-family: 'OpenSans-ExtraBold';
	opacity: 1;
	margin-bottom: 2px;
`
export const CardDescription = styled.Text`
	color: #ffff;
	font-size: 10px;
	font-family: 'OpenSans-Medium';
	margin-bottom: 6px;
`
export const Exercice = styled.Image`
	width: 70px;
	height: 80%;
`
