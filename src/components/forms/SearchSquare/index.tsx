import React from 'react'
import { FormControl, InputField, Input } from '@gluestack-ui/themed'

const SearchSquare: React.FC = () => {
	return (
		<FormControl minWidth="90%" mt={16} mb={16}>
			<Input
				borderRadius={10}
				variant="outline"
				size="xl"
				borderColor="#CDCDCD"
				alignItems="center"
				justifyContent="center"
			>
				<InputField
					allowFontScaling={false}
					borderColor="$white"
					fontFamily="OpenSans-SemiBold"
					size="lg"
					fontSize={12}
					type="text"
					inputMode="text"
					placeholder="Insira aqui o nome do medicamento"
					pl={12}
					pt={12}
					placeholderTextColor="#CDCDCD"
					color="$white"
				/>
			</Input>
		</FormControl>
	)
}

export default SearchSquare
