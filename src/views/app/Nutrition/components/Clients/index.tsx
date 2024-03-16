import React from 'react'
import { faker } from '@faker-js/faker'
import { Card, Column, Email, Start, Status, StatusRed, UserName, UserPhoto } from './styles'

type ClientsProps = {
	status?: 'active' | 'inactive'
}

const Clients: React.FC<ClientsProps> = ({ status }) => {
	return (
		<Card activeOpacity={0.7}>
			<Start>
				<UserPhoto
					source={{
						uri: faker.image.urlPicsumPhotos(),
					}}
				/>
				<Column>
					<UserName>{faker.person.firstName()}</UserName>
					<Email>{faker.internet.exampleEmail()}</Email>
				</Column>
			</Start>
			{status === 'active' ? <Status>Pago</Status> : <StatusRed>Não pago</StatusRed>}
		</Card>
	)
}

export default Clients
