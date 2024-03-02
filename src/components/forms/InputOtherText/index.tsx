import React from 'react'
import { FormControl, Textarea, TextareaInput } from '@gluestack-ui/themed'

type InputTextAreaProps = {
	placeholder: string
}

const InputOtherText: React.FC<InputTextAreaProps> = ({ placeholder }) => {
	return (
		<FormControl width="100%" mt={6} mb={6}>
			<Textarea
				w="100%"
				borderColor="$white"
				borderWidth={0.5}
				size="md"
				isReadOnly={false}
				isInvalid={false}
				isDisabled={false}
				h="$24"
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

export default InputOtherText
