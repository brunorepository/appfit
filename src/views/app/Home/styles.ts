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
	margin-bottom: 3px;
`
export const BadgeText = styled.Text`
	color: #000000;
	font-family: 'OpenSans-SemiBold';
	font-size: 10px;
`
export const Card = styled.TouchableOpacity<{ customOpacity?: number; bgColor?: string }>`
	width: 95%;
	border-radius: 20px;
	margin-top: 6px;
	padding-bottom: 14px;
	justify-content: flex-end;
	elevation: 5;
	background-color: ${({ bgColor }) => bgColor || '#1c1c1e'};
	opacity: ${({ customOpacity }) => customOpacity || 1};
`
export const Instructions = styled.Text`
	color: #cccccc;
	font-family: 'OpenSans-Medium';
`
export const CardContent = styled.View`
	padding-left: 12px;
	padding-right: 12px;
`
export const CardTitle = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';

	margin-bottom: 2px;
`
export const CardTextRow = styled.View`
	flex-direction: row;
	align-items: center;
	margin-right: 16px;
`
export const CardDescription = styled.Text`
	color: #cccccc;
	font-size: 11px;
	font-family: 'OpenSans-SemiBold';
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
export const Banner = styled.ImageBackground`
	width: 100%;
	height: 70px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: #323232;
`
export const Emoji = styled.Text`
	font-size: 38px;
`
export const BannerSm = styled.Image`
	width: 100%;
	height: 100px;
	background-color: #323232;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`
export const CardSm = styled.TouchableOpacity<{ customOpacity?: number }>`
	width: 135px;
	opacity: ${({ customOpacity }) => (customOpacity !== undefined ? customOpacity : 0.8)};
	border-radius: 20px;
	justify-content: space-between;
	background-color: #1c1c1e;
	elevation: 5;
	margin-right: 8px;
	padding-bottom: 12px;
`

export const HList = styled.FlatList`
	margin-top: 8px;
	width: 95%;
`
export const Description = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Medium';
	margin-top: 10px;
	text-align: center;
	margin-left: 32px;
	margin-right: 32px;
	margin-bottom: 16px;
`
