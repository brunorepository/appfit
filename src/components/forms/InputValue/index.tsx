import React from 'react'
import { FormControl, InputField, Input, InputSlot, InputIcon, MailIcon, AddIcon } from '@gluestack-ui/themed'

type InputValueProps = {
	value: string
	onChangeText: any
}

const InputValue: React.FC<InputValueProps> = ({ value, onChangeText }) => {
	return (
		<FormControl minWidth="90%" mt={28} mb={6}>
			<Input variant="rounded" borderWidth={0} pl={12} pr={14} bgColor="#242424" size="xl">
				<InputField
					allowFontScaling={false}
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={12}
					type="text"
					inputMode="numeric"
					placeholder="Inserir minutos"
					pl={6}
					color="$white"
					placeholderTextColor="#CDCDCD"
					value={value}
					onChange={onChangeText}
				/>
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<AddIcon color="#CCFF00" />
					</InputIcon>
				</InputSlot>
			</Input>
		</FormControl>
	)
}

export default InputValue
