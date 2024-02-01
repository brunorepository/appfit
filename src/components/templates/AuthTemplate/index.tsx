import React, { ReactNode } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Images } from '../../../adapters/constants'
import { Container, Header, Logo } from './styles'

type AuthTemplateProps = {
	children: ReactNode
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
	// const navigation = useNavigation<propsStack>()

	return (
		<KeyboardAwareScrollView>
			<Container>
				<Header
					source={Images.HEADER_BACKGROUND}
					imageStyle={{
						borderBottomRightRadius: 30,
					}}
				>
					<Logo source={Images.LOGO} />
				</Header>

				{children}
			</Container>
		</KeyboardAwareScrollView>
	)
}

export default AuthTemplate
