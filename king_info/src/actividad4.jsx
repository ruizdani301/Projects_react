import React from 'react';
import './App.css';

function Actividad4({reyes}) {
    //Encontrar el primer elemento que tenga la letra a
    const sumar=(e)=>{
        ++e.target.innerHTML;
    }
    
    const elemento = reyes.filter(e => e.vacasComidas > 10 && e.reinado > 10).
    map(e => <div key={e.nombre}>{e.nombre}
    <div className='"numero' onClick={sumar}>0</div></div>)
    
           
    return (
        <>
            {elemento}
            
        </>
  );
}

export default Actividad4;