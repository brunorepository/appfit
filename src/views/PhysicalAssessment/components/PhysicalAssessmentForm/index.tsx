import React from 'react' // Importando useState
import { TouchableOpacity } from 'react-native'

import InputSpinner from 'react-native-input-spinner'
import { ButtonLg } from 'components/core'
import { LoginAccount, Form, ButtonsGroup, FlexColumn, Label, LabelText, Imc, ImcStrong } from './styles'

type PhysicalAssessmentFormProps = {
	handleLogin: () => void
	handleBack: () => void
	isLoading: boolean
}

const PhysicalAssessmentForm: React.FC<PhysicalAssessmentFormProps> = ({ handleLogin, handleBack, isLoading }) => {
	return (
		<Form>
			<ButtonsGroup>
				<FlexColumn>
					<Label>Altura:</Label>
					<LabelText>(em Centímetros)</LabelText>
					<InputSpinner
						skin="modern"
						max={250}
						textColor="#ffff"
						colorMax="#CCFF00"
						colorMin="#242424"
						color="#121212"
						fontSize={22}
						fontFamily="OpenSans-Bold"
						value={0}
						style={{
							width: '100%',
						}}
						inputStyle={{
							width: '100%',
						}}
						onChange={(num) => {
							console.log(num)
						}}
					/>
				</FlexColumn>
				<FlexColumn>
					<Label>Peso:</Label>
					<LabelText>(em KG)</LabelText>
					<InputSpinner
						skin="modern"
						max={250}
						min={2}
						step={2}
						textColor="#ffff"
						colorMax="#CCFF00"
						colorMin="#242424"
						color="#121212"
						fontSize={22}
						fontFamily="OpenSans-Bold"
						value={0}
						style={{
							width: '100%',
						}}
						inputStyle={{
							width: '100%',
						}}
						onChange={(num) => {
							console.log(num)
						}}
					/>
				</FlexColumn>
			</ButtonsGroup>
			<Imc>
				O seu <ImcStrong>IMC de 163.5 é considerado obesidade.</ImcStrong> O peso recomendado para uma pessoa da
				sua altura é 60-70kg
			</Imc>
			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Continuar
			</ButtonLg>
			<TouchableOpacity activeOpacity={0.8} onPress={handleBack}>
				<LoginAccount allowFontScaling={false}>Já tem uma conta? Entre aqui</LoginAccount>
			</TouchableOpacity>
		</Form>
	)
}

export default PhysicalAssessmentForm
