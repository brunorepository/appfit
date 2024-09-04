import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const Texts = styled.Text`
	margin-top: 16px;
	margin-left: 12px;
	flex-direction: column;
	align-self: center;
	text-align: center;
`

export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 20px;
	text-align: center;
`

export const Warning = styled.Text`
	font-family: 'OpenSans-SemiBold';
	color: #0ed907;
	font-size: 16px;
`

export const Actions = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-top: 12px;
	padding-left: 18px;
	padding-right: 18px;
`

export const Column = styled.View`
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Label = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Medium';
	font-size: 12px;
	margin-top: 10px;
	max-width: 50%;
	text-align: center;
`

export const CircleWhite = styled.View`
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 12px;
	padding-bottom: 12px;
	margin-bottom: 16px;
	border: solid 2px #fff;
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`

export const CircleText = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 18px;
	text-align: center;
`

export const FeedbackButton = styled.TouchableOpacity`
	background-color: #0ed907;
	padding: 20px;
	border-radius: 100px;
	margin-top: 6px;
	align-items: center;
	justify-content: center;
`
export const ExtraVideoText = styled.Text`
	font-size: 16px;
	color: #0ed907;
	margin-right: 4px;
	font-family: 'OpenSans-Bold';
`
export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
`
