import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FormControl, InputField, Input, InputSlot, InputIcon } from '@gluestack-ui/themed'

type InputAppNameProps = {
	value: string
	// eslint-disable-next-line no-unused-vars
	onChangeText: ((text: string) => void) | undefined
}

const InputAppName: React.FC<InputAppNameProps> = ({ value, onChangeText }) => {
	return (
		<FormControl minWidth="90%" mt={10} mb={6}>
			<Input variant="rounded" borderWidth={0} pl={12} pr={12} bgColor="#242424" size="xl">
				<InputSlot>
					<InputIcon size="md" color="$amber800">
						<AntDesign name="mobile1" size={15} color="#ffff" />
					</InputIcon>
				</InputSlot>
				<InputField
					allowFontScaling={false}
					borderColor="$white"
					value={value}
					onChangeText={onChangeText}
					fontFamily="OpenSans-Regular"
					size="lg"
					fontSize={12}
					type="text"
					inputMode="text"
					placeholder="Ex: Personal Henrique, ou Personal Ana"
					pl={6}
					placeholderTextColor="#CDCDCD"
					color="$white"
				/>
			</Input>
		</FormControl>
	)
}

export default InputAppName
