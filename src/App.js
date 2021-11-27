
import './App.css'
import Form from './components/common/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'



const handleAction = (id) => {
  console.log(id)
}

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <BrowserRouter>
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
            }/>
        </Routes>
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
