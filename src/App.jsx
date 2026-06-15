import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

import ListEmployeeComplonent from './components/ListEmployeeComplonent'
import HelloWorld from './HelloWorld'
import {BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <>
       <HeaderComponent/>
       <ListEmployeeComplonent/>
       <FooterComponent/>
    </>
  )
}

export default App
