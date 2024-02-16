import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import LifeHabitsForm from './components/LifeHabitsForm'
import { Container } from './styles'

const LifeHabitsView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const handleLogin = () => {
		navigation.navigate('Availability')
	}

	return (
		<AuthTemplate
			showBack
			title="Hábitos de Vida"
			description="Fatores como sono e estresse impactam seu desempenho. Queremos ajustar seu plano para que ele complemente sua rotina, não a complique"
		>
			<Container>
				<LifeHabitsForm handleLogin={handleLogin} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default LifeHabitsView
