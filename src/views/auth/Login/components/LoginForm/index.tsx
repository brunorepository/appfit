import React, { useState } from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'

import { ButtonLg, ButtonOutlinedLg } from 'components/core'
import { InputEmail, InputPassword } from 'components/forms'
import { propsStack } from 'routes/models/stack-models'
import { Images } from 'src/adapters/constants'
import { EUserTypeProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import { ForgotPassword, Form, Forms, UserButton, UserText, UserType, Icon, ButtonGroup } from './styles'

type LoginFormProps = {
	isLoading: boolean
	handleLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isLoading, handleLogin }) => {
	// Estado para controlar qual botão está selecionado
	const [selected, setSelected] = useState('student') // 'student' ou 'personal'

	const navigation = useNavigation<propsStack>()

	const returnUserType = () => {
		if (selected === 'student') {
			return EUserTypeProps.Student
		}

		return EUserTypeProps.Personal
	}

	return (
		<Form>
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
					isSelected={selected === 'personal'}
					onPress={() => setSelected('personal')}
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
			<ButtonGroup>
				<ButtonLg isLoading={isLoading} onPress={handleLogin} />
				{selected === 'personal' && (
					<ButtonOutlinedLg onPress={() => navigation.navigate('CreateAccount', { type: returnUserType() })}>
						Criar uma conta
					</ButtonOutlinedLg>
				)}
			</ButtonGroup>
		</Form>
	)
}

export default LoginForm
