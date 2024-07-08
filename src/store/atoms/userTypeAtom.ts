import { atom } from 'recoil'

const userType = atom({
	key: 'userType', // Um identificador único para o átomo
	default: 'student',
})

export default userType
