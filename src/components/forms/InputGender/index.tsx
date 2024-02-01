import React from 'react'
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
		<FormControl minWidth="$80" mt={16} mb={16}>
			<Select>
				<SelectTrigger variant="underlined">
					<SelectInput
						fontFamily="OpenSans-Regular"
						fontSize={16}
						inputMode="email"
						placeholder="Sexo"
						pl={4}
						pt={2}
						color="#ffff"
						placeholderTextColor="#999898"
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
