import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 12px;
	justify-content: center;
`

export const ReportCard = styled.View`
	background-color: #1c1c1e;
	width: 100%;
	border-radius: 8px;
	padding: 12px;
	margin-bottom: 12px;
	align-self: center;
`

export const ReportTitle = styled.Text`
	font-size: 22px;
	font-family: 'OpenSans-Bold';
	color: #0ed907;
`

export const ReportDetails = styled.View`
	margin-top: 8px;
	font-family: 'OpenSans-Medium';
`

export const ReportItem = styled.Text`
	font-size: 16px;
	color: #ffffff;
	margin-bottom: 4px;
	font-family: 'OpenSans-SemiBold';
`

export const ActionButton = styled.TouchableOpacity<{ bgColor: string }>`
	margin-top: 10px;
	background-color: ${({ bgColor }) => bgColor};
	padding: 10px;
	border-radius: 8px;
	align-items: center;
`

export const ActionButtonText = styled.Text`
	color: #fff;
	font-family: 'OpenSans-SemiBold';
`

export const ListEmptyText = styled.Text`
	color: #fff;
	text-align: center;
	margin-top: 20px;
	font-family: 'OpenSans-SemiBold';
`

export const FlatListContainer = styled(FlatList as new () => FlatList)`
	width: 100%;
	padding-left: 16px;
	padding-right: 16px;
`
