import React from 'react'
import Users from 'react-native-vector-icons/FontAwesome6'
import Funnel from 'react-native-vector-icons/Ionicons'
import Money from 'react-native-vector-icons/MaterialIcons'

import {
	Charts,
	FlexColumn,
	GreenCircle,
	LinkTitle,
	Row,
	SalesCard,
	SalesCardSm,
	SalesPrice,
	SalesTitle,
	WhiteText,
} from './styles'

type PersonalChartsProps = {
	onPressLinkShare: () => void
}

const PersonalCharts: React.FC<PersonalChartsProps> = ({ onPressLinkShare }) => {
	return (
		<Charts>
			<Row>
				<SalesCardSm activeOpacity={0.8} onPress={onPressLinkShare}>
					<LinkTitle>Link de cadastro</LinkTitle>
					<GreenCircle>
						<Users name="link" color="#000000" size={20} />
					</GreenCircle>
				</SalesCardSm>
				<SalesCardSm>
					<LinkTitle>Página de vendas</LinkTitle>
					<GreenCircle>
						<Funnel name="funnel" color="#000000" size={20} />
					</GreenCircle>
				</SalesCardSm>
			</Row>
			<SalesCard>
				<FlexColumn>
					<SalesTitle>VENDAS</SalesTitle>
					<SalesPrice>R$ 19.356,86</SalesPrice>
				</FlexColumn>
				<GreenCircle>
					<Money name="attach-money" color="#000000" size={20} />
				</GreenCircle>
			</SalesCard>
			<SalesCard>
				<FlexColumn>
					<SalesTitle>Clientes Ativos</SalesTitle>
					<WhiteText>78</WhiteText>
				</FlexColumn>
				<GreenCircle>
					<Users name="users" color="#000000" size={20} />
				</GreenCircle>
			</SalesCard>
			<SalesCard>
				<FlexColumn>
					<SalesTitle>Ticket médio</SalesTitle>
					<SalesPrice>R$ 47,09</SalesPrice>
				</FlexColumn>
				<GreenCircle>
					<Users name="ticket" color="#000000" size={20} />
				</GreenCircle>
			</SalesCard>
			<SalesCard>
				<FlexColumn>
					<SalesTitle>Faturamento previsto</SalesTitle>
					<SalesPrice>R$ 15.324,22</SalesPrice>
				</FlexColumn>
				<GreenCircle>
					<Money name="stacked-line-chart" color="#000000" size={20} />
				</GreenCircle>
			</SalesCard>
			<SalesCard>
				<FlexColumn>
					<SalesTitle>Faturamento CONFIRMADO</SalesTitle>
					<SalesPrice>R$ 8.232,22</SalesPrice>
				</FlexColumn>
				<GreenCircle>
					<Money name="account-balance-wallet" color="#000000" size={20} />
				</GreenCircle>
			</SalesCard>
		</Charts>
	)
}

export default PersonalCharts
