import styled from 'styled-components/native'

export const Exercise = styled.TouchableOpacity<{ checked?: boolean }>`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 6px;
	margin-bottom: 6px;
	align-items: center;
	background-color: #1c1c1e;
	padding-left: 8px;
	padding-top: 8px;
	padding-bottom: 8px;
	elevation: 5;
	opacity: ${({ checked }) => (checked ? 0.5 : 1)};
`
export const Start = styled.View`
	flex-direction: row;
	align-items: center;
	height: 100%;
`
export const Thumb = styled.Image`
	width: 60px;
	height: 90%;
	border-radius: 10px;
`
export const Title = styled.Text`
	color: #ffff;
	font-size: 16px;
	font-family: 'OpenSans-SemiBold';
	max-width: 95%;
`
export const Instructions = styled.Text`
	color: #cccccc;
	font-family: 'OpenSans-Medium';
	margin-top: 4px;
	max-width: 95%;
`
export const SecondInstructions = styled.Text`
	color: #cccccc;
	font-family: 'OpenSans-Medium';
	margin-top: 4px;
`
export const Texts = styled.View`
	margin-left: 14px;
	flex-direction: column;
	justify-content: flex-start;
`
