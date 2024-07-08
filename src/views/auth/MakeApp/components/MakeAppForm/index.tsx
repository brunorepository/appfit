import React, { useState } from 'react' // Importando useState

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonLg, ButtonOutlinedLg } from 'components/core'
import { InputAppName, InputColors } from 'components/forms'
import { propsStack } from 'routes/models/stack-models'
import { EUserTypeProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import {
	Form,
	Forms,
	ButtonGroup,
	AppPreview,
	AppHeader,
	AppName,
	ContentPreview,
	Skeleton1,
	Skeleton2,
} from './styles'

type MakeAppFormProps = {
	isLoading: boolean
	handleLogin: () => void
}

const MakeAppForm: React.FC<MakeAppFormProps> = ({ isLoading, handleLogin }) => {
	// Estado para controlar qual botão está selecionado
	const [selected, setSelected] = useState('student') // 'student' ou 'personal'

	const [appName, setAppName] = useState<string>('')

	const [selectedColor, setSelectedColor] = useState<string | null>(null)

	const handleColorSelect = (color: string) => {
		setSelectedColor(color)
		console.log('Cor selecionada:', color)
	}

	const navigation = useNavigation<propsStack>()

	const returnUserType = () => {
		if (selected === 'student') {
			return EUserTypeProps.Student
		}

		return EUserTypeProps.Personal
	}

	return (
		<Form>
			<AppPreview>
				<AppHeader>
					<MaterialCommunityIcons name="menu" color={selectedColor || '#0ED907'} size={15} style={{}} />
					<AppName>{appName || 'FitPersonal'}</AppName>
					<MaterialCommunityIcons name="bell" color={selectedColor || '#0ED907'} size={15} style={{}} />
				</AppHeader>
				<ContentPreview>
					<Skeleton1 />
					<Skeleton2 />
				</ContentPreview>
			</AppPreview>
			<Forms>
				<InputAppName value={appName} onChangeText={setAppName} />
				<InputColors onColorSelect={handleColorSelect} />
			</Forms>
			<ButtonGroup>
				<ButtonLg isLoading={isLoading} onPress={handleLogin}>
					Prosseguir
				</ButtonLg>
				{selected === 'personal' && (
					<ButtonOutlinedLg onPress={() => navigation.navigate('CreateAccount', { type: returnUserType() })}>
						Criar uma conta
					</ButtonOutlinedLg>
				)}
			</ButtonGroup>
		</Form>
	)
}

export default MakeAppForm
