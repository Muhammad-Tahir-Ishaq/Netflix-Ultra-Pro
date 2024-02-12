import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
import AllVideos from './pages/AllVideos'
import AddVideo from './pages/AddVideo'
import VideoDetails from './pages/VideoDetails'
import UpdateVideo from './pages/UpdateVideo'
import LoginForm from './pages/LoginForm'


function App() {

  return (
    <>
      <Navbar/>
     
      <Routes>
        {/* <Route exact path='/' element={<HomePage/>} /> */}
        <Route exact path='/all-videos' element={<AllVideos/>} />
        <Route exact path='/video/:id' element={<VideoDetails/>} />
        <Route exact path='/update-video/:id' element={<UpdateVideo/>} />
        <Route exact path='/add-video' element={<AddVideo/>} />
        <Route exact path='/' element={<LoginForm/>} /> 
      </Routes>
      
      <Footer/>
     
    </>
  )
}

export default App
