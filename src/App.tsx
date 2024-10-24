
import './App.css'
import Home from './Pages/Home/home'
import NavBar from './Components/NavBar/navbar'
import { Products } from './Models/products'
import { Outlet } from 'react-router'
function App() {
  

  return( <>
    <NavBar/>
    <Outlet/>
  </>)
}





export default App
