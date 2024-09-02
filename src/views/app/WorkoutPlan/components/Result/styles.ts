// components/AddTrainingModalStyles.ts
import styled from 'styled-components/native'

export const ModalBackground = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.View`
	width: 300px;
	padding: 20px;
	background-color: #323232;
	border-radius: 10px;
	elevation: 5;
	shadow-opacity: 0.25;
	shadow-radius: 4px;
	shadow-offset: 0px 2px;
`

// Contêiner para o conteúdo do modal
export const ModalContent = styled.View`
	align-items: center;
	justify-content: center;
`

// Título do modal (parabéns)
export const ModalTitle = styled.Text`
	font-size: 32px;
	color: #0ed907;
	margin-bottom: 10px;
	font-family: 'OpenSans-Bold';
`

// Contêiner para os botões
export const ButtonContainer = styled.View`
	width: 100%;
	margin-top: 20px;
`

// Texto dos botões
export const ButtonText = styled.Text`
	color: #fff;
	font-size: 16px;
	background-color: #0ed907;
	padding: 12px 24px;
	border-radius: 8px;
	text-align: center;
	margin-top: 10px;
	font-family: 'OpenSans-SemiBold';
`
