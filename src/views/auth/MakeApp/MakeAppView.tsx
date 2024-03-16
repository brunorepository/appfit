import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import MakeAppForm from './components/MakeAppForm'
import { Container } from './styles'

const MakeAppView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<AuthTemplate showBack title="Personalize seu App!" description="deixe o app com sua identidade visual">
			<Container>
				<MakeAppForm isLoading={false} handleLogin={() => navigation.navigate('Payment')} />
			</Container>
		</AuthTemplate>
	)
}

export default MakeAppView
