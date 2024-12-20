'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ServicesSection from '../components/ServicesSection'
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'

const Earth3DScene = dynamic(() => import('@/components/Earth3DScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900" />
})

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
      <BackgroundGradients />
      <Section1 scrollY={scrollY} />
      <ServicesSection />
      <Section3 />
      <Section4 />
    </div>
  )
}

function BackgroundGradients() {
  return (
    <>
      <div
        className="hidden absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 animate-wave"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu animate-wave"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </>
  );
}

function Section1({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          filter: "brightness(0.4)",
        }}
      />
      <div className="absolute inset-0 z-10">
        <Earth3DScene scrollY={scrollY} />
      </div>
      <main className="relative z-20 flex flex-col items-center gap-8 text-center text-white p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">We Are Ethereal Devs</h1>
        <p className="text-xl sm:text-2xl font-semibold">
          Web Solutions and Web Applications
        </p>
      </main>
    </section>
  )
}

function Section3() {
  const projects = [
    {
      title: "E-commerce Plataforma",
      description: "Desarrollo de una plataforma de comercio electrónico con características personalizadas.",
      image: "/placeholder.svg?height=300&width=500&text=Web+App",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Aplicación Web para Gestión",
      description: "Una aplicación web avanzada para la gestión de inventarios y pedidos en tiempo real.",
      image: "/placeholder.svg?height=300&width=500&text=Web+App",
      tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    },
    {
      title: "Landing Page Promocional",
      description: "Diseño y desarrollo de una landing page optimizada para conversiones y campañas publicitarias.",
      image: "/placeholder.svg?height=300&width=500&text=Landing+Page",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "A/B Testing"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-900 flex flex-col min-h-screen items-center justify-center snap-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Background")',
        }}
      />
      <main className="relative z-10 text-center text-white p-6 w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-100">
          Proyectos Que Inspiran
        </h2>
        <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Descubre cómo transformamos ideas en soluciones digitales innovadoras que impulsan el éxito de nuestros clientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/20 transition duration-300 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-xl transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition duration-300">{project.title}</h3>
              <p className="text-gray-400 mb-4 group-hover:text-white transition duration-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/projects">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </main>
    </section>
  );
}

function Section4() {
  return (
    <section className="relative bg-transparent flex flex-col min-h-screen items-center justify-center snap-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Tech+Background")',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-black opacity-75 via-[#0c0638] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-[#0c0638] to-transparent"></div>
      <main className="relative z-10 text-center text-white p-6 w-full max-w-6xl">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Hagamos Realidad Tu Visión Digital
        </h2>
        <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Estás a un paso de transformar tu idea en una poderosa solución digital. Nuestro equipo de expertos está listo para llevar tu proyecto al siguiente nivel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition duration-300">
            <Mail className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Contáctanos</h3>
            <p className="text-gray-300 mb-4">Cuéntanos sobre tu proyecto y te responderemos en 24 horas.</p>
            <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Enviar Mensaje <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition duration-300">
            <Phone className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Llámanos</h3>
            <p className="text-gray-300 mb-4">Habla directamente con uno de nuestros expertos en desarrollo.</p>
            <Button asChild size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
              <a href="tel:+123456789">
                Llamar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition duration-300">
            <Calendar className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Agenda una Cita</h3>
            <p className="text-gray-300 mb-4">Reserva una consulta gratuita de 30 minutos con nuestro equipo.</p>
            <Button asChild size="lg" className="w-full bg-pink-600 hover:bg-pink-700">
              <Link href="/schedule">
                Agendar Cita <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Confían en Nosotros</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=50&width=120&text=Client+${i}`}
                alt={`Client ${i} logo`}
                width={120}
                height={50}
                className="opacity-50 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>

        <div className="bg-white/5 z-40 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto">
          <p className="italic text-gray-300 mb-4">
            "Trabajar con Ethereal Devs fue una experiencia transformadora. Su equipo no solo entendió nuestra visión, sino que la elevó a un nivel que no creíamos posible. El resultado final superó todas nuestras expectativas."
          </p>
          <p className="font-semibold">
            María González, CEO de TechInnovate
          </p>
        </div>
      </main>
    </section>
  );
}
