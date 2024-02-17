import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import List from '../List'
import { LoginAccount, Form, Forms } from './styles'

type AvailabilityFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const AvailabilityForm: React.FC<AvailabilityFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<List />
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

export default AvailabilityForm
