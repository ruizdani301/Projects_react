import React from 'react';
import './App.css';

function Actividad1({reyes}) {
    const url = "https://www.html6.es/img/rey_";

    const text=reyes.map(obj=> <div key={obj.nombre} className='rey'>
        <span className='red'>{obj.nombre.toUpperCase()}</span>
        ha comido {obj.reinado*obj.vacasComidas*365}
        vacas en sus {obj.reinado} años de reinado
        <img src={url+obj.nombre.toLowerCase()+".png"}/>
        </div>)
    return (
        <div>
         {text}   
      
         </div>
  );
}

export default Actividad1;
