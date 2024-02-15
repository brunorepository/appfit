import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import { EUserTypeProps } from 'src/types/Types'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { useNavigation } from '@react-navigation/native'
import CreateAccountForm from './components/CreateAccountForm'
import { Container } from './styles'

interface ICreateAccountViewProps {
	route: {
		params: {
			type: EUserTypeProps
		}
	}
}

const CreateAccountView: React.FC<ICreateAccountViewProps> = ({ route }) => {
	const navigation = useNavigation<propsStack>()
	const [isLoading] = useState<boolean>(false)
	// eslint-disable-next-line no-unused-vars
	const [authState, setAuthState] = useRecoilState(isAuthenticated)

	const { type } = route.params

	const handleLogin = () => {
		navigation.navigate('Goals')
	}

	return (
		<AuthTemplate
			showBack
			title={`Cadastro do ${type === 'student' ? 'Aluno(a)' : 'Personal Trainer'}`}
			description="Precisamos desses dados para personalizar seu treino e manter contato."
		>
			<Container>
				<CreateAccountForm
					handleLogin={handleLogin}
					handleBack={() => navigation.navigate('Login')}
					isLoading={isLoading}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default CreateAccountView
