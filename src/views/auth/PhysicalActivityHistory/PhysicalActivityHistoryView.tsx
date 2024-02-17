import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import PhysicalActivityHistoryForm from './components/PhysicalActivityHistoryForm'
import { Container } from './styles'

const PhysicalActivityHistoryView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('PhysicalAssessment')
	}

	return (
		<AuthTemplate
			showBack
			title="Histórico de Atividade Física"
			description="Você já teve alguma experiência com treinos?."
		>
			<Container>
				<PhysicalActivityHistoryForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default PhysicalActivityHistoryView
