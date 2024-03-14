import React from 'react'
import { FormControl, Textarea, TextareaInput } from '@gluestack-ui/themed'

type InputTextAreaProps = {
	placeholder: string
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ placeholder }) => {
	return (
		<FormControl minWidth="90%" mt={6} mb={6}>
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
					allowFontScaling={false}
					color="$white"
					fontFamily="OpenSans-Medium"
					placeholder={placeholder}
					fontSize={12}
					placeholderTextColor="#CDCDCD"
				/>
			</Textarea>
		</FormControl>
	)
}

export default InputTextArea
