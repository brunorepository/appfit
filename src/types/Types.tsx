/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum EUserTypeProps {
	Personal = 'personal',
}

export enum EHealthProps {
	Health = 'health',
	Surgeries = 'surgeries',
	Medicines = 'medicines',
	Allergies = 'allergies',
	Immunizations = 'immunizations',
}
export interface EWorkoutProps {
	title: string
}
export interface IWorkoutPlan {
	exercises: Array<{
		title: string
		name: string
		series: string
		repetitions: string
		thumbnail?: string
		video?: string
		extraVideo?: string
		advancedMethod: boolean
		secondExercise?: string
		secondSeries?: string
		secondRepetitions?: string
		onComplete: () => void
	}>
}

export interface ICreateAccount {
	type: EUserTypeProps
}
export interface IHealth {
	editingType: EHealthProps
}
