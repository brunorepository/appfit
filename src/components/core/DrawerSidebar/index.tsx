import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { Box, VStack, Text, ChevronRightIcon, EditIcon } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const [authContext, setAuthContext] = useRecoilState(isAuthenticated)

	const userType: any = 'student'

	return (
		<SideBar>
			<ItemList>
				<UserPhoto
					source={{
						uri: 'https://st3.depositphotos.com/1000816/18270/i/450/depositphotos_182709340-stock-photo-successful-businessman-sitting-in-the.jpg',
					}}
					imageStyle={{
						borderRadius: 100,
						borderWidth: 1,
						borderColor: '#0ED907',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<EditIcon color="#ffff" size="md" />
				</UserPhoto>
				<Box mt={8} justifyContent="center" alignItems="center">
					<VStack space="sm">
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
							<Box flexDirection="column">
								<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
									Nome:
								</Text>
								<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
									Bruno Da Silva Freitas
								</Text>
							</Box>
							<ChevronRightIcon color="$white" />
						</Box>
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
							<Box flexDirection="column">
								<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
									Endereço de e-mail:
								</Text>
								<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
									bruno@fitpersonal.com.br
								</Text>
							</Box>
							<ChevronRightIcon color="$white" />
						</Box>

						{userType !== 'personal' && (
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
								<Box flexDirection="column">
									<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
										Seu Personal Trainer:
									</Text>
									<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
										Henrique Reis
									</Text>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
						)}
						<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('YourPlan')}>
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
								<Box flexDirection="column">
									<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
										Assinatura:
									</Text>
									<Box flexDirection="row">
										<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
											Renovação automática no cartão
										</Text>
									</Box>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('YourPlan')}>
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
								<Box flexDirection="column">
									<Text fontFamily="OpenSans-Medium" color="$white" fontSize={12}>
										Anamnese:
									</Text>
									<Box flexDirection="row">
										<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
											Ficha totalmente preenchida
										</Text>
									</Box>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
						</TouchableOpacity>

						<Box
							w="90%"
							borderRadius="$lg"
							paddingHorizontal={6}
							paddingVertical={12}
							flexDirection="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<TouchableOpacity activeOpacity={0.8} onPress={() => setAuthContext(false)}>
								<Box flexDirection="column">
									<Text fontFamily="OpenSans-Bold" color="#ff0000" mt={3}>
										Sair da conta
									</Text>
								</Box>
							</TouchableOpacity>
						</Box>
					</VStack>
				</Box>
			</ItemList>
		</SideBar>
	)
}

export default DrawerSidebar
