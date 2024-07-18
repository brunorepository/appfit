import React, { createContext, useState, useEffect, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface User {
	name: string
	email: string
}

interface AuthContextType {
	user: User | null
	login: (userData: User) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
	children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)

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

	const login = async (userData: User) => {
		try {
			await AsyncStorage.setItem('user', JSON.stringify(userData))
			setUser(userData)
		} catch (error) {
			console.error('Failed to save user:', error)
		}
	}

	const logout = async () => {
		try {
			await AsyncStorage.removeItem('user')
			setUser(null)
		} catch (error) {
			console.error('Failed to remove user:', error)
		}
	}

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
