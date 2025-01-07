'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Poppins, Genos } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const services = [
  {
    name: "Diseño UX/UI",
    description: "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.",
    features: [
      "Diseño centrado en el usuario",
      "Prototipos interactivos",
      "Pruebas de usabilidad"
    ],
    image: "/placeholder.svg?height=300&width=400&text=UX/UI+Design"
  },
  {
    name: "Desarrollo a Medida",
    description: "Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    features: [
      "Tecnologías modernas",
      "Código limpio y mantenible",
      "Escalabilidad garantizada"
    ],
    image: "/placeholder.svg?height=300&width=400&text=Custom+Development"
  },
  {
    name: "Lógica de Negocio",
    description: "Implementamos la lógica empresarial compleja en sistemas eficientes y robustos.",
    features: [
      "Análisis de procesos de negocio",
      "Optimización de flujos de trabajo",
      "Integración de sistemas"
    ],
    image: "/placeholder.svg?height=300&width=400&text=Business+Logic"
  },
  {
    name: "LandingPage",
    description: "Diseñamos y desarrollamos landing pages efectivas que convierten visitantes en clientes.",
    features: [
      "Diseño persuasivo",
      "Optimización para conversiones",
      "A/B testing"
    ],
    image: "/placeholder.svg?height=300&width=400&text=Landing+Page"
  },
  {
    name: "Ecommerce",
    description: "Creamos tiendas online potentes y seguras que impulsan tus ventas y mejoran la experiencia de compra.",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarelas de pago seguras"
    ],
    image: "/placeholder.svg?height=300&width=400&text=Ecommerce"
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="relative bg-transparent min-h-screen overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl m-24 font-bold text-white mb-10 px-4 sm:px-6"
      >
        Nuestros
        <span className="text-gray-400"> Servicios</span>
      </motion.h2>

      {/* Contenedor fijo */}
      <div className="relative flex justify-center">
        <div
          ref={containerRef}
          className="sticky p-6 w-full max-w-5xl h-[80vh] overflow-y-scroll shadow-lg"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="mb-12 bg-gray-900 rounded-3xl hover:border-purple-500/10 hover:shadow-purple-500/60 transition duration-300  p-16 shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-lg mb-6">  <span
                    className={`${poppins.className} block`}
                  >{service.description}</span></p>
                  <ul className="space-y-2">
                    <span className={`${poppins.className} font-extralight`}>
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-500 flex items-center"
                        >
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </span>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}