import React from 'react'
import { FormControl, Textarea, TextareaInput } from '@gluestack-ui/themed'

type InputPromptProps = {
	placeholder: string
}

const InputPrompt: React.FC<InputPromptProps> = ({ placeholder }) => {
	return (
		<FormControl width="95%" mt={16} mb={6}>
			<Textarea
				w="100%"
				borderColor="$white"
				borderWidth={0.5}
				size="md"
				isReadOnly={false}
				isInvalid={false}
				isDisabled={false}
				h="$96"
			>
				<TextareaInput
					allowFontScaling={false}
					color="$white"
					fontFamily="OpenSans-Medium"
					placeholder={placeholder}
					fontSize={12}
					padding={20}
					placeholderTextColor="#CDCDCD"
				/>
			</Textarea>
		</FormControl>
	)
}

export default InputPrompt
