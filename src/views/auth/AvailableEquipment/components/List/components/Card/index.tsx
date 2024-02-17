import React from 'react'
import styled from 'styled-components/native'

type CardProps = {
	title: string
	isSelected: boolean
	onPress: () => void
}

const CardContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
	padding: 20px;
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

const Card: React.FC<CardProps> = ({ title, isSelected, onPress }) => (
	<CardContainer isSelected={isSelected} onPress={onPress} activeOpacity={0.8}>
		<Title>{title}</Title>
	</CardContainer>
)

export default Card
