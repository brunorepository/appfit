import styled from 'styled-components/native'

export const Exercise = styled.TouchableOpacity`
	width: 100%;
	height: 70px;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 6px;
	margin-bottom: 6px;
	align-items: center;
	background-color: #1c1c1e;
	padding-left: 8px;
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
	color: #cccccc;
	font-family: 'OpenSans-Medium';
	margin-top: 4px;
`
export const Texts = styled.View`
	margin-left: 14px;
	flex-direction: column;
	justify-content: flex-start;
`
