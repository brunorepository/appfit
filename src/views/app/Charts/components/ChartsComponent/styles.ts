import styled from 'styled-components/native'

export const Charts = styled.View`
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const SalesCard = styled.TouchableOpacity`
	width: 95%;
	flex-direction: row;
	justify-content: space-between;
	background-color: #323232;
	elevation: 5;
	border-radius: 8px;
	margin-top: 10px;
	margin-bottom: 6px;
	padding-left: 12px;
	padding-right: 10px;
	padding-top: 12px;
	padding-bottom: 12px;
`

export const Label = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	text-transform: capitalize;
	font-size: 12px;
`
export const Title = styled.Text`
	color: #50fc01;
	font-family: 'OpenSans-Bold';
	text-transform: capitalize;
	font-size: 20px;
	margin-top: 2px;
`
export const CardDescription = styled.Text`
	color: #cccccc;
	font-size: 11px;
	font-family: 'OpenSans-SemiBold';
	margin-bottom: 6px;
	margin-top: 2px;
`
export const FlexColumn = styled.View`
	flex-direction: column;
	flex: 0.9;
`
export const GreenCircle = styled.View`
	background-color: #0ed907;
	width: 100px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
`
export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
