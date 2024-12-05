import { Route, Routes } from "react-router-dom"
import BuyCredet from "./pages/BuyCredet"
import Home from "./pages/Home"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"



const  App = ()=> {

 const {showLogin} = useContext(AppContext)

  return (
    <div className=" px-5 sm:px-11 md:px-15 lg:px-30 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50" >
      <Navbar/>
     { showLogin &&  <Login/>} 
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/result"  element={ <Result/>}/>
      <Route path="/buy"  element={ <BuyCredet/>}/>
   


    </Routes>
    <Footer/>

    </div>
  )
}

export default App
