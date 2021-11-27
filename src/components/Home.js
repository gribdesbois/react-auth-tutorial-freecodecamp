import React, {useEffect} from "react"
import { useNavigate } from "react-router"

export default function Home() {
  let navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    authToken ? navigate('/home') : navigate('/login')
  }, [])

  return (
    <div>
      Home page
    </div>
  )
}
