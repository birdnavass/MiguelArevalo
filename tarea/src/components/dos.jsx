import React, { useState } from 'react';

const Dos = () => {
    const [items, setItems] = useState([]);
    const [newItemText, setNewItemText] = useState('');
    const [markedIndices, setMarkedIndices] = useState([]);

    const handleChange = event => setNewItemText(event.target.value);
    const addItem = () => newItemText.trim() && (setItems([...items, newItemText]), setNewItemText(''));
    const deleteItem = index => (setItems(items.filter((_, i) => i !== index)), unmarkItem(index));
    const toggleMark = index => markedIndices.includes(index) ? unmarkItem(index) : markItem(index);
    const markItem = index => setMarkedIndices([...markedIndices, index]);
    const unmarkItem = index => setMarkedIndices(markedIndices.filter(i => i !== index));

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input placeholder='Ingrese tarea' type="text" value={newItemText} onChange={handleChange} />
            <button className='boton' onClick={addItem}>Agregar</button>

            <table>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} style={{ background: markedIndices.includes(index) ? '#A0EBA8' : '' }}>
                            <td>
                            <button className='btMark' onClick={() => toggleMark(index)}>
                                    {markedIndices.includes(index) ? 'Completada' : 'No completada'}
                                </button>
                            </td>
                            <td style={{ textAlign: "right" }}>{item}</td>
                            <td>
                                <button className='btElim' onClick={() => deleteItem(index)}>x</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dos;