import React, { useState } from 'react'
import { Input as Inputing } from './styles'

type InputProps = {
	placeholder: string
}

const InputNascimentDate: React.FC<InputProps> = ({ placeholder }) => {
	const [value, setValue] = useState('') // Estado para armazenar o valor do input

	return (
		<Inputing
			type="datetime"
			options={{
				format: 'DD/MM/YYYY',
			}}
			allowFontScaling={false}
			placeholder={placeholder || 'Data de nascimento'}
			placeholderTextColor="#CDCDCD"
			value={value}
			onChangeText={(text: React.SetStateAction<string>) => setValue(text)}
			style={{}}
		/>
	)
}

export default InputNascimentDate
