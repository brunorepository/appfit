import React, { useState } from 'react' // Importando useState
import { Alert, TouchableOpacity } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import Chalkboard from 'react-native-vector-icons/FontAwesome5'
import User from 'react-native-vector-icons/FontAwesome5'

import { ButtonLg } from 'components/core'
import { InputEmail, InputPassword } from 'components/forms'
import { propsStack } from 'routes/models/stack-models'
import {
	CreateAccount,
	ForgotPassword,
	Form,
	Forms,
	Title,
	UserButton,
	UserText,
	UserType,
} from 'views/auth/Login/components/LoginForm/styles'
import { useNavigation } from '@react-navigation/native'

type LoginFormProps = {
	isLoading: boolean
	handleLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isLoading, handleLogin }) => {
	// Estado para controlar qual botão está selecionado
	const [selected, setSelected] = useState('student') // 'student' ou 'teacher'

	const navigation = useNavigation<propsStack>()

	return (
		<Form>
			<FlashMessage position="top" />
			<Title allowFontScaling={false}>Entrar</Title>
			<UserType>
				<UserButton
					activeOpacity={0.8}
					isSelected={selected === 'student'}
					onPress={() => setSelected('student')}
				>
					<User name="user-alt" color="#CCFF00" size={25} />
					<UserText allowFontScaling={false}>Aluno(a)</UserText>
				</UserButton>
				<UserButton
					activeOpacity={0.8}
					isSelected={selected === 'teacher'}
					onPress={() => setSelected('teacher')}
				>
					<Chalkboard name="chalkboard-teacher" color="#CCFF00" size={25} />
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
				onPress={
					selected === 'student'
						? () => Alert.alert('Em desenvolvimento... tente acessar como Personal')
						: () => navigation.navigate('CreateAccount')
				}
			>
				<CreateAccount allowFontScaling={false}>Criar uma conta</CreateAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default LoginForm
