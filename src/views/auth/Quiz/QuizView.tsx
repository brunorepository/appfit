import React from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import QuizList from 'views/auth/Quiz/components/QuizList'
import {} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const QuizView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('Surgeries')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Selecione abaixo as opções que se aplicam a você"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<QuizList />
			</InputContainer>
		</AuthTemplate>
	)
}

export default QuizView
