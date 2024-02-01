import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { InputEmail, InputGender, InputName, InputNascimentDate } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
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

const PersonalInformationsView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const [email, setEmail] = useState<string>('')

	const handleConfirm = () => {
		navigation.navigate('Quiz')
	}

	return (
		<AuthTemplate>
			<Heading>
				<Title>
					Seja bem vindo(a) ao <TitleYellow>Fit!</TitleYellow>
				</Title>
				<Warning>Preencha as informações abaixo para continuarmos</Warning>
			</Heading>
			<InputContainer>
				<InputName />
				<InputEmail value={email} onChangeText={(text: string) => setEmail(text)} />
				<InputGender />
				<InputNascimentDate placeholder="" />
			</InputContainer>
			<Footer>
				<ButtonLg onPress={handleConfirm}>Continuar</ButtonLg>

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

export default PersonalInformationsView
