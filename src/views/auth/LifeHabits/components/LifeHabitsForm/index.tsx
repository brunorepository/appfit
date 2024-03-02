import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { QuizForm } from 'components/forms'
import { LoginAccount, Form, Forms } from './styles'

type LifeHabitsFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const LifeHabitsForm: React.FC<LifeHabitsFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<Forms>
				<QuizForm
					data={[
						{
							id: 1,
							text: 'Você tem alguma doença crônica?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 2,
							text: 'Você é diabético?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 3,
							text: 'Você tem asma?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 4,
							text: 'Você pratica atividade física regularmente?',
							instructions:
								'Responda com "sim" ou "não". Consideramos regularmente como ao menos 3 vezes por semana.',
						},
						{
							id: 5,
							text: 'Você fuma?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 6,
							text: 'Você faz uso de bebidas alcoólicas?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 7,
							text: 'Você tem uma alimentação balanceada?',
							instructions:
								'Responda com "sim" ou "não". Considere se você consome frutas, verduras e legumes regularmente.',
						},
						{
							id: 8,
							text: 'Você tem histórico de câncer na família?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 9,
							text: 'Você já teve alguma fratura óssea?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 10,
							text: 'Você se expõe ao sol com frequência sem proteção solar?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 11,
							text: 'Você tem alguma alergia conhecida?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 12,
							text: 'Você já realizou alguma cirurgia?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 13,
							text: 'Você tem problemas de sono?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 14,
							text: 'Você se sente estressado frequentemente?',
							instructions: 'Responda com "sim" ou "não".',
						},
						{
							id: 15,
							text: 'Você possui alguma deficiência nutricional diagnosticada?',
							instructions: 'Responda com "sim" ou "não".',
						},
					]}
				/>
			</Forms>
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default LifeHabitsForm
