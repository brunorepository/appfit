import React from 'react'
import { InputTextArea } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

import { InputContainer } from './styles'

const IllnessesView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<AuthTemplate title="" titleYellow="" warning="">
			<InputContainer>
				<InputTextArea placeholder="Insira abaixo outras doenças não especificadas no questionário anterior" />
			</InputContainer>
		</AuthTemplate>
	)
}

export default IllnessesView
