import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-bottom: 128px;
`
export const ScrollCustomized = styled(KeyboardAwareScrollView)`
	background-color: #141416;
`
export const FooterButtonContainer = styled.View`
	position: absolute;
	bottom: 20;
	left: 0;
	width: 100%;
	background-color: transparent;
	align-items: center;
`
export const ListEmptyText = styled.Text`
	color: #fff;
	text-align: center;
	margin-top: 20px;
	font-family: 'OpenSans-SemiBold';
`
