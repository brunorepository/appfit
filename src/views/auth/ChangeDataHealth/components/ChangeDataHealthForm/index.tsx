import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { CheckedIcon } from 'components/icons'
import { RadioGroup, HStack, Radio, RadioIndicator, RadioIcon, RadioLabel, Text } from '@gluestack-ui/themed'
import { LoginAccount, Form, Forms } from './styles'

type ChangeDataHealthFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
	data: any
}

const ChangeDataHealthForm: React.FC<ChangeDataHealthFormProps> = ({ data, handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<Forms persistentScrollbar>
				{data.map(
					(
						question: {
							questionText:
								| string
								| number
								| boolean
								| React.ReactElement<any, string | React.JSXElementConstructor<any>>
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| null
								| undefined
							options: any[]
						},
						index: React.Key | null | undefined
					) => (
						// eslint-disable-next-line react/no-array-index-key
						<RadioGroup key={index} ml={16} mt={6} alignSelf="flex-start">
							<Text
								maxWidth="$72"
								color="$white"
								fontFamily="OpenSans-ExtraBold"
								fontSize={14}
								mt={12}
								mb={6}
							>
								{question.questionText}
							</Text>
							<HStack space="2xl" mt={3}>
								{question.options.map((option, optionIndex) => (
									// eslint-disable-next-line react/no-array-index-key
									<Radio key={optionIndex} value={option.value}>
										<RadioIndicator mr="$2" borderColor="#CCFF00">
											<RadioIcon as={CheckedIcon} />
										</RadioIndicator>
										<RadioLabel color="$white" fontFamily="OpenSans-SemiBold">
											{option.value}
										</RadioLabel>
									</Radio>
								))}
							</HStack>
						</RadioGroup>
					)
				)}
			</Forms>
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Salvar informações
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default ChangeDataHealthForm
