import React from 'react'
import { InputTextArea } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'

import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const DiseasesFamilyView: React.FC = () => {
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
			warning="Insira abaixo doenças relevantes na sua fámilia"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<InputTextArea placeholder="Descreva doenças relevantes na sua fámilia ex: Minha fámilia é diabética" />
			</InputContainer>
		</AuthTemplate>
	)
}

export default DiseasesFamilyView
