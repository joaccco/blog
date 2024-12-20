'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

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
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <section className="relative bg-transparent flex flex-col min-h-screen items-center justify-center snap-center bg-black">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920&text=Space+Background")',
          filter: "brightness(0.4)",
        }}
      />
      <main className="relative z-10 text-center text-white p-6 w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Qué Ofrecemos?</h2>

        <div className="backdrop-blur-lg bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl">
          <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {services.map((service) => (
              <Button
                key={service.name}
                onClick={() => setSelectedService(service)}
                variant={selectedService.name === service.name ? "secondary" : "ghost"}
                className="text-sm sm:text-base"
              >
                {service.name}
              </Button>
            ))}
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">{selectedService.name}</h3>
              <p className="text-lg leading-relaxed mb-4">
                {selectedService.description}
              </p>
              <ul className="list-disc ml-5">
                {selectedService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src={selectedService.image}
                alt={`${selectedService.name} ilustración`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

