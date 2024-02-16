import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import AvailabilityForm from './components/AvailabilityForm'
import { Container } from './styles'

const AvailabilityView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('AvailableEquipment')
	}

	return (
		<AuthTemplate
			showBack
			title="Disponibilidade"
			description="Nos diga quando você pode treinar para criar um cronograma que se encaixe na sua vida, tornando mais fácil manter a consistência."
		>
			<Container>
				<AvailabilityForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default AvailabilityView
