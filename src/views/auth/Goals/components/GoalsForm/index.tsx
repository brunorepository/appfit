import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'

import { ButtonLg } from 'components/core'
import CardList from '../List'
import { LoginAccount, Form } from './styles'

type GoalsFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const GoalsForm: React.FC<GoalsFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<CardList />
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default GoalsForm
