import React from 'react'
import { Modal, Text, TouchableOpacity } from 'react-native'
import { ModalBackground, ModalContainer, ButtonContainer, ButtonText, ModalContent, ModalTitle } from './styles' // Estilos personalizados

interface ResultModalProps {
	onClose: () => void
	onViewReport: () => void // Função para navegar até a tela de relatório
}

const ResultModal: React.FC<ResultModalProps> = ({ onClose, onViewReport }) => {
	return (
		<Modal visible transparent animationType="slide">
			<ModalBackground>
				<ModalContainer>
					<ModalContent>
						<ModalTitle>🎉 Parabéns! 🎉</ModalTitle>
						<Text
							style={{
								fontFamily: 'OpenSans-SemiBold',
								fontSize: 16,
								textAlign: 'center',
								marginBottom: 20,
								color: '#ffff',
							}}
						>
							Você finalizou o treino com sucesso!
						</Text>

						<ButtonContainer>
							<TouchableOpacity activeOpacity={0.8} onPress={onViewReport} style={{ marginBottom: 10 }}>
								<ButtonText>Ver Relatório</ButtonText>
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={0.8} onPress={onClose}>
								<ButtonText>Fechar</ButtonText>
							</TouchableOpacity>
						</ButtonContainer>
					</ModalContent>
				</ModalContainer>
			</ModalBackground>
		</Modal>
	)
}

export default ResultModal
