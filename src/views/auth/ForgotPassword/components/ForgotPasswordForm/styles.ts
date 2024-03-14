import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 18px;
	padding-bottom: 24px;
	border-radius: 20px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -38px;
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 22px;
	align-self: flex-start;
	margin-left: 16px;
`
export const UserType = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
`
export const UserButton = styled.TouchableOpacity`
	flex: 0.25;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 14px;
	padding-bottom: 14px;
	background-color: #191919;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	border-color: #ccff00;
	border-width: ${({ isSelected }: any) => (isSelected ? '1px' : '0px')};
`
export const UserText = styled.Text`
	color: #ffff;
	margin-top: 6px;
	font-family: 'OpenSans-SemiBold';
	text-align: center;
	font-size: 14px;
`
export const Forms = styled.View``
