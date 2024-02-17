import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'

import { ButtonLg } from 'components/core'
import List from '../List'
import { LoginAccount, Form } from './styles'

type HealthFormProps = {
	handleLogin: () => void
	handleBack: () => void
	onPressCard: () => void
	isLoading: boolean
}

const HealthForm: React.FC<HealthFormProps> = ({ handleLogin, onPressCard, handleBack, isLoading }) => {
	return (
		<Form>
			<List onPress={onPressCard} />

			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default HealthForm
