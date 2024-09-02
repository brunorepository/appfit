import React, { useContext } from 'react'
import { Alert, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' // Importação do ícone
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import { AuthContext } from 'src/contexts/AuthContext'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { Box, VStack, Text, ChevronRightIcon } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const [authContext, setAuthContext] = useRecoilState(isAuthenticated)
	const { logout, user } = useContext(AuthContext)

	const returnFrequency = (frequency: string) => {
		if (frequency === 'quarterly') {
			return 'Plano trimestral'
		}
		if (frequency === 'semestral') {
			return 'Plano Semestral'
		}
		if (frequency === 'annually') {
			return 'Plano Anual'
		}
		return 'Não definido'
	}

	// Array de dados com os detalhes do usuário, agora com um campo de ícone
	const userInfo = [
		{
			label: 'Nome:',
			value: user.full_name,
			icon: 'user',
		},
		{
			label: 'Endereço de e-mail:',
			value: user.email,
			icon: 'envelope',
		},
		{
			label: 'Plano contratado:',
			value: returnFrequency(user.subscriptionFrequency),
			icon: 'credit-card',
		},
		{
			label: 'Anamnese:',
			value: user.haveAnamnese ? 'Ficha totalmente preenchida' : 'Ficha de anamnese incompleta',
			color: user.haveAnamnese ? '#0ED907' : '#f6ff00',
			onPress: () => navigation.navigate('Anamnese'),
			icon: 'clipboard',
		},
		{
			label: 'Falar com o suporte:',
			value: 'Suporte pelo whatsapp',
			icon: 'whatsapp',
			onPress: () =>
				Linking.openURL('https://wa.me/31995988003?text=Olá,%20vim%20pelo%20suporte%20do%20app%20HFIT.'),
		},
	]

	return (
		<SideBar>
			<ItemList>
				<Box mt={8} justifyContent="center" alignItems="center">
					<VStack space="sm">
						{/* <UserPhoto
							source={{
								uri: `data:image/jpeg;base64,${user}`,
							}}
						/> */}
						{userInfo.map((item, index) => (
							<TouchableOpacity key={index} activeOpacity={0.8} onPress={item.onPress || undefined}>
								<Box
									w="90%"
									borderRadius="$lg"
									paddingHorizontal={6}
									borderBottomWidth={0.5}
									borderColor="#585958"
									paddingVertical={12}
									flexDirection="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Box flexDirection="row" alignItems="center">
										<Icon name={item.icon} size={14} color="#0ED907" style={{ marginRight: 10 }} />
										<Box flexDirection="column">
											<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
												{item.label}
											</Text>
											<Text
												fontFamily="OpenSans-Bold"
												color={item.color || '#0ED907'}
												mt={3}
												fontSize={12}
											>
												{item.value}
											</Text>
										</Box>
									</Box>
									<ChevronRightIcon color="$white" />
								</Box>
							</TouchableOpacity>
						))}

						<TouchableOpacity activeOpacity={0.8} onPress={logout}>
							<Box
								w="90%"
								borderRadius="$lg"
								paddingHorizontal={6}
								paddingVertical={12}
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text fontFamily="OpenSans-Bold" color="#ff0000" mt={3}>
									Sair da conta
								</Text>
							</Box>
						</TouchableOpacity>
					</VStack>
				</Box>
			</ItemList>
		</SideBar>
	)
}

export default DrawerSidebar
