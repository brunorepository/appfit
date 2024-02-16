import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Form = styled.View`
	width: 95%;
	padding-top: 20px;
	padding-bottom: 24px;
	border-radius: 20px;
	height: ${Dimensions.get('window').height / 1.35};
	background-color: #323232;
	align-items: center;
	justify-content: space-between;
	margin-top: -44px;
`
export const Header = styled.View`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 12px;
	padding-right: 12px;
`
export const PersonalPhoto = styled.Image`
	width: 110px;
	height: 110px;
	border-radius: 120px;
	border: solid 1px #ccff00;
`
export const PersonalName = styled.Text`
	color: #ffff;
	margin-top: 8px;
	font-size: 24px;
	font-family: 'OpenSans-Bold';
`
export const PersonalInfo = styled.Text`
	color: #ffff;
	margin-top: 6px;
	font-size: 14px;
	text-align: center;
	font-family: 'OpenSans-Medium';
`
export const Target = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
`
export const PriceRow = styled.View`
	flex-direction: row;
	margin-top: 12px;
`
export const PriceColumn = styled.View`
	flex-direction: column;
	margin-bottom: 24px;
`
export const Price = styled.Text`
	color: #ccff00;
	margin-top: 4px;
	font-size: 38px;
	font-family: 'OpenSans-Bold';
`
export const PriceType = styled.Text`
	color: #ccff00;
	margin-top: 10px;
	font-family: 'OpenSans-Bold';
	font-size: 16px;
`
export const Value = styled.Text`
	color: #ccff00;
	font-family: 'OpenSans-SemiBold';
	font-size: 8px;
`
export const FlexColumn = styled.View`
	flex-direction: column;
	margin-left: 4px;
`
export const CardContent = styled.View`
	padding-left: 12px;
	padding-right: 12px;
`
export const CardSm = styled.TouchableOpacity`
	width: 110px;
	margin-top: 12px;
	padding-bottom: 12px;
	border-radius: 20px;
	background-color: #242424;
	justify-content: flex-end;
	height: 100px;
	elevation: 5;
	margin-right: 8px;
	border: solid 1px #ccff00;
`
export const CardTitle = styled.Text`
	color: #ffff;
	margin-top: 3px;
	font-family: 'OpenSans-SemiBold';
`
export const HList = styled.FlatList`
	width: 95%;
	margin-top: 12px;
`
