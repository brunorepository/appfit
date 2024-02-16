import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import NutritionForm from './components/NutritionForm'
import { Container } from './styles'

const NutritionView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('LifeHabits')
	}

	return (
		<AuthTemplate
			showBack
			title="Nutrição"
			description="Sua alimentação é tão importante quanto seu treino. Compartilhe sua dieta e suplementação para maximizarmos seus resultados."
		>
			<Container>
				<NutritionForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default NutritionView
