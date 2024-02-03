import React from 'react'
import { SearchSquare } from 'components/forms'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { Badge, BadgeText } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { InputContainer } from './styles'

const MedicinesView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = () => {
		navigation.navigate('Login')
	}

	const onPressNext = () => {
		navigation.navigate('Vaccines')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Insira abaixo medicamentos que você faz uso atuamente"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={onPressLogin}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<InputContainer>
				<SearchSquare />
				<Badge
					size="lg"
					borderColor="#CDCDCD"
					bgColor="#1E1E1E"
					variant="outline"
					borderRadius="$lg"
					action="success"
					pl={14}
					pr={14}
					pt={4}
					pb={4}
				>
					<BadgeText textTransform="capitalize" fontSize={12} fontFamily="OpenSans-Medium" color="#CDCDCD">
						Losartana Potássica
					</BadgeText>
				</Badge>
			</InputContainer>
		</AuthTemplate>
	)
}

export default MedicinesView
