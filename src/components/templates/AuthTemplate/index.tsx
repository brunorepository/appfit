import React, { ReactNode } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AuthTemplateProps = {
	children: ReactNode
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
	return (
		<KeyboardAwareScrollView
			style={{
				backgroundColor: '#1C1C1E',
			}}
		>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default AuthTemplate
