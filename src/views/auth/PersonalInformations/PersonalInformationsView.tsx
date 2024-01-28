import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Back from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonLg } from 'components/core'
import { Input } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../../adapters/constants'

import {
	Container,
	CreateAccount,
	CreateAccountYellow,
	Footer,
	Header,
	InputContainer,
	Logo,
	TextRow,
	Title,
	TitleYellow,
} from './styles'

const PersonalInformationsView: React.FC = () => {
	const navigation = useNavigation()

	return (
		<AuthTemplate>
			<Container>
				<Header source={Images.HEADER_BACKGROUND}>
					<TouchableOpacity
						style={{
							alignSelf: 'flex-start',
							marginLeft: 14,
							paddingTop: 12,
						}}
						activeOpacity={0.8}
						onPress={() => navigation.goBack()}
					>
						<Back name="chevron-left" size={30} color="#ffff" />
					</TouchableOpacity>
					<Logo source={Images.LOGO} />
				</Header>
				<Title>
					Seja bem vindo(a) ao <TitleYellow>HFit!</TitleYellow>
				</Title>
				<InputContainer>
					<Input placeholder="Ex: João Costa Moreira" />
					<Input placeholder="E-mail" />
					<Input placeholder="Sexo" />
					<Input placeholder="Data de nascimento" />
				</InputContainer>
				<Footer>
					<ButtonLg onPress={() => navigation.navigate('Quiz')}>Continuar</ButtonLg>

					<TextRow>
						<CreateAccount>Já tem uma conta?</CreateAccount>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('PersonalInformations')
							}}
						>
							<CreateAccountYellow>Entre</CreateAccountYellow>
						</TouchableOpacity>
					</TextRow>
				</Footer>
			</Container>
		</AuthTemplate>
	)
}

export default PersonalInformationsView
