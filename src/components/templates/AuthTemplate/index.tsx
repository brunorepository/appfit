import React, { ReactNode } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AuthTemplateProps = {
	children: ReactNode
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
	return (
		<KeyboardAwareScrollView
			style={{
				backgroundColor: '#1c1c1e',
			}}
		>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default AuthTemplate
