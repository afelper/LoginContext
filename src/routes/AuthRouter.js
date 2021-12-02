import React from 'react'
import { Route, Routes } from 'react-router'
import { NotFound } from '../pages/NotFound'
import { CrearNoticias } from '../pages/private/CrearNoticias'
import { Dashboard } from '../pages/private/Dashboard'
import { ElPerfil } from '../pages/private/ElPerfil'

//element={<Dashboard />} por defecto como home 
export const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<Dashboard />}>
                <Route index element={<CrearNoticias />}/>
                <Route path="elPerfil" element={<ElPerfil />}/>
                <Route path="*" element={<NotFound/>} />
           </Route>

       </Routes>
    )
}
