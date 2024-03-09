import React from 'react'
import { Images } from 'src/adapters/constants'
import { Box, VStack, Text, ChevronRightIcon, EditIcon, Badge } from '@gluestack-ui/themed'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	const userType = 'personal'

	return (
		<SideBar>
			<ItemList>
				<UserPhoto
					source={{
						uri: 'https://scontent.fvix5-1.fna.fbcdn.net/v/t39.30808-6/424578484_397225366117284_4681380279233710549_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGSeTAHI9nQ_yBHNxApehnwL4UK6CGOg7cvhQroIY6Dt_mAwSaIbWvgsuTvKiITZ8SLtJ_mZ3cRZZSljUz2eYim&_nc_ohc=pMCrkBCWJAsAX-kd-Ei&_nc_ht=scontent.fvix5-1.fna&cb_e2o_trans=t&oh=00_AfCqAKL6jgGH99mXIt807UivnvE-8Dyc-fBg1oKnoNpiAQ&oe=65ED10D4',
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
									Faturas:
								</Text>
								<Box flexDirection="row">
									<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
										1 fatura em aberto
									</Text>
									<Badge borderRadius={80} ml={8} backgroundColor="#CCFF00">
										<Text fontFamily="OpenSans-Bold" color="#000000" mt={3}>
											2
										</Text>
									</Badge>
								</Box>
							</Box>
							<ChevronRightIcon color="$white" />
						</Box>
						<Box
							w="90%"
							borderRadius="$lg"
							paddingHorizontal={6}
							paddingVertical={12}
							flexDirection="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<Box flexDirection="column">
								<Text fontFamily="OpenSans-Bold" color="#ff0000" mt={3}>
									Sair da conta
								</Text>
							</Box>
						</Box>
					</VStack>
				</Box>
			</ItemList>
		</SideBar>
	)
}

export default DrawerSidebar
