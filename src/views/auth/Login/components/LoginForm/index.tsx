import React, { useState } from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'
import FlashMessage from 'react-native-flash-message'

import { ButtonLg } from 'components/core'
import { InputEmail, InputPassword } from 'components/forms'
import { propsStack } from 'routes/models/stack-models'
import { Images } from 'src/adapters/constants'
import { EUserTypeProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import { CreateAccount, ForgotPassword, Form, Forms, UserButton, UserText, UserType, Icon } from './styles'

type LoginFormProps = {
	isLoading: boolean
	handleLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isLoading, handleLogin }) => {
	// Estado para controlar qual botão está selecionado
	const [selected, setSelected] = useState('student') // 'student' ou 'teacher'

	const navigation = useNavigation<propsStack>()

	const returnUserType = () => {
		if (selected === 'student') {
			return EUserTypeProps.Student
		}

		return EUserTypeProps.Personal
	}

	return (
		<Form>
			<FlashMessage position="top" />

			<UserType>
				<UserButton
					activeOpacity={0.8}
					isSelected={selected === 'student'}
					onPress={() => setSelected('student')}
				>
					<Icon source={Images.STUDENT} />
					<UserText allowFontScaling={false}>Aluno(a)</UserText>
				</UserButton>
				<UserButton
					activeOpacity={0.8}
					isSelected={selected === 'teacher'}
					onPress={() => setSelected('teacher')}
				>
					<Icon source={Images.PERSONAL} />
					<UserText allowFontScaling={false}>Personal</UserText>
				</UserButton>
			</UserType>
			<Forms>
				<InputEmail value="" onChangeText={undefined} />
				<InputPassword />
				<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ForgotPassword')}>
					<ForgotPassword allowFontScaling={false}>Recuperar senha</ForgotPassword>
				</TouchableOpacity>
			</Forms>
			<ButtonLg isLoading={isLoading} onPress={handleLogin} />
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => navigation.navigate('CreateAccount', { type: returnUserType() })}
			>
				<CreateAccount allowFontScaling={false}>Criar uma conta</CreateAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default LoginForm
