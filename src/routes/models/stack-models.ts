import { ICreateAccount, IHealth, IWorkoutPlan } from 'src/types/Types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type propsNavigationStack = {
	PersonalInformations: undefined
	Quiz: undefined
	Home: undefined
	Login: undefined
	MakeApp: undefined
	Illnesses: undefined
	Joys: undefined
	Vaccines: undefined
	YourPlan: undefined
	Medicines: undefined
	DiseasesFamily: undefined
	WorkRoom: undefined
	ChangeDataHealth: IHealth
	WorkoutPlan: IWorkoutPlan
	PhysicalAssessment: undefined
	PhysicalActivityHistory: undefined
	Payment: undefined
	Charts: undefined
	FinalQuestions: undefined
	AvailableEquipment: undefined
	Plans: undefined
	CheckData: undefined
	Loading: undefined
	Availability: undefined
	Nutrition: undefined
	ForgotPassword: undefined
	LifeHabits: undefined
	Health: undefined
	CreateAccount: ICreateAccount
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
