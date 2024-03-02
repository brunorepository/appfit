import React from 'react'
import Toast from 'react-native-toast-message'
import { CheckedIcon } from 'components/icons'
import styled from 'styled-components/native'
import { ChevronRightIcon } from '@gluestack-ui/themed'

type CardProps = {
	title: string
	onPress: () => void
	isSelected: boolean
}

const CardContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
	padding: 20px;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 6px;
	margin-bottom: 6px;
	margin-left: 10px;
	margin-right: 10px;
	background-color: #242424;
	border-width: ${(props: { isSelected: any }) => (props.isSelected ? 1 : 0)};
	border-color: #ccff00;
	border-radius: 8px;
`

const Title = styled.Text`
	font-size: 16px;
	color: #ffff;
	font-family: 'OpenSans-Bold';
`

const Card: React.FC<CardProps> = ({ title, onPress, isSelected }) => (
	<CardContainer
		onPress={
			isSelected
				? () =>
						Toast.show({
							type: 'success',
							text1: 'Hello',
							text2: 'This is some something 👋',
						})
				: onPress
		}
		activeOpacity={isSelected ? 1 : 0.8}
		isSelected={isSelected}
	>
		<Title>{title}</Title>
		{isSelected ? <CheckedIcon /> : <ChevronRightIcon size="sm" color="#ffff" />}
	</CardContainer>
)

export default Card
