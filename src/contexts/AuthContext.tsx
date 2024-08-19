import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Atualizamos a interface para incluir todos os dados importantes do usuário
interface User {
	_id: string
	first_name: string
	full_name: string
	email: string
	cpf: string
	purchaseDate: string
	productName: string
	haveAnamnese: boolean
}

// Definimos o tipo do contexto, incluindo o login, logout e o usuário atual
interface AuthContextType {
	user: User | any
	login: (userData: User) => void | any
	logout: () => void
	setAnamneseCompleted: () => Promise<void> // Adicionamos a função setAnamneseCompleted aqui
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
	children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)

	// Carrega as informações do usuário quando o aplicativo é iniciado
	useEffect(() => {
		const loadUser = async () => {
			try {
				const storedUser = await AsyncStorage.getItem('user')
				if (storedUser) {
					setUser(JSON.parse(storedUser))
				}
			} catch (error) {
				console.error('Failed to load user:', error)
			}
		}

		loadUser()
	}, [])

	// Função para realizar o login e salvar os dados no AsyncStorage
	const login = async (userData: User) => {
		try {
			await AsyncStorage.setItem('user', JSON.stringify(userData))
			setUser(userData)
		} catch (error) {
			console.error('Failed to save user:', error)
		}
	}

	// Função para realizar o logout e remover os dados do AsyncStorage
	const logout = async () => {
		try {
			await AsyncStorage.removeItem('user')
			setUser(null)
		} catch (error) {
			console.error('Failed to remove user:', error)
		}
	}

	// Função para setar a anamnese como true
	const setAnamneseCompleted = async (): Promise<void> => {
		if (user) {
			const updatedUser: User = { ...user, haveAnamnese: true }
			try {
				await AsyncStorage.setItem('user', JSON.stringify(updatedUser))
				setUser(updatedUser)
			} catch (error) {
				console.error('Failed to update user anamnese:', error)
			}
		}
	}

	return <AuthContext.Provider value={{ user, login, logout, setAnamneseCompleted }}>{children}</AuthContext.Provider>
}

// Hook para garantir o uso seguro do contexto
export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
