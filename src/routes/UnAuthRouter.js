import React from 'react'
import { Route, Routes } from 'react-router'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/public/Home'
import { LasNoticias } from '../pages/public/LasNoticias'
import { TheLogin } from '../pages/public/TheLogin'
//rutas publicas
export const UnAuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<Home />}>
               <Route index element={<LasNoticias />}/>
               <Route path="login" element={<TheLogin />} />
               <Route path="*" element={<NotFound />} />
           </Route>
       </Routes>
    )
}
