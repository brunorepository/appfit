import styled from 'styled-components/native'

// Container centralizado com fundo escuro
export const Container = styled.View`
	flex: 1;
	justify-content: center;
	height: 100%;
	align-items: center;
	background-color: #141416;
	padding: 20px;
`

// Título estilizado
export const Title = styled.Text`
	font-size: 24px;
	font-family: 'OpenSans-SemiBold';
	color: #0ed907;
	margin-bottom: 12px;
	align-self: flex-start;
`

// Texto do plano de dieta
export const DietText = styled.Text`
	font-size: 16px;

	font-family: 'OpenSans-Medium';
	color: #ffffff;
`
export const Loading = styled.Text`
	font-size: 14px;
	margin-top: 12px;
	color: #ffff;
	text-align: center;
	font-family: 'OpenSans-Medium';

	margin-bottom: 10px;
`
