import React, { useState } from 'react'
import { FormControl, InputField, Input, InputSlot, InputIcon, EyeOffIcon, EyeIcon } from '@gluestack-ui/themed'

const InputPassword: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)
	const handleState = () => {
		setShowPassword(!showPassword)
	}

	return (
		<FormControl minWidth="$80" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputField
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					placeholder="Senha"
					pl={4}
					pt={2}
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
