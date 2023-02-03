import React, { useState } from 'react';

function TareasForm() {
    const [tarea, setTarea] = useState([
        { text: 'Aprender React', completado: false },
        { text: 'Aprender Hooks', completado: false }
    ]);

    const [input, setInput] = useState('');

    const agregarTarea = (text) => {
        const nuevaTarea = [...tarea, { text, completado: false }];
        setTarea(nuevaTarea);
    };

    const completarTarea = (index) => {
        const nuevaTarea = [...tarea];
        nuevaTarea[index].completado = !nuevaTarea[index].completado;
        setTarea(nuevaTarea);
    };

    const eliminarTarea = (index) => {
        const nuevaTarea = [...tarea];
        nuevaTarea.splice(index, 1);
        setTarea(nuevaTarea);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        agregarTarea(input);
        setInput('');
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Agregar tarea" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit">Agregar</button>
            </form>
            
                {tarea.map((tarea, index) => (
                    <p key={index}>
                        <span style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}>{tarea.text}</span>
                        <input type="checkbox" checked={tarea.completado} onChange={() => completarTarea(index)} />
                        <button type="button" onClick={() => eliminarTarea(index)}>
                            Eliminar
                        </button>
                    </p>
                ))}
            
        </div>
    );
}

export default TareasForm;
