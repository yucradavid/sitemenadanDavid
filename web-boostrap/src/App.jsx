import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import Dashboard from './pages/Dashboard'
import Matricula from './pages/Matricula'
import Docente from './pages/Docente'
import FormMatricula from './pages/FormMatricula'
import FormDocente from './pages/FormDocente'
import Curso from './pages/Curso'
import FormCurso from './pages/FormCurso'
import Asistencia from "./pages/Asistencia.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/matricula" element={<Matricula/>}/>
        <Route path='/matricula/form' element={<FormMatricula/>}/>
        <Route path='/docente' element={<Docente/>}/>
        <Route path='/docente/form' element={<FormDocente/>}/>
        <Route path='/curso' element={<Curso/>}/>
        <Route path='/curso/form' element={<FormCurso/>}/>
        <Route path='/asistencia' element={<Asistencia/>}/>

      </Routes>
    </Router>
  );
}

export default App
