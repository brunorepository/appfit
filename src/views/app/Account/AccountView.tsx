import React from 'react'
import { Button } from 'react-native'
import { AppTemplate } from 'components/templates'
import { useRecoilState } from 'recoil'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { Box, VStack, Text, ChevronRightIcon } from '@gluestack-ui/themed'
import { Container, ItemList, UserName, UserPhoto } from './styles'

const AccountView: React.FC = () => {
	const [authState, setAuthState] = useRecoilState(isAuthenticated)

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return (
		<AppTemplate>
			<Container>
				<ItemList>
					<UserPhoto
						source={{
							uri: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/360284187_628747575881805_6206994618273828932_n.jpg?ccb=11-4&oh=01_AdRH91AzlEIo3XpUT1kGcVm9sx1nUL4jUunaU-dMtTdhEA&oe=65CFAEEC&_nc_sid=e6ed6c&_nc_cat=108',
						}}
					/>
					<UserName>Cid Malta Corrêa</UserName>
					<Box mt={12} justifyContent="center" alignItems="center">
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
										Cid Malta Corrêa
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
										cidmalta@fitpersonal.com.br
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
									<Text fontFamily="OpenSans-Bold" color="#CCFF00" mt={3}>
										Nenhuma fatura em aberto
									</Text>
								</Box>
								<ChevronRightIcon color="$white" />
							</Box>
							<Box
								w="90%"
								borderRadius="$lg"
								paddingHorizontal={6}
								borderColor="#585958"
								paddingVertical={12}
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Box flexDirection="column">
									<Button title="Sair do app" color="#ff0000" onPress={() => setAuthState(false)} />
								</Box>
							</Box>
						</VStack>
					</Box>
				</ItemList>
			</Container>
		</AppTemplate>
	)
}

export default AccountView
