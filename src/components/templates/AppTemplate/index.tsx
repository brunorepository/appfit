import React, { ReactNode, memo } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AppTemplateProps = {
	children: ReactNode
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
	return (
		<KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#1c1c1e' }}>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default memo(AppTemplate)
