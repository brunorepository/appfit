import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const Texts = styled.Text`
	margin-top: 10px;
	margin-left: 12px;
	flex-direction: column;
	align-self: flex-start;
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 26px;
`
export const Warning = styled.Text`
	font-family: 'OpenSans-SemiBold';
	color: #ccff00;
	font-size: 16px;
`
export const Actions = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-top: 32px;
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
	width: 90px;
	height: 90px;
	border: solid 4px #fff;
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`
export const CircleYellow = styled.TouchableOpacity`
	width: 110px;
	height: 110px;
	border: ${({ showBorder }: any) => (showBorder ? 'solid 4px #ccff00' : 'solid 4px #ffff')};
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`
export const CircleText = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	font-size: 18px;
`
