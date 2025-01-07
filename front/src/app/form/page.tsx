'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Maximize2, X } from 'lucide-react';

interface Template {
    id: string;
    name: string;
    image: string;
    description: string;
    features: string[];
}

const templates: Record<string, Template[]> = {
    ecommerce: [
        { 
            id: 'ec1', 
            name: 'Modern Shop', 
            image: '/placeholder.svg?height=200&width=300&text=Modern+Shop',
            description: 'A sleek and contemporary e-commerce design for the modern retailer.',
            features: ['Responsive design', 'Product quick view', 'Advanced filtering']
        },
        { 
            id: 'ec2', 
            name: 'Vintage Boutique', 
            image: '/placeholder.svg?height=200&width=300&text=Vintage+Boutique',
            description: 'A charming and nostalgic design perfect for specialty and artisanal shops.',
            features: ['Custom product categorization', 'Wishlist functionality', 'Gift wrapping option']
        },
        { 
            id: 'ec3', 
            name: 'Tech Store', 
            image: '/placeholder.svg?height=200&width=300&text=Tech+Store',
            description: 'A cutting-edge design for electronics and gadget retailers.',
            features: ['Product comparison tool', 'Tech specs display', 'Video product demos']
        },
    ],
    landing_page: [
        { 
            id: 'lp1', 
            name: 'Startup Launch', 
            image: '/placeholder.svg?height=200&width=300&text=Startup+Launch',
            description: 'A dynamic and engaging landing page for startup product launches.',
            features: ['Animated hero section', 'Feature highlights', 'Newsletter signup']
        },
        { 
            id: 'lp2', 
            name: 'Product Showcase', 
            image: '/placeholder.svg?height=200&width=300&text=Product+Showcase',
            description: 'An elegant design to showcase and promote a single product or service.',
            features: ['360-degree product view', 'Customer testimonials', 'Pricing tables']
        },
        { 
            id: 'lp3', 
            name: 'Event Promotion', 
            image: '/placeholder.svg?height=200&width=300&text=Event+Promotion',
            description: 'A vibrant and exciting landing page for promoting events and conferences.',
            features: ['Countdown timer', 'Speaker profiles', 'Schedule display']
        },
    ],
    corporate_website: [
        { 
            id: 'cw1', 
            name: 'Professional Services', 
            image: '/placeholder.svg?height=200&width=300&text=Professional+Services',
            description: 'A polished and trustworthy design for professional service firms.',
            features: ['Service overview', 'Team member profiles', 'Client testimonials']
        },
        { 
            id: 'cw2', 
            name: 'Creative Agency', 
            image: '/placeholder.svg?height=200&width=300&text=Creative+Agency',
            description: 'A bold and innovative design showcasing creative work and services.',
            features: ['Portfolio gallery', 'Interactive case studies', 'Blog integration']
        },
        { 
            id: 'cw3', 
            name: 'Corporate Enterprise', 
            image: '/placeholder.svg?height=200&width=300&text=Corporate+Enterprise',
            description: 'A sophisticated and scalable design for large corporate entities.',
            features: ['Multi-level navigation', 'Investor relations section', 'Global location map']
        },
    ],
};

const ServiceForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: '',
        businessType: '',
        template: '',
        name: '',
        email: '',
        details: ''
    });

    const [availableTemplates, setAvailableTemplates] = useState<Template[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    useEffect(() => {
        if (formData.serviceType && templates[formData.serviceType]) {
            setAvailableTemplates(templates[formData.serviceType]);
        } else {
            setAvailableTemplates([]);
        }
    }, [formData.serviceType]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleTemplateSelect = (template: Template) => {
        setFormData(prevData => ({
            ...prevData,
            template: template.id
        }));
        setSelectedTemplate(template);
    };

    const closeTemplateDetails = () => {
        setSelectedTemplate(null);
    };

    const handleNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handlePrevious = () => {
        setStep(prevStep => prevStep - 1);
    };

    const isStepComplete = () => {
        switch (step) {
            case 1: return !!formData.serviceType;
            case 2: return !!formData.businessType;
            case 3: return !!formData.template;
            case 4: return !!formData.name && !!formData.email;
            default: return false;
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Formulario de Servicio</h1>
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    step >= i ? 'bg-indigo-600' : 'bg-gray-700'
                                }`}>
                                    {step > i ? <Check className="w-5 h-5" /> : i}
                                </div>
                                <div className="text-xs mt-2">{
                                    i === 1 ? 'Servicio' :
                                    i === 2 ? 'Negocio' :
                                    i === 3 ? 'Plantilla' :
                                    'Contacto'
                                }</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-700 h-1 mt-4">
                        <div 
                            className="bg-indigo-600 h-1 transition-all duration-500 ease-in-out"
                            style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.5 }}
                    >
                        {step === 1 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">¿Cómo podemos ayudarte?</h2>
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="" disabled>Selecciona el tipo de servicio</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="landing_page">Landing Page</option>
                                    <option value="corporate_website">Sitio Web Corporativo</option>
                                </select>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Selecciona el tipo de negocio</h2>
                                <select
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="" disabled>Selecciona el tipo de negocio</option>
                                    <option value="retail">Retail</option>
                                    <option value="corporate">Corporativo</option>
                                    <option value="startup">Startup</option>
                                    <option value="freelancer">Freelancer</option>
                                </select>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Elige una plantilla</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {availableTemplates.map((template) => (
                                        <motion.div 
                                            key={template.id}
                                            className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                                formData.template === template.id
                                                    ? 'border-indigo-500 bg-indigo-500/20'
                                                    : 'border-gray-700 hover:border-indigo-500'
                                            }`}
                                            onClick={() => handleTemplateSelect(template)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="relative">
                                                <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    <Maximize2 className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                                                <p className="text-sm text-gray-300 mb-2">{template.description}</p>
                                                <ul className="text-xs text-gray-400">
                                                    {template.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center mb-1">
                                                            <Check className="w-3 h-3 mr-1 text-green-500" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Correo electrónico"
                                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
                                />
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Detalles adicionales del proyecto"
                                    rows={4}
                                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                    {step > 1 && (
                        <button 
                            onClick={handlePrevious}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
                        >
                            <ChevronLeft className="mr-2" /> Anterior
                        </button>
                    )}
                    {step < 4 ? (
                        <button 
                            onClick={handleNext}
                            disabled={!isStepComplete()}
                            className={`ml-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300 ${
                                !isStepComplete() ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            Siguiente <ChevronRight className="ml-2" />
                        </button>
                    ) : (
                        <button 
                            className="ml-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
                        >
                            Enviar <Check className="ml-2" />
                        </button>
                    )}
                </div>
            </div>

            {/* Template Details Modal */}
            <AnimatePresence>
                {selectedTemplate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-semibold">{selectedTemplate.name}</h3>
                                <button onClick={closeTemplateDetails} className="text-gray-400 hover:text-white">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <img src={selectedTemplate.image} alt={selectedTemplate.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <p className="text-gray-300 mb-4">{selectedTemplate.description}</p>
                            <h4 className="text-lg font-semibold mb-2">Características:</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {selectedTemplate.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={closeTemplateDetails}
                                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                            >
                                Seleccionar esta plantilla
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceForm;

