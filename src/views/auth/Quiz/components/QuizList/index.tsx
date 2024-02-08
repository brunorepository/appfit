import React, { useState } from 'react'
import {
	CheckIcon,
	Checkbox,
	CheckboxGroup,
	CheckboxIcon,
	CheckboxIndicator,
	CheckboxLabel,
	HStack,
} from '@gluestack-ui/themed'

const QuizList = () => {
	const [values, setValues] = useState(['Illustration'])
	return (
		<CheckboxGroup
			value={values}
			onChange={(keys) => {
				setValues(keys)
			}}
		>
			<HStack space="2xl">
				<Checkbox value="Illustration">
					<CheckboxIndicator mr="$1">
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel>Illustration</CheckboxLabel>
				</Checkbox>
				<Checkbox value="Animation">
					<CheckboxIndicator mr="$1">
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel>Animation</CheckboxLabel>
				</Checkbox>
				<Checkbox value="Typography">
					<CheckboxIndicator mr="$1">
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel>Typography</CheckboxLabel>
				</Checkbox>
			</HStack>
		</CheckboxGroup>
	)
}

export default QuizList
