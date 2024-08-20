import Login from "./login.jsx"
import Register from "./Register.jsx"
import Welcome from "./Welcome.jsx"
import { Route, Routes } from "react-router-dom"
import PasswordManager from "./ForgotPassword.jsx"

export default function App() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover">
      <Routes> 
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/PasswordManager" element={<PasswordManager/>}/>
      </Routes>
    </div>
  )
}

export {Register}