import React from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import LoginForm from './components/LoginForm'
import { Container } from './styles'

const LoginView: React.FC = () => {
	return (
		<AuthTemplate>
			<Container>
				<LoginForm />
			</Container>
		</AuthTemplate>
	)
}

export default LoginView
