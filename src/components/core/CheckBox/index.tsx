import React from 'react'
import Check from 'react-native-vector-icons/MaterialCommunityIcons'
import { Circle } from 'components/core/CheckBox/styles'

type CheckBoxProps = {
	isActive: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({ isActive }) => {
	return (
		<Circle active={isActive} activeOpacity={0.8}>
			{isActive && <Check name="check" color="#000000" size={20} />}
		</Circle>
	)
}

export default CheckBox
