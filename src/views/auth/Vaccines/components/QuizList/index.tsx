import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { CheckBox } from 'components/core'
import { Row, Text } from './styles'

type Question = {
	id: string
	text: string
	isActive: boolean
}

const QuizList: React.FC = () => {
	const [questions, setQuestions] = useState<Question[]>([
		{ id: '1', text: 'BCG', isActive: false },
		{ id: '2', text: 'Hepatite', isActive: false },
		{ id: '3', text: 'Pentavalente', isActive: false },
		{ id: '4', text: 'Poliomielite', isActive: false },
		{ id: '5', text: 'Rotavírus', isActive: false },
		{ id: '6', text: 'Pneumocócica?', isActive: false },
		{ id: '7', text: 'Meningocócica', isActive: false },
		{ id: '8', text: 'Tríplice Vira', isActive: false },
		{ id: '9', text: 'Febre Amarela?', isActive: false },
		{ id: '10', text: 'Outro?', isActive: false },
	])

	const toggleIsActive = (id: string) => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((question) =>
				question.id === id ? { ...question, isActive: !question.isActive } : question
			)
		)
	}

	const renderItem = ({ item }: { item: Question }) => (
		<Row onPress={() => toggleIsActive(item.id)} activeOpacity={0.8}>
			<CheckBox isActive={item.isActive} />
			<Text>{item.text}</Text>
		</Row>
	)

	return <FlatList data={questions} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />
}

export default QuizList
