import React from 'react'
import { AuthTemplate } from 'components/templates'
import PaymentForm from './components/PaymentForm'
import { Container } from './styles'

const PaymentView: React.FC = () => {
	return (
		<AuthTemplate
			showBack
			title="Realize o pagamento!"
			description="Você está a um passo de revolucionar a sua consultoria"
		>
			<Container>
				<PaymentForm isLoading={false} handleLogin={() => null} />
			</Container>
		</AuthTemplate>
	)
}

export default PaymentView
