import { Dimensions } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	padding-left: 14px;
	padding-right: 14px;
	height: ${Dimensions.get('window').height};
`
export const Title = styled.Text`
	color: #ffff;
	font-family: 'OpenSans-SemiBold';
	font-size: 20px;
	margin-top: 24px;
	align-self: flex-start;
	padding-left: 16px;
`
