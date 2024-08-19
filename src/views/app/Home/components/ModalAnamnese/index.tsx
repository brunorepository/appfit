import React from 'react'
import Modal from 'react-native-modal'
import { ButtonLg } from 'components/core'
import { AnamneseIcon } from 'components/icons'
import { Center, Description, ModalContent, ModalTitle, Start } from './styles'

type ModalAnamneseProps = {
	isVisible: boolean
	onBackdropPress: () => void
	onPressLg: () => void
}

const ModalAnamnese: React.FC<ModalAnamneseProps> = ({ isVisible, onBackdropPress, onPressLg }) => {
	return (
		<Modal isVisible={isVisible} onBackdropPress={() => null} collapsable={false}>
			<ModalContent>
				<Start>
					<ModalTitle>Preencha sua ficha de anamnese para acessar seus treinos</ModalTitle>
					<Description>
						Nossa equipe vai análisar sua ficha de anamnese e preparar seu plano de treinos ainda hoje.
					</Description>
				</Start>
				<Center>
					<AnamneseIcon width={200} height={200} />
				</Center>
				<ButtonLg onPress={onPressLg}>Preencher ficha de anamnese</ButtonLg>
			</ModalContent>
		</Modal>
	)
}

export default ModalAnamnese
