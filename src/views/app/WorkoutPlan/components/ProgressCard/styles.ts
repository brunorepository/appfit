import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
	width: 100%;
	height: 70px;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 6px;
	align-items: center;
	background-color: #191919;
	padding-left: 14px;
	padding-right: 16px;
	elevation: 5;
`
export const Start = styled.View`
	flex-direction: row;
	align-items: center;
	height: 100%;
`
export const Thumb = styled.Image`
	width: 50px;
	height: 90%;
`
export const Title = styled.Text`
	color: #ffff;
	font-size: 18px;
	font-family: 'OpenSans-SemiBold';
`
export const Instructions = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Medium';
`
export const Texts = styled.View`
	margin-left: 12px;
	flex-direction: column;
	justify-content: flex-start;
`
export const Duration = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Medium';
	font-size: 12px;
`
export const Value = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-SemiBold';
	font-size: 12px;
`
