import styled from 'styled-components/native'

export const Label = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-Bold';
	margin-bottom: 10px;
`
export const Scrollable = styled.ScrollView``
export const Row = styled.View`
	flex-direction: row;
	margin-top: 8px;
`
export const Color = styled.TouchableOpacity`
	border: solid 1px #cccccc;
	width: 44px;
	height: 44px;
	background-color: ${(props: { backgroundColor: string }) => props.backgroundColor || '#323232'};

	border-radius: 100px;
	margin-right: 10px;
`
