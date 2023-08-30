import { useState } from 'react'
import HouseOwnerSignUp from './components/HouseOwnerSignUp'
import AgentSignUp from './components/AgentSignUp'
import './App.css'
import RealtorSignUp from './components/RealtorSignUp'
import CustomerSignUp from './components/CustomerSignUp'
import Agents from './components/Agents'
import BuyPage from './components/BuyPage'
import MortagePage from './components/MortagePage'
import NewLog from './components/NewLogin'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import NewLogout from './components/NewLogout'

function App() {
  const user = useSelector(selectUser)
  return(
    <>
      {/* <CustomerSignUp/>
      <RealtorSignUp/>
      <HouseOwnerSignUp/>
      <AgentSignUp/> */}
      {/* <Agents/> */}
      {/* <BuyPage/> */}
      {/* <MortagePage/> */}
      {user ? <NewLogout/> : <NewLog/>}
    </>
  )
}


export default App
