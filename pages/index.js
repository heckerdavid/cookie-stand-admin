
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/Loginform"

export default function Home() {

  const user = true

  return (
    <>
      { user ? <CookieStandAdmin /> : <LoginForm /> }
    </>
  )
}
