import React, { memo, useCallback, useMemo, useRef } from 'react'
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input, InputField, InputSlot } from '@gluestack-ui/themed'
import { InputFlexColumn, Form } from './styles'

const FormatCardHolderName = (value: string) =>
	value
		.replace(/[^a-zA-Z\s]/g, '')
		.substring(0, 26)
		.toUpperCase()

interface IInputsDataProps {
	cardNumber: {
		formated: string
		value: string
	}
	cardName: string
	cardDate: {
		formated: string
		value: string
	}
	cardCvv: string
}

interface IReturnInputsProps {
	setData: React.Dispatch<React.SetStateAction<IInputsDataProps>>
	data: IInputsDataProps
	errors: {
		[key: string]: string
	}
	refPayCard: React.RefObject<{
		// eslint-disable-next-line no-unused-vars
		flipCard: (value: boolean) => void
	}>
	onSubmit: () => void
}

const BORDER_COLOR = { borderColor: '#ffff00' }

const ReturnInputs = ({ setData, data, errors, refPayCard, onSubmit }: IReturnInputsProps) => {
	const refInputs = useRef([useRef(null), useRef(null), useRef(null), useRef(null)])

	const handleFlip = useCallback(
		(value: boolean) => {
			refPayCard.current?.flipCard(value)
		},
		[refPayCard]
	)

	const CONFIG_INPUTS = useMemo(
		() => [
			{
				id: 1,
				label: 'Nome do titular:',
				icon: 'account',
				placeholder: 'Nome do titular do cartão',
				value: data.cardName,
				onChangeText: (text: string) => {
					setData((prev) => ({ ...prev, cardName: FormatCardHolderName(text) }))
				},
				error: 'cardName' in errors,
				accessibilityLabel: 'Nome do titular',
				keyboardType: 'default' as KeyboardTypeOptions,
				ref: refInputs.current[0],
				// @ts-ignore
				onSubmitEditing: () => refInputs.current[1].current?.focus(),
				returnKeyType: 'next' as ReturnKeyTypeOptions,
				onFocus: () => {
					handleFlip(false)
				},
			},
			{
				id: 2,
				label: 'Número do cartão:',
				icon: 'credit-card',
				placeholder: '0000 0000 0000 0000',
				value: data.cardNumber.formated,
				// eslint-disable-next-line no-unused-vars
				onChangeText: (text: string) => {
					setData({
						...data,
					})
					// @ts-ignore
				},
				error: 'cardNumber' in errors,
				accessibilityLabel: 'Número do cartão',
				keyboardType: 'decimal-pad' as KeyboardTypeOptions,
				ref: refInputs.current[1],
				// @ts-ignore
				onSubmitEditing: () => refInputs.current[2].current?.focus(),
				returnKeyType: 'next' as ReturnKeyTypeOptions,
				onFocus: () => {
					handleFlip(false)
				},
			},
			{
				id: 3,
				label: 'Data de expiração:',
				icon: 'credit-card-clock',
				placeholder: 'DD/MM',
				value: data.cardDate.formated,
				onChangeText: () => {
					setData({
						...data,
					})
				},
				error: 'cardDate' in errors,
				accessibilityLabel: 'Data de expiração',
				keyboardType: 'decimal-pad' as KeyboardTypeOptions,
				ref: refInputs.current[2],
				// @ts-ignore
				onSubmitEditing: () => refInputs.current[3].current?.focus(),
				returnKeyType: 'next' as ReturnKeyTypeOptions,
				onFocus: () => {
					handleFlip(false)
				},
			},
			{
				id: 4,
				label: 'Código de segurança:',
				icon: 'credit-card-lock',
				placeholder: '000',
				value: data.cardCvv,
				onChangeText: () => {
					setData({
						...data,
					})
				},
				error: 'cardCvv' in errors,
				accessibilityLabel: 'Código de segurança',
				keyboardType: 'decimal-pad' as KeyboardTypeOptions,
				ref: refInputs.current[3],
				// @ts-ignore
				onSubmitEditing: () => {
					onSubmit()
					handleFlip(false)
				},
				returnKeyType: 'next' as ReturnKeyTypeOptions,
				onFocus: () => {
					handleFlip(true)
				},
			},
		],
		[data, errors, setData, handleFlip, onSubmit]
	)

	return (
		<Form>
			{CONFIG_INPUTS.map((input) => (
				<InputFlexColumn key={input.id}>
					<Input
						variant="rounded"
						size="lg"
						isDisabled={false}
						isReadOnly={false}
						$focus={{ borderColor: '#ffff' }}
						$invalid={{ borderBottomColor: '#ffff' }}
						isInvalid={input.error}
						$invalid-borderColor="#ffff"
					>
						<InputField
							fontFamily="OpenSans-Medium"
							// @ts-ignore
							ref={input.ref}
							placeholder={input.placeholder}
							placeholderTextColor="#CDCDCD"
							keyboardType={input.keyboardType}
							bgColor="#242424"
							color="#CDCDCD"
							pl={12}
							fontSize={14}
							$invalid={BORDER_COLOR}
							value={input.value}
							onChangeText={input.onChangeText}
							accessibilityLabel={input.accessibilityLabel}
							onSubmitEditing={input.onSubmitEditing}
							returnKeyType={input.returnKeyType}
							onFocus={input.onFocus}
						/>
						<InputSlot pr={12} bgColor="#242424">
							<MaterialIcons name={input.icon} color="#979997" size={20} />
						</InputSlot>
					</Input>
				</InputFlexColumn>
			))}
		</Form>
	)
}

export default memo(ReturnInputs)
