/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum EUserTypeProps {
	Student = 'student',
	Personal = 'personal',
}

export enum EHealthProps {
	Health = 'health',
	Surgeries = 'surgeries',
	Medicines = 'medicines',
	Allergies = 'allergies',
	Immunizations = 'immunizations',
}
export interface ICreateAccount {
	type: EUserTypeProps
}
export interface IHealth {
	editingType: EHealthProps
}
