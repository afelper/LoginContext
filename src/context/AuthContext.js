import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Axios from 'axios'
import Swal from 'sweetalert2'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  const handleLogin = async (objUser) => {
    const respuesta = await Axios.post('/persona/login',objUser);
    console.log(respuesta)
    const mensaje= respuesta.data.mensaje
  
    if(mensaje!=='Bienvenido') 
    {
        Swal.fire({
        icon:'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
        })
    }
    else 
    {  
        const token = respuesta.data.token
        const nombre = respuesta.data.nombre
        const idUsuario= respuesta.data.id

        sessionStorage.setItem('token',token)
        sessionStorage.setItem('nombre',nombre)
        sessionStorage.setItem('idUsuario',idUsuario)
        setAuth(true);
        navigate("/");

        Swal.fire({
            icon:'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }
  }


  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    setAuth(false);
  };

  const data = { handleLogin, auth, handleLogout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;



