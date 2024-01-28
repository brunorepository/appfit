import React from 'react'
import { Input as Inputing } from './styles'

type InputProps = {
	placeholder: string
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
	return <Inputing placeholder={placeholder || 'digite aqui...'} placeholderTextColor="#CDCDCD" />
}

export default Input
