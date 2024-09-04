import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Alert, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import User from 'react-native-vector-icons/MaterialIcons'
import { ButtonLg } from 'components/core'
import { CheckedIcon } from 'components/icons'
import { AppTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import axiosInstance from 'src/adapters/services/api'
import { useAuth } from 'src/contexts/AuthContext'
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { Container, Label, Input, UserPhoto } from './styles'

const genderOptions = [
	{ label: 'Masculino', value: 'masculino' },
	{ label: 'Feminino', value: 'feminino' },
	{ label: 'Outro', value: 'Outro' },
]

const experienceOptions = [
	{ label: 'Iniciante', value: 'iniciante' },
	{ label: 'Intermediário', value: 'intermediário' },
	{ label: 'Avançado', value: 'avançado' },
]

const daysPerWeekOptions = [
	{ label: '1 vez por semana', value: '1' },
	{ label: '2 vezes por semana', value: '2' },
	{ label: '3 vezes por semana', value: '3' },
	{ label: '4 vezes por semana', value: '4' },
	{ label: '5 vezes por semana', value: '5' },
	{ label: '6 vezes por semana', value: '6' },
	{ label: '7 vezes por semana', value: '7' },
]

const mainGoalOptions = [
	{ label: 'Ganhar massa muscular', value: 'gain_mass' },
	{ label: 'Perder peso', value: 'lose_weight' },
	{ label: 'Melhorar condicionamento físico', value: 'improve_fitness' },
]

const dietOptions = [
	{ label: 'Sim', value: 'Sim' },
	{ label: 'Não', value: 'Não' },
]

const sleepQualityOptions = [
	{ label: 'Ruim', value: 'ruim' },
	{ label: 'Regular', value: 'regular' },
	{ label: 'Boa', value: 'boa' },
]

const AnamneseView = () => {
	const { user, setAnamneseCompleted } = useAuth() // Obtém o contexto do usuário autenticado
	const [loading, setLoading] = useState(false) // Estado de loading para busca de dados
	const [submitting, setSubmitting] = useState(false) // Estado de loading para submissão
	const [imageUri, setImageUri] = useState<string>('')

	const navigation = useNavigation<propsStack>()

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			full_name: user.full_name,
			userPhoto: imageUri,
			age: '',
			gender: '',
			trainingLevel: '',
			trainingDaysPerWeek: '',
			mainGoal: '',
			profession: '',
			workingHours: '',
			usesErgogenics: '',
			injuryHistory: '',
			discomfortDuringExercise: '',
			takesMedication: '',
			availableTime: '',
			weight: '',
			height: '',
			followsDiet: '',
			sleepQuality: '',
		},
	})

	// Função para submissão do formulário
	// Função para submissão do formulário
	const onSubmit = async (data: any) => {
		setSubmitting(true) // Ativa o estado de submissão (loading)
		try {
			const updateData = {
				full_name: user.full_name || '',
				haveAnamnese: true,
				userPhoto: imageUri || '',
				age: data.age ? parseInt(data.age, 10) : undefined,
				gender: data.gender || undefined,
				height: data.height ? parseFloat(data.height) : undefined,
				weight: data.weight ? parseFloat(data.weight) : undefined,
				trainingLevel: data.trainingLevel || undefined,
				profession: data.profession || undefined,
				workingHours: data.workingHours ? parseInt(data.workingHours, 10) : undefined,
				trainingDaysPerWeek: data.trainingDaysPerWeek ? parseInt(data.trainingDaysPerWeek, 10) : undefined,
				availableTime: data.availableTime || undefined,
				mainGoal: data.mainGoal || undefined,
				injuryHistory: data.injuryHistory || undefined,
				discomfortDuringExercise: data.discomfortDuringExercise || undefined,
				followsDiet: data.followsDiet === 'Sim',
				usesErgogenics: data.usesErgogenics === 'Sim',
				trainingDuration: data.trainingDuration || undefined,
				takesMedication: data.takesMedication || undefined,
				sleepQuality: data.sleepQuality || undefined,
			}

			const response = await axiosInstance.put(`/buyer/anamnese/${user._id}`, updateData)

			if (response.status === 200) {
				Alert.alert('Sucesso', 'Anamnese atualizada com sucesso!')
				navigation.navigate('Home')
				// Resetando o formulário para manter os dados enviados
				reset(data)

				await setAnamneseCompleted() // Marca como completo no contexto
			}
		} catch (error) {
			Alert.alert('Erro ao atualizar a anamnese:', JSON.stringify(error.response?.data) || error.message)
		} finally {
			setSubmitting(false) // Desativa o estado de submissão
		}
	}

	// Função para buscar dados da anamnese
	useEffect(() => {
		const fetchAnamnese = async () => {
			setLoading(true) // Ativa o loading
			try {
				const response = await axiosInstance.get(`/buyer/anamnese/${user._id}`)
				if (response.status === 200) {
					const anamneseData = response.data.anamnese

					// Mapeando os dados da anamnese para os campos esperados no formulário
					const formattedData = {
						userPhoto: anamneseData.userPhoto || '',
						age: anamneseData.age?.toString() || '',
						gender: anamneseData.gender || '',
						trainingLevel: anamneseData.trainingLevel || '',
						trainingDaysPerWeek: anamneseData.trainingDaysPerWeek?.toString() || '',
						mainGoal: anamneseData.mainGoal || '',
						profession: anamneseData.profession || '',
						workingHours: anamneseData.workingHours?.toString() || '',
						usesErgogenics: anamneseData.usesErgogenics ? 'Sim' : 'Não',
						injuryHistory: anamneseData.injuryHistory || '',
						discomfortDuringExercise: anamneseData.discomfortDuringExercise || '',
						takesMedication: anamneseData.takesMedication || '',
						availableTime: anamneseData.availableTime || '',
						weight: anamneseData.weight?.toString() || '',
						height: anamneseData.height?.toString() || '',
						followsDiet: anamneseData.followsDiet ? 'Sim' : 'Não',
						sleepQuality: anamneseData.sleepQuality || '',
					}

					// Aplicando os dados no formulário com o reset
					reset(formattedData)
					setImageUri(formattedData.userPhoto)
					console.log(formattedData) // Verifique os dados no console para depuração
				}
			} catch (error) {
				console.error('Erro ao buscar dados da anamnese', error)
			} finally {
				setLoading(false) // Desativa o loading
			}
		}

		fetchAnamnese()
		// eslint-disable-next-line no-underscore-dangle
	}, [user._id, reset])

	const openGallery = async () => {
		await launchImageLibrary({
			mediaType: 'photo',
			quality: 0.1,
			includeBase64: true,
		}).then((response) => setImageUri(response.assets[0].base64))
	}

	return (
		<AppTemplate>
			{loading ? (
				<ActivityIndicator size="large" color="#00ff00" /> // Spinner para o estado de loading
			) : (
				<Container>
					<Controller
						control={control}
						name="userPhoto"
						render={({ fieldState: { error } }) => (
							<>
								{/* Foto do usuário */}
								<TouchableOpacity onPress={openGallery} activeOpacity={0.8}>
									<UserPhoto
										source={{
											uri: imageUri ? `data:image/jpeg;base64,${imageUri}` : '', // Renderiza base64 se disponível
										}}
										imageStyle={{
											borderRadius: 100,
											borderWidth: 1,
											borderColor: '#00ff00',
										}}
									>
										{!imageUri && <User name="add-a-photo" size={40} color="#0ed907" />}
									</UserPhoto>
								</TouchableOpacity>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Idade */}
					<Label>Idade</Label>
					<Controller
						control={control}
						name="age"
						rules={{ required: 'Idade é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Digite sua idade atual"
									value={value}
									keyboardType="number-pad"
									onChangeText={onChange}
									maxLength={3}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Sexo */}
					<Label>Sexo</Label>
					<Controller
						control={control}
						name="gender"
						rules={{ required: 'Seu sexo é obrigatório' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{genderOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Experiência com treinos */}
					<Label>Qual a sua experiência com treinos?</Label>
					<Controller
						control={control}
						name="trainingLevel"
						rules={{ required: 'Experiência com treinos é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{experienceOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Frequência de treinos */}
					<Label>Quantas vezes pretende treinar na semana?</Label>
					<Controller
						control={control}
						name="trainingDaysPerWeek"
						rules={{ required: 'Frequência de treinos é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{daysPerWeekOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Objetivo principal */}
					<Label>Qual o seu objetivo com treinos?</Label>
					<Controller
						control={control}
						name="mainGoal"
						rules={{ required: 'Objetivo com treinos é obrigatório' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{mainGoalOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Faz dieta */}
					<Label>Faz dieta?</Label>
					<Controller
						control={control}
						name="followsDiet"
						rules={{ required: 'Dieta é obrigatório' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{dietOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Qualidade do sono */}
					<Label>Qualidade do sono?</Label>
					<Controller
						control={control}
						name="sleepQuality"
						rules={{ required: 'Qualidade do sono é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<RadioGroup ml={20} alignSelf="flex-start" value={value} onChange={onChange}>
									{sleepQualityOptions.map((option) => (
										<Radio
											key={option.value}
											value={option.value}
											size="md"
											isInvalid={!!error}
											marginVertical={4}
										>
											<RadioIndicator borderColor="#0ED907">
												<RadioIcon as={CheckedIcon} />
											</RadioIndicator>
											<RadioLabel color="$white" fontFamily="OpenSans-SemiBold" ml={4}>
												{option.label}
											</RadioLabel>
										</Radio>
									))}
								</RadioGroup>

								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Profissão */}
					<Label>Qual a sua profissão?</Label>
					<Controller
						control={control}
						name="profession"
						rules={{ required: 'Profissão é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Digite a sua profissão Ex: Odontologista"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Horas trabalhadas */}
					<Label>Quantas horas por dia você trabalha?</Label>
					<Controller
						control={control}
						name="workingHours"
						rules={{ required: 'Número de horas trabalhadas é obrigatório' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Quantas horas por dia você trabalha?"
									value={value}
									keyboardType="number-pad"
									onChangeText={onChange}
									maxLength={2}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Uso de ergogênicos */}
					<Label>Você faz uso de ergogênicos (anabolizantes esterioides)?</Label>
					<Controller
						control={control}
						name="usesErgogenics"
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Digite aqui se faz uso de ergogênicos"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Histórico de lesões */}
					<Label>Você já teve alguma lesão?</Label>
					<Controller
						control={control}
						name="injuryHistory"
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Descreva seu histórico de lesões"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Desconforto durante exercícios */}
					<Label>Sente algum desconforto ao realizar esforço?</Label>
					<Controller
						control={control}
						name="discomfortDuringExercise"
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Ex: Dor no joelho esquerdo"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Medicamentos */}
					<Label>Você toma algum medicamento?</Label>
					<Controller
						control={control}
						name="takesMedication"
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Informe os medicamento que você toma"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Tempo disponível para treino */}
					<Label>Tempo disponível para treino e aeróbico:</Label>
					<Controller
						control={control}
						name="availableTime"
						rules={{ required: 'Informe seu tempo disponível' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Ex: 1:30"
									value={value}
									onChangeText={onChange}
									placeholderTextColor="#ffff"
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Peso */}
					<Label>Seu peso (em kg):</Label>
					<Controller
						control={control}
						name="weight"
						rules={{ required: 'Peso é obrigatório' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Ex: 64kg"
									value={value}
									keyboardType="number-pad"
									onChangeText={onChange}
									placeholderTextColor="#ffff"
									maxLength={4}
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					{/* Altura */}
					<Label>Sua altura (em cm):</Label>
					<Controller
						control={control}
						name="height"
						rules={{ required: 'Altura é obrigatória' }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									placeholder="Ex: 174cm"
									value={value}
									keyboardType="number-pad"
									onChangeText={onChange}
									placeholderTextColor="#ffff"
									maxLength={3}
								/>
								{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
							</>
						)}
					/>

					<ButtonLg onPress={handleSubmit(onSubmit)} disabled={submitting}>
						{submitting ? <ActivityIndicator size="small" color="#fff" /> : 'Enviar Anamnese'}
					</ButtonLg>
				</Container>
			)}
		</AppTemplate>
	)
}

export default AnamneseView
