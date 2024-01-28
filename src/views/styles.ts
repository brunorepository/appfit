import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const Header = styled.ImageBackground`
	width: 100%;
	height: 230px;
	border-bottom-right-radius: 120px;
	align-items: center;
	justify-content: center;
`
export const Logo = styled.Image`
	width: 85px;
	height: 85px;
`
export const Title = styled.Text`
	color: #ffff;
	font-size: 26px;
	margin-top: -50px;
	align-self: flex-start;
	margin-left: 24px;
	max-width: 260px;
	font-family: 'OpenSans-SemiBold';
	line-height: 34px;
`
export const TitleYellow = styled.Text`
	color: #ccff00;
	font-size: 30px;
	margin-top: -6px;
	align-self: flex-start;
	margin-left: 24px;
	max-width: 260px;
	font-family: 'OpenSans-Bold';
`
export const InputContainer = styled.View`
	margin-top: 12px;
	width: 100%;
	align-items: center;
	margin-bottom: 12px;
`
export const CreateAccount = styled.Text`
	margin-top: 30px;
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
`
export const CreateAccountYellow = styled.Text`
	color: #cf0;
	font-family: 'OpenSans-SemiBold';
	margin-top: 32px;
	margin-left: 6px;
`
export const ForgotPassword = styled.Text`
	color: #cdcdcd;
	font-family: 'OpenSans-SemiBold';
	text-decoration: underline;
	margin-top: 12px;
	align-self: flex-start;
	margin-left: 20px;
`
export const TextRow = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
export const Footer = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
	margin-top: 96px;
`
