import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'

import { ButtonLg } from 'components/core'
import List from '../List'
import { LoginAccount, Form } from './styles'

type PhysicalActivityHistoryFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const PhysicalActivityHistoryForm: React.FC<PhysicalActivityHistoryFormProps> = ({
	handleLogin,
	handleBack,
	isLoading,
}) => {
	return (
		<Form>
			<List />
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default PhysicalActivityHistoryForm
