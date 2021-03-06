
import './App.css'

import { BrowserRouter, Routes, Route , useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {app} from './firebase-config'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Form from './components/common/Form'
import Home from './components/Home'




function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleAction = (id) => {
    const authentication = getAuth()
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response)=> {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
      .then((response)=> {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        navigate('/home')
      })
      .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/home')
    }
  }, [])

  return (
    <div className="App">
      <>
      <Routes>
        <Route 
          path='/login'
          element= {
            <Form 
              title='Login'
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />  
          }
        />
        <Route 
          path='/register'
          element= {
            <Form 
              title='Register'
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route 
          path='/home' 
          element={
            <Home />
          }
        />
        
      </Routes>
      <ToastContainer />
      </>
    </div>
  )
}

export default App
