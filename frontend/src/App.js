import React from 'react'

import UserComponents from './Components/UserComponents'
import AlbumComponent from './Components/AlbumComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import PhotoComponent from './Components/PhotoComponent'
import PhotosComponents from './Components/PhotosComponents'

function App() {
  return (
    <div>
    
        
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <UserComponents/>}/>
        <Route exact path="/UserPage" element={ <UserComponents/>}/>
        <Route exact path="/AlbumPage" element={<AlbumComponent/> }/>
        <Route exact path="/AlbumPage/Photo" element={<PhotosComponents/> }/>
        <Route exact path="/myphoto" element={<PhotoComponent/> }/>
        
      </Routes>   
      </BrowserRouter>
      
    
    </div>
  )
}

export default App