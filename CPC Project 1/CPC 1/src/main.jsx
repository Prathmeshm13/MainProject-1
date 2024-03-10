import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/QuizPage/App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import QuestionBox from './Components/QuizPage/QuestionBox.jsx';
import Myprofile from './Components/MyProfile/Myprofile.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="quiz" element={<App/>}/>
    <Route path="user" element={<Myprofile/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
