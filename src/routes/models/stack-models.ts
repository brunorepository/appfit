import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type propsNavigationStack = {
	PersonalInformations: undefined
	Quiz: undefined
	Login: undefined
	Surgeries: undefined
	Illnesses: undefined
	Joys: undefined
	Vaccines: undefined
	Medicines: undefined
	DiseasesFamily: undefined
	FinalQuestions: undefined
	CheckData: undefined
	Loading: undefined
	ForgotPassword: undefined
	CreateAccount: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
