import React from 'react'
import { TouchableOpacity } from 'react-native'
import { propsStack } from 'routes/models/stack-models'
import { useAuth } from 'src/contexts/AuthContext'
import { Box, VStack, Text, ChevronRightIcon, EditIcon } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const { signOut } = useAuth()

	const userType = 'personal'

	return (
		<SideBar>
			<ItemList>
				<UserPhoto
					source={{
						uri: 'https://instagram.fvix5-1.fna.fbcdn.net/v/t51.2885-19/432260391_1343324019673881_6728784793413005573_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fvix5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=CTQkZFTeV24AX-oczcm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCAJ63PwyZoIEXvqv9Z5k1TTMXeVmrQaXK52pFixqfg-w&oe=65FF646A&_nc_sid=8b3546',
					}}
					imageStyle={{
						borderRadius: 100,
						borderWidth: 1,
						borderColor: '#ccff00',
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
								<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
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
								<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
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
										Objetivo:
									</Text>
									<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
										Ganhar massa muscular
									</Text>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
						)}
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
										IMC (Índice de massa corporal):
									</Text>
									<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
										24.69
									</Text>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
						)}
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
									<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
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
										<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
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
										<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
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
							<TouchableOpacity activeOpacity={0.8} onPress={signOut}>
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
