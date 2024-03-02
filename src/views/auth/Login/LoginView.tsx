/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { useRecoilState } from 'recoil'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import LoginForm from './components/LoginForm'
import { Container } from './styles'

const LoginView: React.FC = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [authState, setAuthState] = useRecoilState(isAuthenticated)

	const handleLogin = () => {
		setLoading(true)
		setTimeout(() => {
			setAuthState(true)
		}, 1500)
	}

	return (
		<AuthTemplate showBack title="" description="">
			<Container>
				<LoginForm isLoading={isLoading} handleLogin={handleLogin} />
			</Container>
		</AuthTemplate>
	)
}

export default LoginView
