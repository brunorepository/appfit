import React, { useState } from 'react'
import { CheckedIcon } from 'components/icons'
import {
	FormControl,
	VStack,
	RadioGroup,
	Radio,
	RadioIndicator,
	RadioIcon,
	RadioLabel,
	Text,
} from '@gluestack-ui/themed'

interface Question {
	id: number
	text: string
	instructions: string
}

const questions: Question[] = [
	{
		id: 1,
		text: 'Você tem alguma doença?',
		instructions: 'Instrução para resposta da pergunta',
	},
	{
		id: 2,
		text: 'Você é diabético?',
		instructions: 'Instrução para resposta da pergunta',
	},
	{
		id: 3,
		text: 'Tem asma?',
		instructions: 'Instrução para resposta da pergunta',
	},
]

type QuizFormProps = {
	data?: Question[]
}

const answerOptions = ['Sim', 'Nao', 'Nenhuma das alternativas']

const QuizForm: React.FC<QuizFormProps> = ({ data }) => {
	const [selectedOptions, setSelectedOptions] = useState<any>(
		questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
	)

	const handleOptionChange = (questionId: number, choice: any) => {
		setSelectedOptions((prev: any) => ({
			...prev,
			[questionId]: choice,
		}))
	}

	const returnDataProvider = () => {
		if (data) {
			return data
		}

		return questions
	}

	return (
		<FormControl>
			<VStack space="md" pl={16} pr={16} mb={4}>
				{returnDataProvider().map((question) => (
					<VStack key={question.id} space="md">
						<Text size="sm" color="$white" fontFamily="OpenSans-Bold">
							{question.text}
						</Text>
						<RadioGroup
							value={selectedOptions[question.id]}
							onChange={(e) => {
								handleOptionChange(question.id, e)
								console.log(selectedOptions)
							}}
						>
							<VStack space="lg">
								{answerOptions.map((option) => (
									<Radio key={option} value={option} size="md" borderColor="#ffff">
										<RadioIndicator mr="$2" borderColor="#0ED907">
											<RadioIcon as={CheckedIcon} />
										</RadioIndicator>
										<RadioLabel color="$white" fontFamily="OpenSans-SemiBold">
											{option}
										</RadioLabel>
									</Radio>
								))}
							</VStack>
						</RadioGroup>
						<Text fontSize="$sm" color="$coolGray400" fontFamily="OpenSans-Medium" mt={6} mb={4}>
							{question.instructions}
						</Text>
					</VStack>
				))}
			</VStack>
		</FormControl>
	)
}

export default QuizForm
