import React from 'react'
import { Link } from "react-router-dom";
import '@styles/NotFound.scss'

const NotFound = () => {
    return (
        <div>
            <h1 className="title-404">404</h1>
            <p className="text-404">Oops! Pagina no encontrada.</p>
            <Link className="button-404" to="/">Regrese a la página inicial, es mejor.</Link>
        </div>
    );
}

export default NotFound;