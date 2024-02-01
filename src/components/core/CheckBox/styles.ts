import styled from 'styled-components/native'

export const Circle = styled.View`
	width: 24px;
	height: 24px;
	background-color: ${(props: { active: boolean }) => (props.active ? '#CCFF00' : '#2D2C2C')};
	border: ${(props: { active: boolean }) => (props.active ? 'none' : 'solid 1px #cdcdcd')};
	border-radius: 30px;
	align-items: center;
	justify-content: center;
`
