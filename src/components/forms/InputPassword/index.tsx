import React, { useState } from 'react'
import {
	FormControl,
	InputField,
	Input,
	InputIcon,
	EyeOffIcon,
	EyeIcon,
	InputSlot,
	CalendarDaysIcon,
} from '@gluestack-ui/themed'

const InputPassword: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)
	const handleState = () => {
		setShowPassword(!showPassword)
	}

	return (
		<FormControl minWidth="90%" mt={10} mb={6}>
			<Input variant="rounded" borderWidth={0} pl={12} pr={12} bgColor="#242424" size="xl">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<CalendarDaysIcon color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					allowFontScaling={false}
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={12}
					placeholder="Data de nascimento"
					placeholderTextColor="#CDCDCD"
					pl={6}
					type={showPassword ? 'text' : 'password'}
					color="$white"
				/>
			</Input>
		</FormControl>
	)
}

export default InputPassword
