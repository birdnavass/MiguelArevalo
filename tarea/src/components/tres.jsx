import React, { useState } from 'react';

const Tres = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [inputData, setInputData] = useState('');

    const handle = (event) => {
        event.preventDefault();
        const inputDataText = `Nombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${contraseña}`;
        setInputData(inputDataText);
    };

    return (
        <div>

            <form className='formulario' onSubmit={handle}>

                <input placeholder='Ingrese nombre:' type="text" id="nombre" value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} required/>

                    
                <input placeholder='Ingrese correo:' type="email" id="correo" value={correo} 
                    onChange={(e) => setCorreo(e.target.value)} required/>

                <input placeholder='Ingrese contraseña' type="password" id="contraseña" value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)} required/>

                <button className='boton' type="submit">Enviar</button>

            </form>

            {inputData}

        </div>
    );
};

export default Tres;