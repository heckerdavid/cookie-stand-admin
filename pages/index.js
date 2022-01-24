import axios from "axios"
import { useState } from "react"
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/Loginform"

export default function Home() {

  const [user, setUser] = useState(false)

  async function handleLogin(username, password) {

    const response = await axios.post('https://cookie-stand-api-401d17.herokuapp.com/api/token/', {username, password})
    console.log(response.data)
    setUser(true)
  }

  return (
    <>
      { user ? <CookieStandAdmin /> : <LoginForm onLogin={handleLogin}/> }
    </>
  )
}
