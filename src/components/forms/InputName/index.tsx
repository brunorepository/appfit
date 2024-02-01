import React from 'react'
import { FormControl, InputField, Input } from '@gluestack-ui/themed'

const InputName: React.FC = () => {
	return (
		<FormControl minWidth="$80" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputField
					borderColor="$white"
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					type="text"
					inputMode="text"
					placeholder="Ex: João Moreira Costa"
					pl={4}
					pt={2}
					placeholderTextColor="#999898"
					color="$white"
				/>
			</Input>
		</FormControl>
	)
}

export default InputName
