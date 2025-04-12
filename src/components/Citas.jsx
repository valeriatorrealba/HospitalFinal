import React, { useEffect, useState } from 'react';
import AppointmentForm from './AppointmentForm';

const Citas = () => {
    const [citas, setCitas] = useState([]);
    const [editando, setEditando] = useState(null);

    const doctors = [
        { id: 'Dra. Callie Torres', name: 'Dra. Callie Torres' },
        { id: 'Dra. Arizona Robbins', name: 'Dra. Arizona Robbins' },
        { id: 'Dr. Federico Garcia', name: 'Dr. Federico Garcia' },
        { id: 'Dra. Lexie Grahams', name: 'Dra. Lexie Grahams' },
    ];

    // Cargar citas desde localStorage
    useEffect(() => {
        const citasGuardadas = localStorage.getItem('citas');
        if (citasGuardadas) {
            setCitas(JSON.parse(citasGuardadas));
        }
    }, []);

    // Guardar citas en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas));
    }, [citas]);

    const handleFormSubmit = (formData) => {
        if (editando !== null) {
            const nuevasCitas = citas.map((cita, index) =>
                index === editando ? formData : cita
            );
            setCitas(nuevasCitas);
            setEditando(null);
        } else {
            setCitas([...citas, formData]);
        }
    };

    const handleEliminar = (index) => {
        const nuevas = citas.filter((_, i) => i !== index);
        setCitas(nuevas);
        if (editando === index) setEditando(null);
    };

    return (
        <div className="p-5">

            <AppointmentForm
                doctors={doctors}
                onFormSubmit={handleFormSubmit}
                initialData={editando !== null ? citas[editando] : null}
            />
            <div className="mt-4">
                <h3>Lista de Citas</h3>
                {citas.length === 0 ? (
                    <p>No hay citas registradas.</p>
                ) : (
                    citas.map((cita, index) => (
                        <div key={index} className="card p-3 m-2">
                            <p><strong>Paciente:</strong> {cita.patientName}</p>
                            <p><strong>Doctor:</strong> {cita.doctorId}</p>
                            <p><strong>Fecha:</strong> {cita.appointmentDate}</p>
                            <div className="mt-2">
                                <button onClick={() => setEditando(index)} className="btn btn-warning me-2">Editar</button>
                                <button onClick={() => handleEliminar(index)} className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Citas;
