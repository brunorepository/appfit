import React from 'react'
import { InputTextArea } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const JoysView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('Medicines')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Insira abaixo quaisquer alergias que você tenha"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<InputTextArea placeholder="Descreva quaisquer alergias que você tenha, incluindo alergias a medicamentos, alimentos, ou ambientais." />
			</InputContainer>
		</AuthTemplate>
	)
}

export default JoysView
