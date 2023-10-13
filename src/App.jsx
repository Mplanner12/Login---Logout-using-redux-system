import { useState } from 'react' 
import './App.css'
import NewLog from './components/NewLogin'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import NewLogout from './components/NewLogout'

function App() {
  const user = useSelector(selectUser)
  return(
    <>
      {user ? <NewLogout/> : <NewLog/>}
    </>
  )
}


export default App
