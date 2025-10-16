import Sidebar from './components/sidebar/sidebar.jsx'
import Main from './components/main/main.jsx'
import React from 'react'
import './App.css'
function App(){
  return(
    <div id ="app">
      <Sidebar/>
      <Main/>
    </div>
  )
}
export default App;