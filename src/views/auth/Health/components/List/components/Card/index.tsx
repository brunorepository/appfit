import React from 'react'
import styled from 'styled-components/native'
import { ChevronRightIcon } from '@gluestack-ui/themed'

type CardProps = {
	title: string
	onPress: () => void
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

const Card: React.FC<CardProps> = ({ title, onPress }) => (
	<CardContainer onPress={onPress} activeOpacity={0.8}>
		<Title>{title}</Title>
		<ChevronRightIcon color="$white" />
	</CardContainer>
)

export default Card
