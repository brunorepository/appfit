import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const Header = styled.View`
	flex-direction: column;
	width: 100%;
	margin-top: 6px;
	margin-left: 8px;
`
export const Value = styled.Text`
	color: #0ed907;
	font-family: 'OpenSans-SemiBold';
	font-size: 8px;
`
export const FlexColumn = styled.View`
	flex-direction: column;
	margin-left: 4px;
`
export const Objective = styled.Text`
	font-family: 'OpenSans-Medium';
	color: #e5e5e5;
	align-self: flex-start;
	font-size: 10px;
	margin-top: 3px;
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 18px;
	align-self: flex-start;
`
export const TitleYellow = styled.Text`
	color: #0ed907;
	font-family: 'OpenSans-ExtraBold';
`
export const Heading = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 16px;
	margin-top: 12px;
	margin-bottom: 6px;
	align-self: flex-start;
	margin-left: 4%;
`
export const HeaderStart = styled.View`
	flex-direction: row;
`
export const Badge = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: #0ed907;
	border-radius: 5px;
	padding-left: 6px;
	padding-right: 6px;
	padding-top: 2px;
	padding-bottom: 2px;
	margin-top: 3px;
	margin-bottom: 3px;
`
export const BadgeText = styled.Text`
	color: #000000;
	font-family: 'OpenSans-SemiBold';
	font-size: 10px;
`
export const Card = styled.TouchableOpacity`
	width: 95%;
	border-radius: 20px;
	margin-top: 12px;
	padding-bottom: 14px;
	justify-content: flex-end;
	elevation: 5;
	background-color: #1c1c1e;
`
export const CardContent = styled.View`
	padding-left: 12px;
	padding-right: 16px;
	margin-top: -12px;
`
export const CardTitle = styled.Text`
	color: #ffff;
	font-size: 20px;
	font-family: 'OpenSans-Bold';
	opacity: 1;
	margin-bottom: 2px;
`
export const Link = styled.Text`
	color: #0ed907;
	font-size: 14px;
	font-family: 'OpenSans-SemiBold';
	text-decoration: underline;
	margin-bottom: 6px;
	margin-top: 2px;
`
export const CardTitleSm = styled.Text`
	color: #ffff;
	font-size: 12px;
	font-family: 'OpenSans-Bold';
	opacity: 1;
	margin-top: 3px;
`
export const CardFooter = styled.View`
	flex-direction: row;
	justify-content: space-between;
`
export const FooterStart = styled.View`
	flex-direction: row;
	max-width: 90%;
`
export const Banner = styled.Image`
	width: 100%;
	height: 70px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`
