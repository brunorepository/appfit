import React from 'react'
import { ButtonLg } from 'components/core'
import { InputPrompt } from 'components/forms'
import { AppTemplate } from 'components/templates'
import { CardDescription, Container, FooterButtonContainer, Heading, Title } from './styles'

const PromptView: React.FC = () => {
	return (
		<>
			<AppTemplate>
				<Container>
					<Heading>
						<Title>Personalizar</Title>
						<CardDescription>
							Adicione instruções para personalizar a entrega do treino para seus alunos
						</CardDescription>
					</Heading>
					<InputPrompt placeholder="Ex: Mostre essa mensagem de aniversário no último treino gerado: Feliz aniversário!" />
				</Container>
			</AppTemplate>
			<FooterButtonContainer>
				<ButtonLg onPress={() => null}>Atualizar prompt</ButtonLg>
			</FooterButtonContainer>
		</>
	)
}

export default PromptView
