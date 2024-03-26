import React from 'react'
import Toast from 'react-native-toast-message'
import { AuthTemplate } from 'components/templates'
import { useAuth } from 'src/contexts/AuthContext'
import PaymentForm from './components/PaymentForm'
import { Container } from './styles'

const YourPlanView: React.FC = () => {
	const { signIn } = useAuth()

	return (
		<AuthTemplate
			showBack
			title="Realize o pagamento!"
			description="Você está a um passo de revolucionar a sua consultoria"
		>
			<Toast />
			<Container>
				<PaymentForm isLoading={false} handleLogin={() => signIn('Bruno', '123')} />
			</Container>
		</AuthTemplate>
	)
}

export default YourPlanView
