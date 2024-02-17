import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import GoalsForm from './components/GoalsForm'
import { Container } from './styles'

const GoalsView: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const [isLoading] = useState<boolean>(false)

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
