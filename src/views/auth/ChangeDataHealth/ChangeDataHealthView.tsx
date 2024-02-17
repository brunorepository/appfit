import React from 'react'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { EHealthProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import ChangeDataHealthForm from './components/ChangeDataHealthForm'
import { Container } from './styles'

interface ChangeDataHealthViewProps {
	route: {
		params: {
			editingType: EHealthProps
		}
	}
}

const health = [
	{ questionText: 'É diabético?', options: [{ value: 'Sim' }, { value: 'Não' }] },
	{ questionText: 'Tem hipertensão?', options: [{ value: 'Sim' }, { value: 'Não' }] },
	{ questionText: 'Possui alguma doença cardíaca?', options: [{ value: 'Sim' }, { value: 'Não' }] },
	{
		questionText: 'Sofre de alguma doença respiratória crônica (ex: asma, DPOC)?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{ questionText: 'Tem histórico de câncer?', options: [{ value: 'Sim' }, { value: 'Não' }] },
	{ questionText: 'Já teve algum tipo de AVC?', options: [{ value: 'Sim' }, { value: 'Não' }] },
]

const surgeries = [
	{
		questionText: 'Você já realizou alguma cirurgia cardíaca?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já passou por uma cirurgia ortopédica?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já teve uma cirurgia gastrointestinal?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já realizou algum procedimento cirúrgico urológico?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já passou por uma cirurgia ginecológica?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já realizou cirurgia plástica?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já passou por cirurgia de catarata ou outro procedimento oftalmológico?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já realizou algum procedimento cirúrgico no sistema nervoso (neurocirurgia)?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já teve uma cirurgia otorrinolaringológica (ENT)?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
]
const medicines = [
	{
		questionText: 'Você faz uso de algum medicamento prescrito regularmente?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText:
			'Você utiliza algum medicamento sem prescrição, como analgésicos ou anti-inflamatórios, de forma regular?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você faz uso de suplementos alimentares ou vitaminas?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Houve alguma mudança nos seus medicamentos nos últimos três meses?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já teve alguma reação adversa ou alergia a algum medicamento?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você segue as instruções de dosagem dos medicamentos corretamente?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem dificuldades para lembrar de tomar seus medicamentos?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você utiliza algum aplicativo ou sistema para ajudar no gerenciamento dos seus medicamentos?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
]

const allergies = [
	{
		questionText: 'Você tem alguma alergia conhecida?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você é alérgico a algum medicamento?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem alergias alimentares?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você possui alergias a picadas de insetos?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem alguma alergia a substâncias ambientais (pólen, poeira, mofo, pelos de animais, etc.)?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já teve alguma reação alérgica grave que exigiu atendimento médico de emergência?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText:
			'Você faz uso de algum tratamento específico para alergias, como medicamentos antialérgicos ou imunoterapia?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já realizou testes alérgicos para identificar suas alergias?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
]

const vaccines = [
	{
		questionText: 'Você está com o seu calendário de vacinação em dia?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tomou a vacina contra a gripe neste ano?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você foi vacinado contra a COVID-19?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você tem alguma vacinação pendente ou recomendada que ainda não realizou?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você já teve alguma reação adversa a alguma vacina?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você possui algum registro ou cartão de vacinação atualizado?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText:
			'Você tem alguma dúvida ou preocupação sobre vacinas que gostaria de discutir com um profissional de saúde?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
	{
		questionText: 'Você está ciente da importância da vacinação para a prevenção de doenças infecciosas?',
		options: [{ value: 'Sim' }, { value: 'Não' }],
	},
]

const ChangeDataHealthView: React.FC<ChangeDataHealthViewProps> = ({ route }) => {
	const { editingType } = route.params

	const navigation = useNavigation<propsStack>()

	const titleWarnings = {
		[EHealthProps.Health]: {
			titleContainer: `Histórico de doenças`,
			titleWarning:
				'As informações de doenças anteriores são cruciais para um diagnóstico preciso e tratamento adequado.',
		},
		[EHealthProps.Surgeries]: {
			titleContainer: `Histórico de cirurgias`,
			titleWarning:
				'Conhecer seu histórico cirúrgico ajuda a evitar complicações e informar decisões futuras de tratamento.',
		},
		[EHealthProps.Medicines]: {
			titleContainer: `Histórico de medicamentos`,
			titleWarning:
				'Informações sobre medicamentos permitem monitorar a eficácia do tratamento e prevenir interações medicamentosas.',
		},
		[EHealthProps.Allergies]: {
			titleContainer: `Histórico de alergias`,
			titleWarning:
				'Detalhar alergias é vital para prevenir reações adversas durante tratamentos e prescrições médicas.',
		},
		[EHealthProps.Immunizations]: {
			titleContainer: `Histórico de imunizações`,
			titleWarning: 'O registro de vacinações ajuda a garantir a sua proteção contra doenças infecciosas.',
		},
		default: {
			titleContainer: `Histórico de doenças`,
			titleWarning: 'Mantenha seu histórico de saúde atualizado para melhorar a qualidade do cuidado recebido.',
		},
	}

	const getTitleWarning = (value: EHealthProps) => {
		// @ts-ignore
		return titleWarnings[value] || titleWarnings.default
	}

	const returnCurrentData = () => {
		switch (editingType) {
			case EHealthProps.Health:
				return health
			case EHealthProps.Surgeries:
				return surgeries
			case EHealthProps.Medicines:
				return medicines
			case EHealthProps.Allergies:
				return allergies
			case EHealthProps.Immunizations:
				return vaccines
			default:
				return health
		}
	}

	return (
		<AuthTemplate
			showBack
			title={getTitleWarning(editingType).titleContainer}
			description={getTitleWarning(editingType).titleWarning}
		>
			<Container>
				<ChangeDataHealthForm
					handleLogin={() => navigation.navigate('Health')}
					handleBack={() => null}
					isLoading={false}
					data={returnCurrentData()}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default ChangeDataHealthView
