import React from 'react'
import { FormControl, InputField, Input, InputSlot, InputIcon, InfoIcon } from '@gluestack-ui/themed'

const InputName: React.FC = () => {
	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Input variant="underlined" borderColor="$white">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<InfoIcon color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					borderColor="$white"
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={16}
					type="text"
					inputMode="text"
					placeholder="Ex: João Moreira Costa"
					pl={6}
					placeholderTextColor="#CDCDCD"
					color="$white"
				/>
			</Input>
		</FormControl>
	)
}

export default InputName
