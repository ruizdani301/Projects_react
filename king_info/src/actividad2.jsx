import React from 'react';
import './App.css';

function Actividad2({reyes}) {
    const eliminar=(e)=>{
        e.target.parentNode.remove();

    }
    
    return (
        <div>
            {reyes.filter(obj => !obj.nombre.includes("g")).
            map(obj=><div key={obj.nombre}>{obj.nombre}<button onClick={eliminar}>eliminar</button></div>)}
        </div>
  );
}

export default Actividad2;
