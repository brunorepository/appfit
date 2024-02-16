import React from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import { Container } from './styles'

const ForgotPasswordView: React.FC = () => {
	return (
		<AuthTemplate>
			<Container>
				<ForgotPasswordForm />
			</Container>
		</AuthTemplate>
	)
}

export default ForgotPasswordView
