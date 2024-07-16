import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import { AuthContext } from 'src/contexts/AuthContext'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { Box, VStack, Text, ChevronRightIcon, EditIcon } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const [authContext, setAuthContext] = useRecoilState(isAuthenticated)

	const userType: any = 'student'

	const { logout, user } = useContext(AuthContext)

	return (
		<SideBar>
			<ItemList>
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
									{user.name}
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
									{user.email}
								</Text>
							</Box>
							<ChevronRightIcon color="$white" />
						</Box>

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
										Plano contratado:
									</Text>
									<Box flexDirection="row">
										<Text fontFamily="OpenSans-Bold" color="#0ED907" mt={3}>
											Plano De Treinos Anual
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
										<Text
											fontFamily="OpenSans-Bold"
											color={user.anamnese ? '#0ED907' : '#f6ff00'}
											mt={3}
										>
											{user.anamnese
												? 'Ficha totalmente preenchida'
												: 'Ficha de anamnese incompleta'}
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
							<TouchableOpacity activeOpacity={0.8} onPress={() => logout()}>
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
