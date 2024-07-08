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
	padding-top: 18px;
	padding-bottom: 64px;
	background-color: #0ed907;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-left: 8px;
	padding-right: 8px;
`
export const Left = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	align-items: center;
	justify-content: center;
`
export const Top = styled.View`
	width: 100%;
`
export const Version = styled.Text`
	color: #000000;
	font-family: 'OpenSans-SemiBold';
`
export const HeaderTitle = styled.Text`
	color: #2a2f40;
	font-family: 'OpenSans-Bold';
	font-size: 20px;
	text-align: center;
`
export const HeaderInfo = styled.Text`
	color: #2a2f40;
	font-family: 'OpenSans-SemiBold';
	font-size: 11px;
	margin-top: 2px;
	text-align: center;
`
