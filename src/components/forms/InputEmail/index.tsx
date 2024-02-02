import React from 'react'
import { FormControl, InputField, Input } from '@gluestack-ui/themed'

type InputEmailProps = {
	value: string
	onChangeText: any
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChangeText }) => {
	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputField
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					type="text"
					inputMode="email"
					placeholder="E-mail"
					pl={4}
					pt={2}
					color="$white"
					placeholderTextColor="#CDCDCD"
					value={value}
					onChange={onChangeText}
				/>
			</Input>
		</FormControl>
	)
}

export default InputEmail
