import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import PhysicalAssessmentForm from './components/PhysicalAssessmentForm'
import { Container } from './styles'

const PhysicalAssessmentView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('Nutrition')
	}

	return (
		<AuthTemplate
			showBack
			title="Avaliação Física"
			description="Esses dados são essenciais para ver seu progresso e ajustar o treino conforme necessário, garantindo resultados sustentáveis."
		>
			<Container>
				<PhysicalAssessmentForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default PhysicalAssessmentView
