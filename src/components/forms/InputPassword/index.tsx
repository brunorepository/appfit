import React, { useState } from 'react'
import {
	FormControl,
	InputField,
	Input,
	InputIcon,
	EyeOffIcon,
	EyeIcon,
	InputSlot,
	LockIcon,
} from '@gluestack-ui/themed'

const InputPassword: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)
	const handleState = () => {
		setShowPassword(!showPassword)
	}

	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<LockIcon color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					placeholder="Senha"
					placeholderTextColor="#CDCDCD"
					pl={6}
					type={showPassword ? 'text' : 'password'}
					color="$white"
				/>
				<InputSlot pr="$3" onPress={handleState}>
					<InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="#CCFF00" />
				</InputSlot>
			</Input>
		</FormControl>
	)
}

export default InputPassword
