import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import QuizList from 'views/auth/Quiz/components/QuizList'
import { useNavigation } from '@react-navigation/native'

import {
	CreateAccount,
	CreateAccountYellow,
	Footer,
	Heading,
	InputContainer,
	TextRow,
	Title,
	TitleYellow,
	Warning,
} from './styles'

const QuizView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<AuthTemplate>
			<Heading>
				<Title>
					Formulário de <TitleYellow>anamnese</TitleYellow>
				</Title>
				<Warning>Selecione abaixo as opções que se aplicam a você</Warning>
			</Heading>
			<InputContainer>
				<QuizList />
			</InputContainer>
			<Footer>
				<ButtonLg onPress={() => navigation.navigate('Surgeries')}>Continuar</ButtonLg>

				<TextRow>
					<CreateAccount>Já tem uma conta?</CreateAccount>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => {
							navigation.navigate('PersonalInformations')
						}}
					>
						<CreateAccountYellow>Entre</CreateAccountYellow>
					</TouchableOpacity>
				</TextRow>
			</Footer>
		</AuthTemplate>
	)
}

export default QuizView
