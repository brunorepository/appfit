import { Dimensions } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 20px;
	height: ${Dimensions.get('window').height};
`
export const UserPhoto = styled.Image`
	width: 95px;
	height: 95px;
	border-radius: 120px;
	background-color: #323232;
	border: solid 1px #ccff00;
`
export const UserName = styled.Text`
	font-family: 'OpenSans-Bold';
	font-size: 22px;
	color: #ffff;
	margin-top: 8px;
	margin-bottom: 6px;
`
export const ItemList = styled.View`
	width: 100%;
	background-color: #323232;
	border: solid 0.5px #ccff00;
	align-items: center;
	padding-top: 24px;
	elevation: 5;
	height: 100%;
	border-radius: 10px;
`
