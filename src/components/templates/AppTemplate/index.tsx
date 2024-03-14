import React, { ReactNode, memo } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AppTemplateProps = {
	children: ReactNode
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
	return (
		<KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#141416' }}>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default memo(AppTemplate)
