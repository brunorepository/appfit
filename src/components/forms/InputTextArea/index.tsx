import React from 'react'
import { FormControl, Textarea, TextareaInput } from '@gluestack-ui/themed'

type InputTextAreaProps = {
	placeholder: string
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ placeholder }) => {
	return (
		<FormControl minWidth="90%" mt={24} mb={16}>
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
					placeholder={placeholder}
					fontSize={14}
					placeholderTextColor="#CDCDCD"
				/>
			</Textarea>
		</FormControl>
	)
}

export default InputTextArea
