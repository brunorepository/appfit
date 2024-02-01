import React from 'react'
import { FormControl, Textarea, TextareaInput } from '@gluestack-ui/themed'

const InputTextArea: React.FC = () => {
	return (
		<FormControl mt={24} mb={16}>
			<Textarea
				borderColor="$white"
				borderWidth={0.5}
				size="md"
				isReadOnly={false}
				isInvalid={false}
				isDisabled={false}
				h="$64"
			>
				<TextareaInput
					color="$white"
					fontFamily="OpenSans-Medium"
					placeholder="Liste quaisquer condições médicas que você teve no passado ou tem atualmente"
					fontSize={14}
					placeholderTextColor="#999898"
				/>
			</Textarea>
		</FormControl>
	)
}

export default InputTextArea
