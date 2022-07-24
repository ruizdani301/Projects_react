import React from 'react';
import './App.css';

function Actividad3({reyes}) {
    //Encontrar el primer elemento que tenga la letra a
    const elemento = reyes.find(e => e.nombre.substring
        (0,1) == "e" || e.nombre.substring(0,1) == "E")

    
    
    return (
        <div>
            {elemento==undefined ? "NO encontrado"
            : elemento.nombre}
        </div>
  );
}

export default Actividad3;