import React from 'react'
import { Box, VStack, Text, ChevronRightIcon, EditIcon, Badge } from '@gluestack-ui/themed'
import { SideBar, ItemList, UserPhoto } from './styles'

const DrawerSidebar: React.FC = () => {
	return (
		<SideBar>
			<ItemList>
				<UserPhoto
					source={{
						uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/429453679_1507495569827600_635534441797010168_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=WZrbKZlubiAAX84cXyX&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBoYG751WSpzyMw2C0CtaVxSjCYF9_XOCJoM-iU2c5SzQ&oe=65DE01D7&_nc_sid=10d13b',
					}}
					imageStyle={{
						borderRadius: 100,
						borderWidth: 1,
						borderColor: '#ccff00',
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
