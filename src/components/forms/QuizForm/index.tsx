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
	instructions: string // Instruções podem ser opcionais
	options: string[] // Defina as opções por pergunta para torná-las dinâmicas
}

interface QuizFormProps {
	data?: Question[] // Agora o componente espera que as perguntas sejam passadas como prop, opcional
	iconComponent?: React.FC // Permite que o ícone do Radio seja customizado
	onSubmit?: (answers: Record<number, string>) => void // Callback para submissão
}

const QuizForm: React.FC<QuizFormProps> = ({ data = [], iconComponent: IconComponent = CheckedIcon, onSubmit }) => {
	// Usando um valor padrão vazio para evitar erros de undefined
	const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>(
		data.length > 0 ? data.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {}) : {}
	)

	const handleOptionChange = (questionId: number, choice: string) => {
		setSelectedOptions((prev) => ({
			...prev,
			[questionId]: choice,
		}))
	}

	const handleSubmit = () => {
		if (onSubmit) {
			onSubmit(selectedOptions) // Chama o callback de submissão com as respostas
		}
		console.log('Respostas submetidas:', selectedOptions)
	}

	return (
		<FormControl alignSelf="flex-start" ml={10}>
			<VStack space="md" pl={16} pr={16} mb={4}>
				{data.map((question) => (
					<VStack key={question.id} space="md">
						<Text size="sm" color="$white" fontFamily="OpenSans-Bold">
							{question.text}
						</Text>
						<RadioGroup
							value={selectedOptions[question.id]}
							onChange={(e) => {
								handleOptionChange(question.id, e)
							}}
						>
							<VStack space="lg">
								{question.options.map((option) => (
									<Radio key={option} value={option} size="md" borderColor="#ffff">
										<RadioIndicator mr="$2" borderColor="#0ED907">
											<RadioIcon as={IconComponent} />
										</RadioIndicator>
										<RadioLabel color="$white" fontFamily="OpenSans-SemiBold">
											{option}
										</RadioLabel>
									</Radio>
								))}
							</VStack>
						</RadioGroup>
						{question.instructions && (
							<Text fontSize="$sm" color="$coolGray400" fontFamily="OpenSans-Medium" mt={6} mb={4}>
								{question.instructions}
							</Text>
						)}
					</VStack>
				))}
			</VStack>
		</FormControl>
	)
}

export default QuizForm
