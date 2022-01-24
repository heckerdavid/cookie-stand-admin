import axios from "axios"
import { useState } from "react"
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/Loginform"
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login } = useAuth()

  const [userName, setUserName] = useState(false)

  async function handleLogin(username, password) {

    login(username, password)
    setUserName(username)
  }

  return (
    <>
      { userName ? <CookieStandAdmin user={userName}/> : <LoginForm onLogin={handleLogin}/> }
    </>
  )
}
