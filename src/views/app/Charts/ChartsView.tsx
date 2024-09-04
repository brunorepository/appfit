import React, { useState, useEffect } from 'react'
import { Share, RefreshControl } from 'react-native'
import { AppTemplate } from 'components/templates'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	Container,
	ReportCard,
	ReportTitle,
	ReportDetails,
	ReportItem,
	ActionButton,
	ActionButtonText,
	ListEmptyText,
	FlatListContainer,
} from './styles'

interface ReportData {
	difficulty: string
	startTime: string
	endTime: string
	exerciseCount: number
	workoutDate: string
}

const ChartsView: React.FC = () => {
	const [reports, setReports] = useState<ReportData[]>([])
	const [refreshing, setRefreshing] = useState(false)

	const fetchReports = async () => {
		try {
			const savedReports = await AsyncStorage.getItem('reports')
			if (savedReports) {
				setReports(JSON.parse(savedReports))
			} else {
				console.log('Nenhum relatório encontrado.')
			}
		} catch (error) {
			console.error('Erro ao carregar os relatórios:', error)
		}
	}

	useEffect(() => {
		fetchReports()
	}, [])

	const onRefresh = async () => {
		setRefreshing(true)
		await fetchReports()
		setRefreshing(false)
	}

	const deleteReport = async (index: number) => {
		try {
			const updatedReports = [...reports]
			updatedReports.splice(index, 1) // Remove o relatório pelo índice
			await AsyncStorage.setItem('reports', JSON.stringify(updatedReports))
			setReports(updatedReports) // Atualiza o estado com a lista atualizada
		} catch (error) {
			console.error('Erro ao deletar o relatório:', error)
		}
	}

	const handleShare = async (item: ReportData) => {
		try {
			const message = `Treino em ${new Date(item.workoutDate).toLocaleDateString()} - Dificuldade: ${item.difficulty}\nInício: ${new Date(
				item.startTime
			).toLocaleTimeString()} | Término: ${new Date(item.endTime).toLocaleTimeString()}\nExercícios executados: ${
				item.exerciseCount
			}`
			await Share.share({
				message,
			})
		} catch (error) {
			console.error('Erro ao compartilhar o relatório:', error)
		}
	}

	const renderReportItem = ({ item, index }: { item: ReportData; index: number }) => (
		<ReportCard>
			<ReportTitle>
				Treino em {new Date(item.workoutDate).toLocaleDateString()} ({item.dayOfWeek})
			</ReportTitle>
			<ReportDetails>
				<ReportItem>Dificuldade: {item.difficulty}</ReportItem>
				<ReportItem>Início: {new Date(item.startTime).toLocaleTimeString()}</ReportItem>
				<ReportItem>Término: {new Date(item.endTime).toLocaleTimeString()}</ReportItem>
				<ReportItem>Exercícios executados: {item.exerciseCount}</ReportItem>

				<ActionButton activeOpacity={0.8} onPress={() => handleShare(item)} bgColor="#0ed907">
					<ActionButtonText>Compartilhar</ActionButtonText>
				</ActionButton>

				<ActionButton activeOpacity={0.8} onPress={() => deleteReport(index)} bgColor="#FF0000">
					<ActionButtonText>Deletar</ActionButtonText>
				</ActionButton>
			</ReportDetails>
		</ReportCard>
	)

	return (
		<AppTemplate>
			<Container>
				<FlatListContainer
					data={reports}
					keyExtractor={(item, index) => index.toString()}
					renderItem={renderReportItem}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#0ED907']} />
					}
					ListEmptyComponent={<ListEmptyText>Não há relatórios disponíveis.</ListEmptyText>}
				/>
			</Container>
		</AppTemplate>
	)
}

export default ChartsView
