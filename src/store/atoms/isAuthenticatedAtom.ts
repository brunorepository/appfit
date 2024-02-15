import { atom } from 'recoil'

const isAuthenticated = atom({
	key: 'authState', // Um identificador único para o átomo
	default: false, // O valor inicial é false, indicando que o modal está fechado
})

export default isAuthenticated
