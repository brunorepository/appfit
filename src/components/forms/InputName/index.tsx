import React from 'react'
import { FormControl, InputField, Input, InputSlot, InputIcon, InfoIcon } from '@gluestack-ui/themed'

const InputName: React.FC = () => {
	return (
		<FormControl minWidth="90%" mt={10} mb={6}>
			<Input variant="rounded" borderWidth={0} pl={12} pr={12} bgColor="#242424" size="xl">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<InfoIcon color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					allowFontScaling={false}
					borderColor="$white"
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={12}
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
