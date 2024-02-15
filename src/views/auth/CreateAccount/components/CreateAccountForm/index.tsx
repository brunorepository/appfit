import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'
import FlashMessage from 'react-native-flash-message'

import { ButtonLg } from 'components/core'
import { InputEmail, InputGender, InputName, InputPassword } from 'components/forms'
import { LoginAccount, Form, Forms, Title } from './styles'

type CreateAccountFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<FlashMessage position="top" />
			<Title allowFontScaling={false}>Informações básicas</Title>

			<Forms>
				<InputName />
				<InputEmail value="" onChangeText={undefined} />
				<InputGender />
				<InputPassword />
			</Forms>
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default CreateAccountForm
