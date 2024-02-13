import React from 'react'
import SearchBar from 'react-native-dynamic-search-bar'
import Search from 'react-native-vector-icons/MaterialIcons'
import { AppTemplate } from 'components/templates'
import { Container, Card, CardContent, CardTitle, CardDescription, FlexColumn, Exercice } from './styles'

const WorkoutsView: React.FC = () => {
	return (
		<AppTemplate>
			<Container>
				<SearchBar
					style={{
						marginTop: 12,
						marginBottom: 3,
						width: '95%',
						backgroundColor: '#323232',
						borderRadius: 20,
					}}
					allowFontScaling={false}
					textInputStyle={{
						color: '#ffff',
						fontFamily: 'OpenSans-Bold',
						fontSize: 12,
					}}
					placeholderTextColor="#ffff"
					cursorColor="#ccff00"
					placeholder="Procurar aqui..."
					// eslint-disable-next-line no-console
					onPress={() => console.log('onPress')}
					// eslint-disable-next-line no-console
					onChangeText={(text) => console.log(text)}
					searchIconComponent={<Search name="search" size={20} color="#ffff" />}
					// eslint-disable-next-line react/jsx-no-useless-fragment
					clearIconComponent={<Search name="filter-alt" size={20} color="#ffff" />}
				/>
				<Card activeOpacity={0.8}>
					<CardContent>
						<FlexColumn>
							<CardTitle allowFontScaling={false}>Cardio</CardTitle>
							<CardDescription allowFontScaling={false}>
								Cardio é atividade física que acelera seu coração e respiração, como correr ou nadar,
								melhorando coração, pulmões e queimando calorias.
							</CardDescription>
						</FlexColumn>
						<Exercice
							source={{
								uri: 'https://i.ibb.co/16wCSWp/download-removebg-preview.png',
							}}
						/>
					</CardContent>
				</Card>
				<Card activeOpacity={0.8}>
					<CardContent>
						<FlexColumn>
							<CardTitle allowFontScaling={false}>Força</CardTitle>
							<CardDescription allowFontScaling={false}>
								Treino de força é um tipo de exercício que usa resistência (pesos, elásticos, ou peso do
								corpo) para aumentar a força, a massa muscular e a resistência.
							</CardDescription>
						</FlexColumn>
						<Exercice
							source={{
								uri: 'https://i.ibb.co/rc12L2y/download-1-removebg-preview.png',
							}}
						/>
					</CardContent>
				</Card>
				<Card activeOpacity={0.8}>
					<CardContent>
						<FlexColumn>
							<CardTitle allowFontScaling={false}>Hipertrofia</CardTitle>
							<CardDescription allowFontScaling={false}>
								Hipertrofia é basicamente o processo de crescimento dos músculos. Quando você faz
								exercícios de força, como levantamento de pesos, você causa pequenas lesões nas fibras
								musculares.
							</CardDescription>
						</FlexColumn>
						<Exercice
							source={{
								uri: 'https://i.ibb.co/rkZpsTQ/images-removebg-preview.png',
							}}
						/>
					</CardContent>
				</Card>
				<Card activeOpacity={0.8}>
					<CardContent>
						<FlexColumn>
							<CardTitle allowFontScaling={false}>Treino personalizado</CardTitle>
							<CardDescription>Monte seu próprio treino com nosso criador de treinos!</CardDescription>
						</FlexColumn>
						<Exercice
							source={{
								uri: 'https://i.ibb.co/KNhprGg/images-1-removebg-preview.png',
							}}
						/>
					</CardContent>
				</Card>
			</Container>
		</AppTemplate>
	)
}

export default WorkoutsView
