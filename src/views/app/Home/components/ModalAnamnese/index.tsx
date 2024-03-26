import React from 'react'
import Modal from 'react-native-modal'
import { ButtonLg } from 'components/core'
import { AnamneseIcon } from 'components/icons'
import { Center, Description, ModalContent, ModalTitle, Start } from './styles'

type ModalAnamneseProps = {
	isVisible: boolean
	onBackdropPress: () => void
}

const ModalAnamnese: React.FC<ModalAnamneseProps> = ({ isVisible, onBackdropPress }) => {
	return (
		<Modal isVisible={isVisible} onBackdropPress={onBackdropPress} collapsable={false}>
			<ModalContent>
				<Start>
					<ModalTitle>Preencha sua ficha de anamnese para acessar seus treinos</ModalTitle>
					<Description>Com as ficha de anamnese seus treinos são gerados com mais acertividade.</Description>
				</Start>
				<Center>
					<AnamneseIcon width={200} height={200} />
				</Center>
				<ButtonLg onPress={() => null}>Preencher ficha de anamnese</ButtonLg>
			</ModalContent>
		</Modal>
	)
}

export default ModalAnamnese
