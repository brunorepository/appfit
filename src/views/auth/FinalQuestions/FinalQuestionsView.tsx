import React from 'react'
import { Text } from 'react-native'
import { AuthTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

const FinalQuestionsView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressNext = () => {
		navigation.navigate('CheckData')
	}

	return (
		<AuthTemplate
			title="Formulário de"
			titleYellow="anamnese"
			warning="Preencha as informações abaixo para continuarmos"
			yellowButtonText="Continuar"
			onPressYellowButton={onPressNext}
			onPressYellowText={() => null}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<Text>teste 123...</Text>
		</AuthTemplate>
	)
}

export default FinalQuestionsView
