import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

export const Dashboard = () => {

    const {handleLogout} = useContext(AuthContext);


    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Crear Noticias</Link> 
                    </li>
                    <li>
                        <Link to="elPerfil">Perfil</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Log out</button>
                    </li>
                </ul>
            </nav>
            {/* -----Renderizar las rutas anidadas--------- */}
            <Outlet />

        </div>
    )
}
