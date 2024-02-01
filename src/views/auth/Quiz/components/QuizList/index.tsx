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
		{ id: '1', text: 'Fez alguma cirurgia?', isActive: false },
		{ id: '2', text: 'É asmático?', isActive: false },
		{ id: '3', text: 'É diabético?', isActive: false },
		{ id: '4', text: 'Tem Artrite?', isActive: false },
		{ id: '5', text: 'É Alergico?', isActive: false },
		{ id: '6', text: 'Tem insônia?', isActive: false },
		{ id: '7', text: 'É Anemico?', isActive: false },
		{ id: '8', text: 'Hipercolesterol?', isActive: false },
		{ id: '9', text: 'É Ansioso?', isActive: false },
		{ id: '10', text: 'TDHA?', isActive: false },
		{ id: '11', text: 'TAG?', isActive: false },
		{ id: '12', text: 'Outro?', isActive: false },
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

	return (
		<FlatList
			style={{
				paddingBottom: 16,
			}}
			data={questions}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	)
}

export default QuizList
