import React, { useState } from 'react'
import { Text } from 'react-native'
import { AuthTemplate } from 'components/templates'

const CheckDataView: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false)

	const onPressNext = () => {
		setLoading(!loading)
	}

	return (
		<AuthTemplate
			isLoading={loading}
			title="Formulário de"
			titleYellow="anamnese"
			warning="Toque nos botões abaixo para conferir e/ou alterar as informações preenchidas"
			yellowButtonText="Finalizar o cadastro"
			onPressYellowButton={onPressNext}
			onPressYellowText={() => null}
			footerText="Já tem uma conta?"
			footerYellowText="Acesse aqui"
		>
			<Text>teste 321...</Text>
		</AuthTemplate>
	)
}

export default CheckDataView
