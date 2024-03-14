import React from 'react'
import { TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { ButtonLg } from 'components/core'
import { CloseIcon } from '@gluestack-ui/themed'
import { CardArea, CopyLink, Description, Link, ModalContent, ModalTitle, Start } from './styles'

type ModalLinkProps = {
	isVisible: boolean
	onBackdropPress: () => void
}

const ModalLink: React.FC<ModalLinkProps> = ({ isVisible, onBackdropPress }) => {
	return (
		<Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
			<ModalContent>
				<Start>
					<TouchableOpacity activeOpacity={0.8} onPress={onBackdropPress}>
						<CloseIcon color="$white" size="xl" />
					</TouchableOpacity>
					<ModalTitle>Divulgue esse link ou coloque em seu Instagram</ModalTitle>
					<Description>Use esse link para facilitar o cadastro de seus alunos na plataforma</Description>
				</Start>
				<CardArea>
					<Link>https://fitpersonal.com.br/index=share?2234431</Link>
					<CopyLink>Copiar link</CopyLink>
				</CardArea>
				<ButtonLg onPress={() => null}>Compartilhar LINK</ButtonLg>
			</ModalContent>
		</Modal>
	)
}

export default ModalLink
