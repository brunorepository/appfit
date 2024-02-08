import React from 'react'
import { AppTemplate } from 'components/templates'
import { Card, CardSm, Container, HList, Heading, HeadingWarning, Objective, Title, TitleYellow } from './styles'

interface CardItem {
	key: string
	source: { uri: string }
}

const data: CardItem[] = [
	{
		key: '1',
		source: {
			uri: 'https://sportlife.com.br/wp-content/uploads/2015/10/treino-for%C3%A7a1.jpg',
		},
	},
	{
		key: '2',
		source: {
			uri: 'https://cdn.atletis.com.br/atletis-website/base/754/55e/062/treino-de-hipertrofia.jpg',
		},
	},
	{
		key: '3',
		source: {
			uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckj3KbPc2jF-WWq9bc6xaUnvPpgpGcbRRyD5QozaH-tqnw4fj_HycAH4aJTw4MGR5oEA&usqp=CAU',
		},
	},
]

const HomeView: React.FC = () => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	// const firstLogin = false

	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#ccff00b1']}>
				<Objective>Objetivo: Perder peso</Objective>
				<Title>
					Olá <TitleYellow>Cid!</TitleYellow> Vamos lá! Tenha um treino incrível! 💪
				</Title>
				<Card
					source={{
						uri: 'https://play-lh.googleusercontent.com/HEQR1RW8WzPV56e-z6iwmjMLuAMbr19siDQAYDJgKYxBHTWSw-eMQtSG5_C5tynCHo8=w3840-h2160-rw',
					}}
				/>
				<Heading>Ganhar músculos</Heading>
				<HeadingWarning>Estes planos tem como foco o desenvolvimento de massa muscular e força.</HeadingWarning>
				<HList horizontal data={data} renderItem={({ item }) => <CardSm source={item.source} />} />
				<Heading>Perder peso</Heading>
				<HeadingWarning>Estes planos tem como foco a diminuição do peso</HeadingWarning>
				<HList horizontal data={data} renderItem={({ item }) => <CardSm source={item.source} />} />
			</Container>
		</AppTemplate>
	)
}

export default HomeView
