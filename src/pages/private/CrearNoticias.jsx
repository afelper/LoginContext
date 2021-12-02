import React from 'react'

export const CrearNoticias = () => {

    const handleSubmit = (e) => {
        e.preventDeafault();
    }

    return (
        <div>
            <h2>Crear Noticia</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholdeer="Titulo de la Noticias" />
                <br />
                <textarea />
                <br />
                <button>Crear Noticia</button>
            </form>
        </div>
    )
}
