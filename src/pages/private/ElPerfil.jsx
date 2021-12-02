import React from 'react'

export const ElPerfil = () => {

    const handleSubmit = (e) => {
        e.preventDeafault();
    }

    return (
        <div>
            <h2>Perfil</h2>
             <form onSubmit={handleSubmit}>
                <input type="text" placeholdeer="Nombre" />
                <br />
                <input type="text" placeholdeer="Apellido" />
                <br />
                <input type="text" placeholdeer="Email" />
                <br />
                <button>Actualizar</button>
            </form>
        </div>
    )
}
