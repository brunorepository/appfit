import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { useNavigation } from '@react-navigation/native'
import GoalsForm from './components/GoalsForm'
import { Container } from './styles'

interface IGoalsViewProps {}

const GoalsView: React.FC<IGoalsViewProps> = () => {
	const navigation = useNavigation<propsStack>()
	const [isLoading] = useState<boolean>(false)
	// eslint-disable-next-line no-unused-vars
	const [authState, setAuthState] = useRecoilState(isAuthenticated)

	const handleLogin = () => {
		navigation.navigate('Health')
	}

	return (
		<AuthTemplate
			showBack
			title="Objetivos de treino"
			description="Conte-nos o que você quer alcançar para que possamos traçar o caminho mais eficaz até lá."
		>
			<Container>
				<GoalsForm
					handleLogin={handleLogin}
					handleBack={() => navigation.navigate('Login')}
					isLoading={isLoading}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default GoalsView
