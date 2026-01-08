import { LoginCard } from '../components/LoginCard'

export const Login = ({
    user,
    error,
    login,
    isLoading
}) => {
    return (
        <>
            <LoginCard
                error={error}
                user={user}
                login={login}
                isLoading={isLoading}
            />
        </>
    )
}
