import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { QuizForm } from 'components/forms'
import { LoginAccount, Form, Forms } from './styles'

type ChangeDataHealthFormFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const ChangeDataHealthForm: React.FC<ChangeDataHealthFormFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<Forms>
				<QuizForm />
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

export default ChangeDataHealthForm
