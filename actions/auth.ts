'use server'
import { signIn, signOut } from '@/lib/auth'
import { revalidatePath } from 'next/cache'

export const login = async (provider: string) => {
	await signIn(provider, { redirectTo: '/home' })
	revalidatePath('/home')
}

export const logout = async () => {
	await signOut({ redirectTo: '/' })
	revalidatePath('/')
}
