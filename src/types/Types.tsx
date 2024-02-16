/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum EUserTypeProps {
	Student = 'student',
	Personal = 'personal',
}
export interface ICreateAccount {
	type: EUserTypeProps
}
