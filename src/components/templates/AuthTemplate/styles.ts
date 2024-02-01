import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	background-color: #1c1c1e;
	height: ${Dimensions.get('window').height};
	padding-bottom: 64px;
`
export const Header = styled.ImageBackground`
	width: 100%;
	height: 200px;
	align-items: center;
	justify-content: center;
	padding-bottom: 38px;
	padding-top: 24px;
`
export const Logo = styled.Image`
	width: 85px;
	height: 85px;
`
export const Touchable = styled.TouchableOpacity`
	align-self: flex-start;
	margin-left: 14px;
`
