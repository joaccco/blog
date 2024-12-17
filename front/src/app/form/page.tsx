// Añadir "use client" al inicio del archivo para convertirlo en un Componente del lado del cliente
'use client';

import React, { useState } from 'react';

const Form = () => {
    const [step, setStep] = useState(1); // Estado para controlar el paso actual
    const [formData, setFormData] = useState({
        serviceType: '',
        businessType: '',
        name: '',
        email: '',
        details: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handlePrevious = () => {
        setStep(prevStep => prevStep - 1);
    };

    return (
        <div className="h-screen w-screen bg-black">
            <div className="top-10 left-10">
                <h2 className="text-white">Service Form</h2>
            </div>
            <div className="h-full w-full flex justify-center items-center">
                <div className="justify-center w-full max-w-md">
                    {step === 1 && (
                        <>
                            <h2 className="text-white font-light text-xl">Paso número 1</h2>
                            <h3 className="text-white font-bold text-3xl">¿Cómo podemos ayudarte?</h3>
                            <div className="w-full mt-4">
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="" className="font-bold text-gray-600" disabled>
                                        Selecciona el tipo de servicio
                                    </option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="landing_page">Landing Page</option>
                                    <option value="corporate_website">Sitio Web Corporativo</option>
                                    <option value="blog">Blog</option>
                                    <option value="portfolio">Portfolio</option>
                                    <option value="web_application">Aplicación Web</option>
                                    <option value="seo_service">Optimización SEO</option>
                                </select>
                            </div>
                            <div className="mt-12">
                                <button onClick={handleNext} className="bg-white rounded-full px-4 py-2">
                                    Siguiente <span className="font-bold text-xl"> → </span>
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className="text-white font-light text-xl">Paso número 2</h2>
                            <h3 className="text-white font-bold text-3xl">Selecciona el tipo de negocio</h3>
                            <div className="w-full mt-4">
                                <select
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    className="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="" className="font-bold text-gray-600" disabled>
                                        Selecciona el tipo de negocio
                                    </option>
                                    <option value="retail">Retail</option>
                                    <option value="corporate">Corporativo</option>
                                    <option value="startup">Startup</option>
                                    <option value="freelancer">Freelancer</option>
                                </select>
                            </div>
                            <div className="mt-12">
                                <button onClick={handlePrevious} className="bg-white rounded-full px-4 py-2 mr-4">
                                    Atrás
                                </button>
                                <button onClick={handleNext} className="bg-white rounded-full px-4 py-2">
                                    Siguiente <span className="font-bold text-xl"> → </span>
                                </button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h2 className="text-white font-light text-xl">Paso número 3</h2>
                            <h3 className="text-white font-bold text-3xl">Información de contacto</h3>
                            <div className="w-full mt-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    className="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Correo electrónico"
                                    className="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Especifica la información del sistema"
                                    rows={4}
                                    className="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div className="mt-12">
                                <button onClick={handlePrevious} className="bg-white rounded-full px-4 py-2 mr-4">
                                    Atrás
                                </button>
                                <button className="bg-white rounded-full px-4 py-2">
                                    Enviar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;
