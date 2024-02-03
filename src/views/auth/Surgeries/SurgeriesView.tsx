import React from 'react'
import { InputTextArea } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const SurgeriesView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('Joys')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Insira abaixo outras doenças não especificadas no questionário anterior"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<InputTextArea placeholder="Insira abaixo cirurgias ou procedimentos médicos pelos quais você passou" />
			</InputContainer>
		</AuthTemplate>
	)
}

export default SurgeriesView
