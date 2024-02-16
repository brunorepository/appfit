import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import AvailableEquipmentForm from './components/AvailableEquipmentForm'
import { Container } from './styles'

const AvailableEquipmentView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {}

	return (
		<AuthTemplate
			showBack
			title="Equipamentos Disponíveis"
			description="Com essa informação, personalizamos seus treinos com o que você tem à mão, seja em casa ou na academia."
		>
			<Container>
				<AvailableEquipmentForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default AvailableEquipmentView
