import React from 'react'
import { ButtonLg } from 'components/core'
import { InputEmail, InputPassword } from 'components/forms'
import { CreateAccount, Form, Info } from 'views/auth/Login/components/LoginForm/styles'
import { Tab, Text, TabView } from '@rneui/themed'
import { Title } from './styles'

const LoginForm: React.FC = () => {
	const [index, setIndex] = React.useState(0)

	return (
		<Form>
			<Title>Acessar o FitPersonal:</Title>
			<Info>Escolha o tipo de usuário que está acessando</Info>
			<Tab
				value={index}
				onChange={(e) => setIndex(e)}
				style={{}}
				buttonStyle={{
					backgroundColor: '#323232',
					marginLeft: 10,
					marginRight: 20,
				}}
				indicatorStyle={{
					backgroundColor: '#CCFF00',
					height: 1,
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center',
					marginLeft: 10,
				}}
				variant="default"
			>
				<Tab.Item
					title="Aluno(a)"
					titleStyle={{
						marginTop: 3,
						marginBottom: 3,
						fontSize: 12,
						fontFamily: 'OpenSans-SemiBold',
						color: '#ffff',
					}}
					icon={{
						name: 'user',
						type: 'font-awesome',
						color: '#CCFF00',
					}}
				/>
				<Tab.Item
					title="Personal Trainer"
					titleStyle={{
						marginTop: 3,
						marginBottom: 3,
						fontSize: 12,
						fontFamily: 'OpenSans-SemiBold',
						color: '#ffff',
					}}
					icon={{ name: 'weight-lifter', type: 'material-community', color: '#CCFF00' }}
				/>
			</Tab>

			<TabView value={index} onChange={setIndex} animationType="timing">
				<TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
					<Text>Aluno</Text>
				</TabView.Item>
				<TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
					<Text>Aluno</Text>
				</TabView.Item>
			</TabView>
			<InputEmail value="" onChangeText={undefined} />
			<InputPassword />
			<ButtonLg onPress={() => null} />
			<CreateAccount>Criar uma conta</CreateAccount>
		</Form>
	)
}

export default LoginForm
