import React from 'react'
import SearchBar from 'react-native-dynamic-search-bar'
import Search from 'react-native-vector-icons/MaterialIcons'
import { AppTemplate } from 'components/templates'
import { Container } from './styles'

const WorkoutsView: React.FC = () => {
	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#ccff00b1']}>
				<SearchBar
					style={{
						marginTop: 14,
						width: '100%',
						backgroundColor: '#585958',
					}}
					textInputStyle={{
						color: '#ffff',
						fontFamily: 'OpenSans-Medium',
					}}
					placeholderTextColor="#ffff"
					placeholder="Procurar aqui..."
					// eslint-disable-next-line no-console
					onPress={() => console.log('onPress')}
					// eslint-disable-next-line no-console
					onChangeText={(text) => console.log(text)}
					searchIconComponent={<Search name="search" size={20} color="#ffff" />}
					// eslint-disable-next-line react/jsx-no-useless-fragment
					clearIconComponent={<></>}
				/>
			</Container>
		</AppTemplate>
	)
}

export default WorkoutsView
