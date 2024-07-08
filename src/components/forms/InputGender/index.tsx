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
		<FormControl minWidth="90%" mt={10} mb={6}>
			<Select>
				<SelectTrigger variant="rounded" borderWidth={0} pl={12} pr={12} bgColor="#242424" size="xl">
					<Gender name="gender-male-female" color="#ffff" size={20} />
					<SelectInput
						allowFontScaling={false}
						fontFamily="OpenSans-Regular"
						fontSize={12}
						inputMode="email"
						placeholder="Sexo"
						pl={6}
						color="#ffff"
						placeholderTextColor="#CDCDCD"
					/>
					<SelectIcon>
						<Icon />
					</SelectIcon>
					<InputIcon as={ChevronDownIcon} color="#0ED907" />
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
