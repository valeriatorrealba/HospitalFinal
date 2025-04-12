// src/components/Testimonios.jsx
import React from 'react';
import paciente1 from "../assets/img/paciente1.jpg";
import paciente2 from "../assets/img/paciente2.jpg";
import paciente3 from "../assets/img/paciente3.jpg";



const testimonios = [
    {
        image: paciente1,
        name: "Ana Rodríguez",
        title: "Excelente Atención",
        text: "La atención en el hospital fue excelente, los médicos y el personal fueron muy amables y profesionales. Me sentí cuidada y segura en todo momento."
    },
    {
        image: paciente2,
        name: "Carla Méndez",
        title: "Profesionales de Primera",
        text: "Los especialistas del hospital son muy atentos y expertos en sus áreas. Estoy muy agradecida por el trato y la dedicación que me brindaron."
    },
    {
        image: paciente3,
        name: "Mario López",
        title: "Confianza Total",
        text: "Me operé en el hospital y todo fue perfecto. Los médicos me explicaron cada detalle del proceso y el resultado superó mis expectativas."
    }
];

const Testimonios = () => (
    <section className="section">
        <div className="row">
        {testimonios.map((testimonio, index) => (
            <div key={index} className="col-xl-4 col-lg-3 col-md-auto col-sm-auto col-xs-3">
                <div className="testimonials__box">
                    <img className="testimonials__image" src={testimonio.image} alt={`Paciente ${testimonio.name}`} />
                    <h3 className="testimonials__title">{testimonio.name}</h3>
                    <h4 className="testimonials__title--size">{testimonio.title}</h4>
                    <div className="testimonials__stars">
                        <i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></i>
                    </div>
                    <p className="testimonials__paragraph">{testimonio.text}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
);

export default Testimonios;
