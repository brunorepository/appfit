import { EWorkoutProps, ICreateAccount, IHealth, IWorkoutPlan } from 'src/types/Types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Definição das rotas e parâmetros aceitos para cada uma
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
	WorkRoom: {
		title: string
		series: number
		repetitions: number
		thumbnail?: string
	}
	ChangeDataHealth: IHealth
	WorkoutPlan: { workoutType: string; exercises: IWorkoutPlan['exercises'] }
	Anamnese: undefined
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

// Definição do tipo de navegação para usar com o hook useNavigation
export type propsStack = NativeStackNavigationProp<propsNavigationStack>
