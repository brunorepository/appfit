import React, { useContext, useState } from 'react'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import AuthTemplate from 'components/templates/AuthTemplate'
import { AuthContext } from 'src/contexts/AuthContext'
import LoginForm from './components/LoginForm'
import { Container } from './styles'
import { Linking } from 'react-native'

const LoginView: React.FC = () => {
	const { login } = useContext(AuthContext) // Acessa o contexto de autenticação
	const [isLoading, setLoading] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [data, setData] = useState<any>(null)

	const handleLogin = async () => {
		setLoading(true)
		try {
			const response = await axios.post('https://hfit-backend.vercel.app/user/login', {
				email: `${email.toLocaleLowerCase()}`,
			})

			if (response.data.exists) {
				const user = response.data
				setData(user)

				Toast.show({
					type: 'success',
					text1: `Bem-vindo(a), ${response.data.user.first_name}.`,
					text2: 'Seus treinos personalizados estão te esperando!',
					text1Style: {
						fontSize: 16,
						fontFamily: 'OpenSans-Bold',
					},
					text2Style: {
						fontSize: 12,
						fontFamily: 'OpenSans-SemiBold',
					},
					onShow: () => {
						login(user.user)
					},
				})
			} else {
				Toast.show({
					type: 'error',
					text1: 'E-mail não encontrado.',
					text2: 'Não encontramos nenhum usuário com esse e-mail. Fale com o suporte.',
					text1Style: {
						fontSize: 16,
						fontFamily: 'OpenSans-Bold',
					},
					text2Style: {
						fontSize: 12,
						fontFamily: 'OpenSans-SemiBold',
					},
				})
			}
		} catch (err) {
			Toast.show({
				type: 'error',
				text1: 'Erro ao tentar login.',
				text2: 'Ocorreu um erro ao tentar efetuar o login. Tente novamente.',
				text1Style: {
					fontSize: 16,
					fontFamily: 'OpenSans-Bold',
				},
				text2Style: {
					fontSize: 12,
					fontFamily: 'OpenSans-SemiBold',
				},
			})
		} finally {
			setLoading(false)
		}
	}

	console.log(data) // Para fins de depuração, mas pode ser removido posteriormente

	return (
		<AuthTemplate showBack title="" description="Insira o e-mail usado na assinatura para acessar a plataforma.">
			<Toast />
			<Container>
				<LoginForm
					isLoading={isLoading}
					handleLogin={
						email
							? handleLogin
							: () =>
									Toast.show({
										type: 'info',
										text1: 'O Campo de e-mail está vazio.',
										text1Style: {
											fontSize: 16,
											fontFamily: 'OpenSans-Bold',
										},
										text2Style: {
											fontSize: 12,
											fontFamily: 'OpenSans-SemiBold',
										},
									})
					}
					email={email}
					onChangeText={setEmail}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default LoginView
