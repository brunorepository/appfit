import React from 'react'
import { FormControl } from '@gluestack-ui/themed'
import { Color, Label, Row, Scrollable } from './styles'

const InputColors: React.FC = () => {
	const handleColorClick = (color: string) => {
		console.log('Cor selecionada:', color)
	}

	return (
		<FormControl minWidth="90%" mt={20} mb={6}>
			<Label>Escolha a cor do seu app!</Label>
			<Row>
				<Scrollable horizontal showsHorizontalScrollIndicator={false}>
					<Color backgroundColor="#FF0000" onClick={() => handleColorClick('#FF0000')} />
					<Color backgroundColor="#00FF00" onClick={() => handleColorClick('#00FF00')} />
					<Color backgroundColor="#0000FF" onClick={() => handleColorClick('#0000FF')} />
					<Color backgroundColor="#FFFF00" onClick={() => handleColorClick('#FFFF00')} />
					<Color backgroundColor="#00FFFF" onClick={() => handleColorClick('#00FFFF')} />
					<Color backgroundColor="#FF00FF" onClick={() => handleColorClick('#FF00FF')} />
					<Color backgroundColor="#FFFFFF" onClick={() => handleColorClick('#FFFFFF')} />
					<Color backgroundColor="#000000" onClick={() => handleColorClick('#000000')} />
				</Scrollable>
			</Row>
		</FormControl>
	)
}

export default InputColors
