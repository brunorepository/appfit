import React from 'react'
import { AuthTemplate } from 'components/templates'
import { useRecoilState } from 'recoil'
import { EHealthProps } from 'src/types/Types'
import selectedHealthItemsAtom from 'store/atoms/selectedHealthItems'
import ChangeDataHealthForm from './components/ChangeDataHealthForm'
import { Container } from './styles'

interface ChangeDataHealthViewProps {
	route: {
		params: {
			editingType: EHealthProps
		}
	}
}

const ChangeDataHealthView: React.FC<ChangeDataHealthViewProps> = ({ route }) => {
	const { editingType } = route.params

	const [selectedItems, setSelectedItems] = useRecoilState(selectedHealthItemsAtom)

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

	const handleConfirm = () => {
		switch (editingType) {
			case EHealthProps.Health:
				setSelectedItems([...selectedItems, editingType])
				break

			default:
				break
		}
	}

	return (
		<AuthTemplate
			showBack
			title={getTitleWarning(editingType).titleContainer}
			description={getTitleWarning(editingType).titleWarning}
		>
			<Container>
				<ChangeDataHealthForm handleLogin={handleConfirm} handleBack={() => null} isLoading={false} />
			</Container>
		</AuthTemplate>
	)
}

export default ChangeDataHealthView
