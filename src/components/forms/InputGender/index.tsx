import React from 'react'
import Gender from 'react-native-vector-icons/MaterialCommunityIcons'
import {
	FormControl,
	SelectContent,
	Select,
	SelectTrigger,
	SelectIcon,
	SelectPortal,
	SelectInput,
	Icon,
	SelectBackdrop,
	SelectDragIndicatorWrapper,
	SelectItem,
	SelectDragIndicator,
	InputIcon,
	ChevronDownIcon,
} from '@gluestack-ui/themed'

const InputGender: React.FC = () => {
	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Select>
				<SelectTrigger variant="underlined">
					<Gender name="gender-male-female" color="#ffff" size={20} />
					<SelectInput
						fontFamily="OpenSans-Regular"
						fontSize={16}
						inputMode="email"
						placeholder="Sexo"
						pl={6}
						color="#ffff"
						placeholderTextColor="#CDCDCD"
					/>
					<SelectIcon>
						<Icon />
					</SelectIcon>
					<InputIcon as={ChevronDownIcon} color="#CCFF00" />
				</SelectTrigger>
				<SelectPortal>
					<SelectBackdrop />
					<SelectContent>
						<SelectDragIndicatorWrapper>
							<SelectDragIndicator />
						</SelectDragIndicatorWrapper>
						<SelectItem label="Masculino" value="male" />
						<SelectItem label="Feminino" value="female" />
						<SelectItem label="Outros" value="other" />
					</SelectContent>
				</SelectPortal>
			</Select>
		</FormControl>
	)
}

export default InputGender
