import React from 'react'
import Toast from 'react-native-toast-message'
import { AppTemplate } from 'components/templates'
import { useAuth } from 'src/contexts/AuthContext'
import PaymentForm from './components/PaymentForm'
import { Container } from './styles'

const YourPlanView: React.FC = () => {
	const { signIn } = useAuth()

	return (
		<AppTemplate>
			<Toast />
			<Container>
				<PaymentForm isLoading={false} handleLogin={() => signIn('Bruno', '123')} />
			</Container>
		</AppTemplate>
	)
}

export default YourPlanView
