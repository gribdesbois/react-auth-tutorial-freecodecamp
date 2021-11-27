
import './App.css'
import Form from './components/common/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
        <Routes>
          <Route path='/login' element={<Form title='Login' />} />
          <Route path='/register' element={<Form title='Login' />} />
        </Routes>
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
