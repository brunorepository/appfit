import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'
import FlashMessage from 'react-native-flash-message'

import { ButtonLg } from 'components/core'
import { LoginAccount, Form, Forms } from './styles'

type NutritionFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const NutritionForm: React.FC<NutritionFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<FlashMessage position="top" />

			<Forms />
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default NutritionForm
