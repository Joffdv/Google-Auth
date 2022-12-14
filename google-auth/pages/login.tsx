import { useSession, signIn, signOut} from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>Welcome</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    )
  }
}