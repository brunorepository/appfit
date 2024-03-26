import React from 'react'
import {
	Banner,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
	FooterStart,
	BadgeText,
	Badge,
	HeaderStart,
	CardTitleSm,
	BannerSm,
	CardSm,
	HList,
	Heading,
} from './styles'

const data = [
	{
		key: 1,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Segunda-feira',
		diet: 'LowCarb',
	},
	{
		key: 2,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-terca.jpg',
		},
		days: 'Terça-feira',
		diet: 'HighProtein',
	},
	{
		key: 3,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-quarta.jpg',
		},
		days: 'Quarta-feira',
		diet: 'Vegan',
	},
	{
		key: 4,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-quinta.jpg',
		},
		days: 'Quinta-feira',
		diet: 'Mediterranean',
	},
	{
		key: 5,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-sexta.jpg',
		},
		days: 'Sexta-feira',
		diet: 'Paleo',
	},
	{
		key: 6,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-sabado.jpg',
		},
		days: 'Sábado',
		diet: 'Keto',
	},
	{
		key: 7,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-domingo.jpg',
		},
		days: 'Domingo',
		diet: 'Balanced',
	},
	{
		key: 8,
		source: {
			uri: 'https://image-exemplo.com/foto-treino-extra.jpg',
		},
		days: 'Dia extra para treino opcional',
		diet: 'Custom',
	},
]

const Nutrition: React.FC = () => {
	return (
		<>
			<Card activeOpacity={0.8} onPress={() => null}>
				<Banner
					source={{
						uri: 'https://s2-oglobo.glbimg.com/ybQ4-Jdk1JmS0eJe1lToaYG-bGE=/0x0:3048x2027/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/c/f/WDjb5aRBA39WHayAnjfw/bife-de-frango-coberto-com-gergelim-branco-ervilhas-tomates-brocolis-e-abobora-em-um-prato-branco.jpg',
					}}
				/>
				<CardContent>
					<HeaderStart>
						<Badge>
							<BadgeText
								fontSize={11}
								color="$black"
								fontFamily="OpenSans-Medium"
								textTransform="capitalize"
								allowFontScaling={false}
							>
								📅 Dieta de hoje
							</BadgeText>
						</Badge>
					</HeaderStart>

					<CardTitle allowFontScaling={false}>Low carb</CardTitle>

					<CardFooter>
						<FooterStart>
							<CardDescription allowFontScaling={false}>
								A dieta low carb é uma das mais populares devido a sua eficácia em ajudar as pessoas a
								perderem peso.
							</CardDescription>
						</FooterStart>
					</CardFooter>
				</CardContent>
			</Card>
			<Heading allowFontScaling={false}>Plano semanal</Heading>
			<HList
				horizontal
				data={data}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }: any) => (
					<CardSm activeOpacity={0.7} onPress={() => null}>
						<BannerSm
							source={{
								uri: 'https://739028l.ha.azioncdn.net/img/2019/10/blog/888/1/destaques-inferiores/capa-receitas-fitness-blog-moda-evangelica-fitness.jpg',
							}}
						/>
						<CardContent
							style={{
								marginTop: -140,
							}}
						>
							<HeaderStart>
								<Badge>
									<BadgeText
										fontSize={16}
										color="$black"
										fontFamily="OpenSans-Medium"
										textTransform="capitalize"
										allowFontScaling={false}
									>
										🏋️‍♀️ {item.diet}
									</BadgeText>
								</Badge>
							</HeaderStart>

							<CardTitleSm allowFontScaling={false}>{item.days} 📅</CardTitleSm>
							<CardDescription allowFontScaling={false}>3 refeições por dia</CardDescription>
						</CardContent>
					</CardSm>
				)}
			/>
		</>
	)
}

export default Nutrition
