import React, { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { EHealthProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import HealthForm from './components/HealthForm'
import { Container } from './styles'

const HealthView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('PhysicalActivityHistory')
	}

	const onPressCard = () => {
		navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Health })
	}

	useEffect(() => {
		Toast.show({
			type: 'success',
			text1: 'Hello',
			text2: 'This is some something 👋',
		})
	}, [])

	return (
		<AuthTemplate
			showBack
			title="Histórico de Saúde"
			description="Informações sobre sua saúde garantem que recomendemos exercícios que você pode fazer sem riscos."
		>
			<Container>
				<HealthForm
					handleLogin={handleLogin}
					handleBack={() => navigation.navigate('Login')}
					isLoading={false}
					onPressCard={onPressCard}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default HealthView
