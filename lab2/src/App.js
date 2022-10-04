
import Login from './pages/Login/index'
import Todo from './pages/todo/index'
import {Route,Routes} from 'react-router-dom'
const App = ()=>{


  return (
      <Routes  >
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Todo/>} path='/todo'></Route>
      </Routes>
  )
}


export default App