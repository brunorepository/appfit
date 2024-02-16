import React from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import { Container } from './styles'

const ForgotPasswordView: React.FC = () => {
	return (
		<AuthTemplate showBack title="Recuperar senha" description="Insira seu e-mail abaixo para recuperar sua senha">
			<Container>
				<ForgotPasswordForm />
			</Container>
		</AuthTemplate>
	)
}

export default ForgotPasswordView
