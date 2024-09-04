import React from 'react'
import { Modal, Text, TouchableOpacity, Share } from 'react-native'
import { ModalBackground, ModalContainer, ButtonContainer, ButtonText, ModalContent, ModalTitle } from './styles'

interface ResultModalProps {
	selectedDifficulty: string | null // A dificuldade selecionada é recebida como props
	onSelectDifficulty: (difficulty: string) => void // Função para selecionar a dificuldade
	onViewReport?: () => void // Função opcional para visualizar o relatório
	onClose: () => void // Função para fechar o modal
}

const ResultModal: React.FC<ResultModalProps> = ({ selectedDifficulty, onSelectDifficulty, onViewReport, onClose }) => {
	const handleShare = async () => {
		try {
			const result = await Share.share({
				message: `Acabei de finalizar meu treino! Classifiquei como: ${selectedDifficulty}`,
			})
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// Compartilhado com uma atividade específica
					console.log('Compartilhado via:', result.activityType)
				} else {
					// Compartilhado diretamente
					console.log('Compartilhado com sucesso')
				}
			} else if (result.action === Share.dismissedAction) {
				// Compartilhamento cancelado
				console.log('Compartilhamento cancelado')
			}
		} catch (error) {
			console.error('Erro ao compartilhar:', error)
		}
	}

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
						<Text
							style={{
								fontFamily: 'OpenSans-SemiBold',
								fontSize: 16,
								textAlign: 'center',
								marginBottom: 20,
								color: '#ffff',
							}}
						>
							Como você avalia o treino de hoje?
						</Text>
						<ButtonContainer>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => onSelectDifficulty('Muito Fácil 😊')}
								style={{ marginBottom: 10, backgroundColor: '#00FF00', borderRadius: 8 }}
							>
								<ButtonText>Muito Fácil 😊</ButtonText>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => onSelectDifficulty('Fácil 😀')}
								style={{ marginBottom: 10, backgroundColor: '#7FFF00', borderRadius: 8 }}
							>
								<ButtonText>Fácil 😀</ButtonText>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => onSelectDifficulty('Moderado 😐')}
								style={{ marginBottom: 10, backgroundColor: '#FFFF00', borderRadius: 8 }}
							>
								<ButtonText>Moderado 😐</ButtonText>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => onSelectDifficulty('Difícil 😫')}
								style={{ marginBottom: 10, backgroundColor: '#FF4500', borderRadius: 8 }}
							>
								<ButtonText>Difícil 😫</ButtonText>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => onSelectDifficulty('Muito Difícil 🥵')}
								style={{ backgroundColor: '#FF0000', borderRadius: 8 }}
							>
								<ButtonText>Muito Difícil 🥵</ButtonText>
							</TouchableOpacity>
						</ButtonContainer>

						{selectedDifficulty && (
							<Text
								style={{
									fontFamily: 'OpenSans-SemiBold',
									fontSize: 16,
									textAlign: 'center',
									marginTop: 20,
									color: '#ffff',
								}}
							>
								Você classificou o treino como: {selectedDifficulty}
							</Text>
						)}

						{selectedDifficulty && (
							<>
								<ButtonContainer>
									<TouchableOpacity activeOpacity={0.8} onPress={handleShare}>
										<ButtonText style={{ backgroundColor: '#00aaff', borderRadius: 8 }}>
											Compartilhar Relatório
										</ButtonText>
									</TouchableOpacity>
								</ButtonContainer>
								<ButtonContainer>
									<TouchableOpacity activeOpacity={0.8} onPress={onViewReport}>
										<ButtonText style={{ backgroundColor: '#0ed907', borderRadius: 8 }}>
											Ver Relatório
										</ButtonText>
									</TouchableOpacity>
								</ButtonContainer>
								<ButtonContainer>
									<TouchableOpacity activeOpacity={0.8} onPress={onClose}>
										<ButtonText style={{ backgroundColor: '#ffff', borderRadius: 8 }}>
											Fechar
										</ButtonText>
									</TouchableOpacity>
								</ButtonContainer>
							</>
						)}
					</ModalContent>
				</ModalContainer>
			</ModalBackground>
		</Modal>
	)
}

export default ResultModal
