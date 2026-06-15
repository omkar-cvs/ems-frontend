import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

import ListEmployeeComplonent from './components/ListEmployeeComplonent'
import HelloWorld from './HelloWorld'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                      {/* // http://localhost:3000 */}
                      <Route path='/' element={ <ListEmployeeComplonent/> }> </Route>
                      {/* // http://localhost:3000/employees */}
                      <Route path='/employees' element={ <ListEmployeeComplonent/> }> </Route>

                      
                </Routes>  
           
            <FooterComponent/>
      </BrowserRouter>

    </>
  )
}

export default App
