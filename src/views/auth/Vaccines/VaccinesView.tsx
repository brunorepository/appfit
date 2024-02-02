import React from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import QuizList from './components/QuizList'

import { InputContainer } from './styles'

const QuizView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('DiseasesFamily')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Selecione abaixo as vácinas que você já tomou"
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
