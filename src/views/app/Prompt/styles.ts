import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
	padding-bottom: 64px;
`
export const Heading = styled.View`
	margin-top: 24px;
	margin-left: 12px;
	margin-right: 12px;
	align-self: flex-start;
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 20px;
`
export const CardDescription = styled.Text`
	color: #ffff;
	font-size: 12px;
	font-family: 'OpenSans-Medium';
	margin-top: 6px;
	margin-bottom: 6px;
`
export const FooterButtonContainer = styled.View`
	position: absolute;
	bottom: 20;
	left: 0;
	width: 100%;
	background-color: transparent;
	align-items: center;
`
