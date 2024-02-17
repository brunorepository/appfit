import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Card from './components/Card' // Ajuste o caminho conforme necessário

type CardData = {
	id: number
	title: string
	description: string
}

const data: CardData[] = [
	{
		id: 1,
		title: 'Perda de Peso',
		description:
			'Um dos objetivos mais comuns. Envolve realizar atividades que maximizam a queima de calorias para ajudar a reduzir a gordura corporal.',
	},
	{
		id: 2,
		title: 'Ganho de Massa Muscular',
		description:
			'Muitas pessoas treinam com o objetivo de aumentar o tamanho e a força dos músculos. Isso geralmente envolve treinamento de resistência e musculação.',
	},
	{
		id: 3,
		title: 'Melhora da Saúde Cardiovascular',
		description:
			'Exercícios aeróbicos como correr, nadar e andar de bicicleta são ótimos para fortalecer o coração e melhorar a circulação sanguínea.',
	},
	{
		id: 4,
		title: 'Aumento da Flexibilidade',
		description:
			'Objetivo especialmente importante para quem quer melhorar a mobilidade, reduzir o risco de lesões e melhorar o desempenho em atividades físicas e no dia a dia.',
	},
	{
		id: 5,
		title: 'Melhora do Condicionamento Físico',
		description:
			'Para quem busca melhorar a resistência geral, a capacidade de realizar tarefas do cotidiano com menos fadiga e mais energia.',
	},
	{
		id: 6,
		title: 'Saúde Mental',
		description:
			' O exercício regular é conhecido por ajudar a reduzir os sintomas de depressão e ansiedade, melhorar o humor e aumentar a sensação de bem-estar geral.',
	},
	{
		id: 7,
		title: 'Aprimoramento de Habilidades Específicas',
		description:
			'Alguns treinam com o objetivo de melhorar em um esporte ou atividade específica, como corrida, natação, ciclismo, entre outros.',
	},
	{
		id: 8,
		title: 'Reabilitação e Prevenção de Lesões',
		description:
			' Para pessoas se recuperando de lesões ou que querem prevenir futuras lesões, o foco pode estar em exercícios específicos que fortalecem partes vulneráveis do corpo.',
	},
]

const CardList: React.FC = () => {
	const [selectedId, setSelectedId] = useState<number | null>(null)

	return (
		<ScrollView>
			{data.map((item) => (
				<Card
					key={item.id}
					title={item.title}
					description={item.description}
					isSelected={item.id === selectedId}
					onPress={() => setSelectedId(item.id)}
				/>
			))}
		</ScrollView>
	)
}

export default CardList
