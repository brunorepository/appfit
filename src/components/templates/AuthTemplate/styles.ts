import styled from 'styled-components/native'

export const Content = styled.View`
	flex: 1;
	align-items: center;
	flex-direction: column;
	background-color: #1c1c1e;
`
export const FlexColumn = styled.View`
	flex-direction: column;
`

export const Header = styled.View`
	width: 100%;
	height: 170px;
	background-color: #ccff00;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
`

export const LeftIconContainer = styled.TouchableOpacity`
	flex: 1;
	align-items: flex-start;
	justify-content: flex-start;
	padding-bottom: 100px;
`

export const TextContainer = styled.View`
	align-items: center;
	justify-content: center;
`

export const HeaderTitle = styled.Text`
	color: #191919;
	font-family: 'OpenSans-Bold';
	font-size: 20px;
	text-align: center;
`

export const HeaderInfo = styled.Text`
	color: #191919;
	font-family: 'OpenSans-SemiBold';
	font-size: 11px;
	margin-top: 2px;
	text-align: center;
`
