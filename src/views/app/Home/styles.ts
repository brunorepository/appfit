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
	color: #ccff00;
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
	color: #ccff00;
	font-family: 'OpenSans-ExtraBold';
`
export const Heading = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
	font-size: 14px;
	margin-top: 12px;
	margin-bottom: 6px;
	align-self: flex-start;
	margin-left: 16px;
`
export const HeaderStart = styled.View`
	flex-direction: row;
`
export const Badge = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: #ccff00;
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
	margin-top: 10px;
	border-radius: 10px;
	padding-bottom: 10px;
	background-color: #191919;
	justify-content: flex-end;
	elevation: 5;
`
export const CardContent = styled.View`
	padding-left: 12px;
	padding-right: 16px;
	margin-top: -14px;
`
export const CardTitle = styled.Text`
	color: #ffff;
	font-size: 16px;
	font-family: 'OpenSans-ExtraBold';
	opacity: 1;
	margin-bottom: 2px;
`
export const CardDescription = styled.Text`
	color: #ffff;
	font-size: 10px;
	font-family: 'OpenSans-Medium';
	margin-bottom: 6px;
`
export const CardTitleSm = styled.Text`
	color: #ffff;
	font-size: 12px;
	font-family: 'OpenSans-ExtraBold';
	opacity: 1;
`
export const CardFooter = styled.View`
	flex-direction: row;
	justify-content: space-between;
`
export const FooterStart = styled.View`
	flex-direction: row;
	max-width: 90%;
`
export const CardTextRow = styled.View`
	flex-direction: row;
	align-items: center;
	margin-right: 16px;
`
export const CardText = styled.Text`
	color: #ccff00;
	font-size: 10px;
	font-family: 'OpenSans-Medium';
	margin-left: 2px;
`
export const Banner = styled.Image`
	width: 100%;
	height: 80px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`
export const CardSm = styled.TouchableOpacity`
	width: 250px;
	border-radius: 10px;
	background-color: #191919;
	height: 155px;
	elevation: 5;
	margin-right: 8px;
	padding-bottom: 10px;
`
export const HList = styled.FlatList`
	margin-top: 8px;
	width: 95%;
`
