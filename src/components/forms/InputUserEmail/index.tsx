import React from 'react'
import { Input } from './styles'

type InputUserEmailProps = {
	placeholder: string
}

const InputUserEmail: React.FC<InputUserEmailProps> = ({ placeholder }) => {
	return <Input placeholder={placeholder || 'digite aqui...'} placeholderTextColor="#CDCDCD" />
}

export default InputUserEmail
