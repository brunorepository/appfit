import React, { useState } from 'react'
import { InputEmail, InputGender, InputName, InputNascimentDate } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const PersonalInformationsView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const [email, setEmail] = useState<string>('')

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('Quiz')
	}

	return (
		<AuthTemplate
			title="Seja bem vindo(a) ao"
			titleYellow="FitPersonal!"
			warning="Preencha as informações abaixo para continuarmos"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<InputName />
				<InputEmail value={email} onChangeText={(text: string) => setEmail(text)} />
				<InputGender />
				<InputNascimentDate placeholder="" />
			</InputContainer>
		</AuthTemplate>
	)
}

export default PersonalInformationsView
