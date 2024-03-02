import { atom } from 'recoil'

const selectedHealthItemsAtom = atom({
	key: 'selectedHealthItemsState', // Um identificador único para o átomo
	default: [],
})

export default selectedHealthItemsAtom
