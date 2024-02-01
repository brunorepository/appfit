import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { InputTextArea } from 'components/forms'
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

const SurgeriesView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<AuthTemplate>
			<Heading>
				<Title>
					Formulário de <TitleYellow>anamnese</TitleYellow>
				</Title>
				<Warning>Insira abaixo outras doenças não especificadas no questionário anterior</Warning>
			</Heading>
			<InputContainer>
				<InputTextArea />
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

export default SurgeriesView
