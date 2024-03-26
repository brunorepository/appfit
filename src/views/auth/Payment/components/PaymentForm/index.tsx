import React, { useState } from 'react' // Importando useState

import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonLg, ButtonOutlinedLg } from 'components/core'
import { propsStack } from 'routes/models/stack-models'
import { EUserTypeProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import ReturnInputs from './components/ReturnInputs'
import { Form, ButtonGroup, CreditCard, Label, BoldText, Col, Row } from './styles'

type PaymentFormProps = {
	isLoading: boolean
	handleLogin: () => void
}

const PaymentForm: React.FC<PaymentFormProps> = ({ isLoading, handleLogin }) => {
	// Estado para controlar qual botão está selecionado
	const [selected] = useState('student') // 'student' ou 'personal'

	const [data, setData] = useState({
		cardNumber: {
			formated: '',
			value: '',
		},
		cardName: '',
		cardDate: {
			formated: '',
			value: '',
		},
		cardCvv: '',
	})

	const navigation = useNavigation<propsStack>()

	const returnUserType = () => {
		if (selected === 'student') {
			return EUserTypeProps.Student
		}

		return EUserTypeProps.Personal
	}

	return (
		<Form>
			<CreditCard>
				<Col>
					<Label>Títular do cartão:</Label>
					<BoldText>Bruno Da Silva Freitas</BoldText>
				</Col>
				<Col>
					<Label>Número do cartão:</Label>
					<BoldText>3123 1231 2312 3123</BoldText>
				</Col>
				<Row>
					<Col>
						<Label>Validade:</Label>
						<BoldText>12/30</BoldText>
					</Col>
					<Col>
						<Label>CVC:</Label>
						<BoldText>321</BoldText>
					</Col>
					<CardIcon name="integrated-circuit-chip" size={40} color="#ccff00" />
				</Row>
			</CreditCard>
			<ReturnInputs setData={setData} data={data} errors={{}} refPayCard={{}} onSubmit={() => null} />
			<ButtonGroup>
				<ButtonLg isLoading={isLoading} onPress={handleLogin}>
					Criar aplicativo
				</ButtonLg>
				{selected === 'personal' && (
					<ButtonOutlinedLg onPress={() => navigation.navigate('CreateAccount', { type: returnUserType() })}>
						Criar uma conta
					</ButtonOutlinedLg>
				)}
			</ButtonGroup>
		</Form>
	)
}

export default PaymentForm
