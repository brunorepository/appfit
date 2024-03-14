import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
	width: 95%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #191919;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 8px;
	padding-right: 12px;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 8px;
	elevation: 5;
`
export const Start = styled.View`
	flex-direction: row;
	align-items: center;
`
export const Column = styled.View`
	flex-direction: column;
`
export const UserPhoto = styled.Image`
	width: 48px;
	height: 48px;
	background-color: #323232;
	border-radius: 100px;
	margin-right: 16px;
`
export const UserName = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 16px;
	margin-top: 4px;
`
export const Email = styled.Text`
	color: #ffff;
	margin-top: 4px;
	font-family: 'OpenSans-Medium';
`
export const Status = styled.Text`
	color: #6dd100;
	font-family: 'OpenSans-Bold';
`
export const StatusRed = styled.Text`
	color: #ff0000;
	font-family: 'OpenSans-Bold';
`
