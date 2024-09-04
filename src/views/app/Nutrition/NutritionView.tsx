import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, RefreshControl, Alert } from 'react-native'
import axiosInstance from 'src/adapters/services/api'
import { useAuth } from 'src/contexts/AuthContext'
import { Container, Title, DietText, Loading } from './styles' // Importa os estilos do arquivo separado

const NutritionView: React.FC = () => {
	const [dietPlan, setDietPlan] = useState<string>('') // Estado para armazenar o plano de dieta
	// eslint-disable-next-line no-unused-vars
	const [anamneseData, setAnamneseData] = useState<any>(null) // Estado para armazenar os dados da anamnese
	const [loading, setLoading] = useState<boolean>(false) // Estado para controlar o loading
	const [refreshing, setRefreshing] = useState<boolean>(false) // Estado para controlar o refresh
	const { user } = useAuth()

	const generateDietMessage = (anamnese: any) => {
		return `Olá ${user.full_name}, a Plataforma HFIT preparou uma prescrição de dieta personalizada para você. 
    Com base nos seus dados, sendo um(a) ${anamnese.gender.toLowerCase()}, de ${anamnese.age} anos, pesando ${anamnese.weight}kg e com altura de ${anamnese.height}cm, 
    e que treina ${anamnese.trainingDaysPerWeek} vezes por semana com o objetivo de ${anamnese.mainGoal}, aqui está o plano de dieta recomendado.
    Além disso, levamos em consideração o seu histórico de medicamentos: ${anamnese.takesMedication}.`
	}

	// Função para chamar a API do GPT-4 e obter um plano de dieta
	const fetchDietPlan = async (message: string) => {
		setLoading(true) // Começa a mostrar loading
		try {
			const response = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer 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`, // Substitua por sua chave da OpenAI
				},
				body: JSON.stringify({
					model: 'gpt-4',
					messages: [
						{
							role: 'system',
							content: 'Você é um especialista em nutrição.',
						},
						{
							role: 'user',
							content: message, // Passa a mensagem personalizada aqui
						},
					],
				}),
			})

			const data = await response.json()

			// Verificar a estrutura da resposta antes de acessar os valores
			if (data && data.choices && data.choices[0] && data.choices[0].message) {
				const plan = data.choices[0].message.content // Extrair o plano da resposta
				setDietPlan(plan) // Armazena o plano no estado
			}
		} catch (error) {
			Alert.alert('Erro ao buscar plano de dieta:', JSON.stringify(error))
		} finally {
			setLoading(false) // Termina o loading
		}
	}

	// Função para buscar dados da anamnese
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchAnamnese = async () => {
		setLoading(true) // Ativa o loading
		try {
			// eslint-disable-next-line no-underscore-dangle
			const response = await axiosInstance.get(`/buyer/anamnese/${user._id}`) // Substitua por seu user ID
			if (response.status === 200) {
				const { anamnese } = response.data

				// Mapeando os dados da anamnese
				const formattedData = {
					userPhoto: anamnese.userPhoto || '',
					age: anamnese.age?.toString() || '',
					gender: anamnese.gender || '',
					trainingLevel: anamnese.trainingLevel || '',
					trainingDaysPerWeek: anamnese.trainingDaysPerWeek?.toString() || '',
					mainGoal: anamnese.mainGoal || '',
					profession: anamnese.profession || '',
					workingHours: anamnese.workingHours?.toString() || '',
					usesErgogenics: anamnese.usesErgogenics ? 'Sim' : 'Não',
					injuryHistory: anamnese.injuryHistory || 'nenhuma',
					discomfortDuringExercise: anamnese.discomfortDuringExercise || 'nenhum',
					takesMedication: anamnese.takesMedication || '',
					availableTime: anamnese.availableTime || '',
					weight: anamnese.weight?.toString() || '',
					height: anamnese.height?.toString() || '',
					followsDiet: anamnese.followsDiet ? 'Sim' : 'Não',
					sleepQuality: anamnese.sleepQuality || '',
				}

				setAnamneseData(formattedData) // Armazena os dados no estado

				// Gera a mensagem baseada na anamnese e chama o GPT-4 para gerar a dieta
				const message = generateDietMessage(formattedData)
				await fetchDietPlan(message) // Chama a função para buscar o plano de dieta
			}
		} catch (error) {
			console.error('Erro ao buscar dados da anamnese', error)
		} finally {
			setLoading(false) // Desativa o loading
		}
	}

	// Função para tratar o refresh
	const onRefresh = async () => {
		setRefreshing(true)
		await fetchAnamnese() // Recarregar os dados da anamnese e a dieta
		setRefreshing(false)
	}

	// Chama as funções de busca quando o componente é montado
	useEffect(() => {
		fetchAnamnese()
	}, [fetchAnamnese])

	return (
		<ScrollView
			style={{
				backgroundColor: '#1c1c1e',
			}}
			refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#0ED907']} />}
		>
			<Container>
				{loading ? (
					<>
						<ActivityIndicator size="large" color="#0ED907" />
						<Loading>Estamos gerando a sua dieta</Loading>
					</>
				) : (
					<>
						<Title>Plano de Dieta</Title>
						<DietText>{dietPlan}</DietText>
					</>
				)}
			</Container>
		</ScrollView>
	)
}

export default NutritionView
