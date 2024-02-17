import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import LifeHabitsForm from './components/LifeHabitsForm'
import { Container } from './styles'

const lifestyleQuestions = [
	{
		questionText: 'Você pratica atividades físicas regularmente?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você considera sua alimentação saudável e balanceada?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você fuma ou usa produtos de tabaco?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você consome bebidas alcoólicas?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem um sono de qualidade e suficiente?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você costuma se sentir estressado(a) ou ansioso(a)?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você realiza check-ups médicos regulares?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você passa tempo ao ar livre e se expõe à luz natural frequentemente?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem hobbies ou atividades de lazer que te dão prazer?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você mantém uma vida social ativa?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
]

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
				<LifeHabitsForm
					handleLogin={handleLogin}
					handleBack={() => null}
					isLoading={false}
					data={lifestyleQuestions}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default LifeHabitsView
