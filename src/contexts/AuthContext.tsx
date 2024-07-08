import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useRecoilState } from 'recoil'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'

// Definindo o tipo para o usuário
type User = {
	username: string
	email: string
}

type AuthProviderProps = {
	children: ReactNode
}

// Definindo o tipo para o contexto de autenticação
type AuthContextType = {
	user: User | null
	// eslint-disable-next-line no-unused-vars
	signIn: (username: string, password: string) => void
	signOut: () => void
}

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType>({
	user: null,
	signIn: () => {},
	signOut: () => {},
})

// Provedor de autenticação que será utilizado na aplicação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)
	const [authContext, setAuthContext] = useRecoilState(isAuthenticated)

	// Função para simular o login
	const signIn = (username: string) => {
		// Aqui você faria a lógica real de autenticação, como fazer uma requisição para um servidor
		// Neste exemplo, apenas definimos o usuário como logado
		setUser({ username, email: `${username}@example.com` })
	}

	// Função para simular o logout
	const signOut = () => {
		setUser(null)
		setAuthContext(false)
	}

	return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

// Hook para utilizar o contexto de autenticação em componentes
export const useAuth = (): AuthContextType => useContext(AuthContext)
