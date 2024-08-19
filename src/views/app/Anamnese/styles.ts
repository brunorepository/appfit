import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-top: 12px;
	padding-bottom: 24px;
`

export const Label = styled.Text`
	font-size: 14px;
	font-family: 'OpenSans-SemiBold';
	color: #ffff;
	margin-top: 8px;
	margin-bottom: 6px;
	align-self: flex-start;
	margin-left: 20px;
`

export const Input = styled.TextInput`
	border: 1px solid #ccc;
	width: 90%;
	padding: 10px;
	border-radius: 8px;
	margin-bottom: 16px;
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
	font-size: 16px;
`
export const UserPhoto = styled.ImageBackground`
	width: 110px;
	height: 110px;
	border-radius: 100px;
	background-color: #323232;
	align-items: center;
	justify-content: center;
`
