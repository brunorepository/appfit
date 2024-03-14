import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Duration, Card, Instructions, Start, Texts, Title, Value } from './styles'

const ProgressCard: React.FC = () => {
	return (
		<Card activeOpacity={0.8}>
			<Start>
				<AnimatedCircularProgress
					size={50}
					width={3}
					fill={33}
					tintColor="#ccff00"
					onAnimationComplete={() => null}
					backgroundColor="#585958"
				>
					{(fill) => <Value allowFontScaling={false}>{fill}%</Value>}
				</AnimatedCircularProgress>
				<Texts>
					<Instructions>parte superior do corpo</Instructions>
					<Title>1 dia de treino</Title>
				</Texts>
			</Start>
			<Duration>58 minutos</Duration>
		</Card>
	)
}

export default ProgressCard
