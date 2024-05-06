
import { Routes , Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import { useAuth } from "./context/AuthContext"

function App() {
  console.log(useAuth()?.isLoggedIn)


  return (
   
      <main>
        <Header/>
        <Routes>
          <Route path="/" element =  {<Home/>}/>
          <Route path="/Chat" element =  {<Chat/>}/>
          <Route path="/Login" element =  {<Login/>}/>
          <Route path="/Signup" element =  {<Signup/>}/>
          <Route path="/*" element =  {<NotFound/>}/>
        </Routes>
      </main>
    
  )
}

export default App
