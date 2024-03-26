import React, { useState } from 'react'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { EUserTypeProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import CreateAccountForm from './components/CreateAccountForm'
import { Container } from './styles'

interface ICreateAccountViewProps {
	route: {
		params: {
			type: EUserTypeProps
		}
	}
}

const CreateAccountView: React.FC<ICreateAccountViewProps> = ({ route }) => {
	const navigation = useNavigation<propsStack>()
	const [isLoading] = useState<boolean>(false)

	const { type } = route.params

	const handleLogin = () => {
		navigation.navigate('MakeApp')
	}

	return (
		<AuthTemplate
			showBack
			title={`Cadastro do ${type === 'student' ? 'Aluno(a)' : 'Personal Trainer'}`}
			description="Precisamos desses dados para personalizar seu treino e manter contato."
		>
			<Container>
				<CreateAccountForm
					handleLogin={handleLogin}
					handleBack={() => navigation.navigate('Login')}
					isLoading={isLoading}
				/>
			</Container>
		</AuthTemplate>
	)
}

export default CreateAccountView
