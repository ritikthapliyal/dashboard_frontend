import './index.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {

    // const isUserLoggedIn = !!userInfo

    return (
        <Routes>
          {/* <Route path='/' element={isUserLoggedIn ? <Dashboard/> : <Login/>}></Route> */}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>    
    )
}

export default App