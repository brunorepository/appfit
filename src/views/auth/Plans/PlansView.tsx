import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import PlansForm from './components/PlansForm'
import { Container } from './styles'

const PlansView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {}

	return (
		<AuthTemplate
			showBack
			title="Assinatura mensal"
			description="Conheça um pouco mais seu instrutor e explore seu plano de treinos personalizado."
		>
			<Container>
				<PlansForm handleLogin={handleLogin} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default PlansView
