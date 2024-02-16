import React from 'react' // Importando useState
import { showMessage } from 'react-native-flash-message'
import FlashMessage from 'react-native-flash-message'

import { ButtonLg } from 'components/core'
import { InputEmail } from 'components/forms'
import { Form, Forms, Title } from './styles'

const ForgotPasswordForm: React.FC = () => {
	const handleLogin = () => {
		showMessage({
			message: 'Que bom te ver de novo, Cid! Seja muito bem-vindo(a) de volta.',
			type: 'success',
			style: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
		})
	}

	return (
		<Form>
			<FlashMessage position="top" />
			<Title>Recuperar a senha</Title>

			<Forms>
				<InputEmail value="" onChangeText={undefined} />
			</Forms>
			<ButtonLg onPress={handleLogin}>Enviar link de recuperação</ButtonLg>
		</Form>
	)
}

export default ForgotPasswordForm
