import 'react'
import {Routes, Route} from 'react-router'
import {Home} from "./Pages/homePage"
import './App.css'


export function App(){
    return(
      <Routes>
        <Route index element={<Home/>} />
        <Route path="./order" element={<Home/>} />
        <Route path="./cart" element={<Home/>} />
      </Routes>
    )

}


export default App