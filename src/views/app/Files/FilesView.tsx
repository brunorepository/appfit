import React from 'react'
import { AppTemplate } from 'components/templates'
import {
	Banner,
	Card,
	CardContent,
	Link,
	CardFooter,
	CardTitle,
	Container,
	FooterStart,
	BadgeText,
	Badge,
	HeaderStart,
} from './styles'

const FilesView: React.FC = () => {
	return (
		<AppTemplate>
			<Container>
				<Card activeOpacity={0.8} onPress={() => null}>
					<Banner
						source={{
							uri: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/07/01/2022680877-reposicao-corporal-1.jpg',
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
									📂 Artigo científico
								</BadgeText>
							</Badge>
						</HeaderStart>

						<CardTitle allowFontScaling={false}>Como o corpo gera músculos?</CardTitle>

						<CardFooter>
							<FooterStart>
								<Link allowFontScaling={false}>
									https://cursodegestaoelideranca.paginas.ufsc.br/files/2016/03/Como-elaborar-um-Artigo-Científico.pdf
								</Link>
							</FooterStart>
						</CardFooter>
					</CardContent>
				</Card>
				<Card activeOpacity={0.8} onPress={() => null}>
					<Banner
						source={{
							uri: 'https://endocrinologiaesportiva.com.br/wp-content/uploads/2020/05/Hora-da-atividade-fi%CC%81sica.jpg',
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
									📂 Vídeo explicativo
								</BadgeText>
							</Badge>
						</HeaderStart>

						<CardTitle allowFontScaling={false}>Qual é o melhor horário para treinar?</CardTitle>

						<CardFooter>
							<FooterStart>
								<Link allowFontScaling={false}>https://youtu.be/xF625mwRsIU?si=HTl0YD0B9rE5qD0H</Link>
							</FooterStart>
						</CardFooter>
					</CardContent>
				</Card>
			</Container>
		</AppTemplate>
	)
}

export default FilesView
