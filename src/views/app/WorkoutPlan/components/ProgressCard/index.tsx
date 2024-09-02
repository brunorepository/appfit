import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Card, Start, Texts, Title, Value, Next } from './styles'

interface ProgressCardProps {
	fill: number // Progresso a ser exibido
	title: string // Dias de treino
	timeElapsed: string // Tempo decorrido no formato "MM:SS"
}

const ProgressCard: React.FC<ProgressCardProps> = ({ fill, title, timeElapsed }) => {
	return (
		<Card activeOpacity={0.8}>
			<Start>
				<AnimatedCircularProgress
					size={50}
					width={3}
					fill={fill}
					tintColor="#0ED907"
					onAnimationComplete={() => null}
					backgroundColor="#585958"
				>
					{(fillValue) => <Value allowFontScaling={false}>{Math.round(fillValue)}%</Value>}
				</AnimatedCircularProgress>
				<Texts>
					<Title>{title}</Title>
				</Texts>
			</Start>
			{/* Exibir o cronômetro */}
			<Next>{timeElapsed}</Next>
		</Card>
	)
}

export default ProgressCard
