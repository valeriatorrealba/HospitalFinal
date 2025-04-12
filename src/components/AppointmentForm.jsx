import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function AppointmentForm({ doctors, onFormSubmit, initialData }) {
    const [formData, setFormData] = useState({
        patientName: '',
        doctorId: '',
        appointmentDate: '',
    });

    const inputRef = useRef(null);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData({ patientName: '', doctorId: '', appointmentDate: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light border p-4 rounded shadow-sm">
            <h3 className="text-center mb-4">Agendar Cita</h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="patientName" className="form-label">Nombre del Paciente:</label>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        className="form-control"
                        value={formData.patientName}
                        onChange={handleChange}
                        ref={inputRef}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="doctorId" className="form-label">Seleccione un Doctor:</label>
                    <select
                        id="doctorId"
                        name="doctorId"
                        className="form-select"
                        value={formData.doctorId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="appointmentDate" className="form-label">Fecha:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        className="form-control"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary" onClick={handleFocus}>
                    {initialData ? 'Actualizar Cita' : 'Registrar Cita'}
                </button>
            </div>
        </form>
    );
}

AppointmentForm.propTypes = {
    doctors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object,
};

export default AppointmentForm;
