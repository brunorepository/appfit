import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import LottieView from 'lottie-react-native'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { useNavigation } from '@react-navigation/native'
import CreateAccountForm from './components/CreateAccountForm'
import { Container } from './styles'

const CreateAccountView: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const [isLoading, setLoading] = useState<boolean>(false)
	const [authState, setAuthState] = useRecoilState(isAuthenticated)

	const handleLogin = () => {
		setLoading(true)
		setTimeout(() => {
			setAuthState(true)
		}, 1500)
	}

	return (
		<AuthTemplate
			showBack
			title="Cadastro Personal Trainer"
			description="Insira as informações abaixo para se cadastrar"
		>
			<Container>
				<CreateAccountForm
					handleLogin={handleLogin}
					handleBack={() => navigation.navigate('Login')}
					isLoading={isLoading}
				/>
				<LottieView source={require('src/adapters/assets/animations/animation.json')} />
			</Container>
		</AuthTemplate>
	)
}

export default CreateAccountView
