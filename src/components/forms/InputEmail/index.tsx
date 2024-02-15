import React from 'react'
import { FormControl, InputField, Input, InputSlot, InputIcon, MailIcon } from '@gluestack-ui/themed'

type InputEmailProps = {
	value: string
	onChangeText: any
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChangeText }) => {
	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<MailIcon color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					type="text"
					inputMode="email"
					placeholder="Endereço de E-mail"
					pl={6}
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
