import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { InputEmail, InputGender, InputName, InputPassword } from 'components/forms'
import { LoginAccount, Form, Forms } from './styles'

type CreateAccountFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
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
