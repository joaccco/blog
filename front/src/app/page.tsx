"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from 'lucide-react'
import ServicesSection from "../components/ServicesSection";
import { Mail, Phone, Calendar } from "lucide-react";
import EarthAnimation from '../components/EarthAnimation'
import MoonAnimation from '../components/MoonAnimation'
import { Poppins, Genos } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const genos = Genos({ subsets: ['latin'], weight: ['400'] });

export default function Home() {

  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
      <BackgroundGradients />
      <Section1 />

      <div className="my-24">
        <ServicesSection />
      </div>

      <Section3 />
      <Section4 />
    </div>
  );
}

function BackgroundGradients() {
  return (
    <div className="w-screen fixed">
      <div
        className="hidden absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 animate-wave"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
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
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-transparent text-white">
      {/* Space Illustration */}
      <EarthAnimation />

      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">Status: DISPONIBLE PARA PROYECTOS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Soluciones digitales
            <span className="block bg-gradient-to-r from-purple-200 to-indigo-300 bg-clip-text text-transparent">
              para el futuro
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg font-regular text-gray-300 mb-12 max-w-3xl">
            <span
              className={`${poppins.className} block`}
            >
              Creamos experiencias web innovadoras
              y aplicaciones personalizadas que transforman tu visión en realidad.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-3xl">
            <div className="grid grid-cols-2 max-w-full">
              <Button
                size="lg"
                className="col-span-1 w-full bg-indigo-100 text-indigo-900 font-bold p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-300/20 transition duration-300"
                asChild
              >
                <Link href="/form" className="flex justify-center items-center">
                  Iniciar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="col-span-1 w-full bg-indigo-600 text-white p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-300/20 transition duration-300"
                asChild
              >
                <Link href="/contact" className="flex justify-center items-center">
                  Contactar <ChevronDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <div className="col-span-2 mt-4">
                <Button
                  size="lg"
                  className="w-full text-white font-bold p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-300/20 transition duration-300"
                  asChild
                >
                  <Link href="/hiring" className="flex justify-center items-center">
                    ¿Como es el Proceso de Contrato?
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            {[
              { number: "10+", label: "Proyectos Completados" },
              { number: "98%", label: "Clientes Satisfechos" },
              { number: "2+", label: "Años de Experiencia" },
              { number: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="mt-16 w-full">
            <p className="text-sm text-gray-400 mb-6">EMPRESAS QUE CONFÍAN EN NOSOTROS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=30&width=80&text=Client+${i}`}
                    alt={`Client ${i}`}
                    width={80}
                    height={30}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MoonAnimation />
    </section>
  )
}




function Section3() {
  const projects = [
    {
      title: "E-commerce Plataforma",
      description:
        "Desarrollo de una plataforma de comercio electrónico con características personalizadas.",
      image: "/placeholder.svg?height=300&width=500&text=Web+App",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Aplicación Web para Gestión",
      description:
        "Una aplicación web avanzada para la gestión de inventarios y pedidos en tiempo real.",
      image: "/placeholder.svg?height=300&width=500&text=Web+App",
      tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    },
    {
      title: "Landing Page Promocional",
      description:
        "Diseño y desarrollo de una landing page optimizada para conversiones y campañas publicitarias.",
      image: "/placeholder.svg?height=300&width=500&text=Landing+Page",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "A/B Testing"],
    },
  ];

  return (
    <section className="relative bg-transparent flex flex-col min-h-screen items-center justify-center snap-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Background")',
        }}
      />
      <main className="relative z-10 text-center text-white p-6 w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-100">
          Proyectos Que Inspiran
        </h2>
        <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
          <span className={`${poppins.className} block`}>
            Descubre cómo transformamos ideas en soluciones digitales innovadoras
            que impulsan el éxito de nuestros clientes.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#222] p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/60 transition duration-300 overflow-hidden"
            >
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
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-violet-200 transition duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 group-hover:text-white transition duration-300">
                <span className={`${poppins.className} block`}>
                  {project.description}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-300/20 transition duration-300"
          >
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
          backgroundImage:
            'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Tech+Background")',
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-transparent"></div>
      <main className="relative z-10 text-center text-white p-6 w-full max-w-6xl">
        <h2 className="text-5xl mt-24 sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-100">
          Hagamos Realidad Tu Visión Digital
        </h2>
        <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Estás a un paso de transformar tu idea en una poderosa solución
          digital. Nuestro equipo de expertos está listo para llevar tu proyecto
          al siguiente nivel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#222] p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/60 transition duration-300 ">
            <Mail className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Contáctanos</h3>
            <p className="text-gray-300 mb-4">
              Cuéntanos sobre tu proyecto y te responderemos en 24 horas.
            </p>
            <Link className="flex" href="/contact">
              <Button
                asChild
                size="lg"
                className="w-full bg-indigo-600 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition duration-300  "
              >
                Contactar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-[#222] p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/60 transition duration-300 ">
            <Phone className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Hablanos al Whatsapp</h3>
            <p className="text-gray-300 mb-4">
              Habla directamente con uno de nuestros expertos en desarrollo.
            </p>
            <Link className="flex" href="tel:+123456789">
              <Button
                asChild
                size="lg"
                className="w-full bg-indigo-600 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition duration-300  "
              >
                Ir a Whatsapp<ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-[#222] p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/60 transition duration-300 ">
            <Calendar className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Agenda una Cita</h3>
            <p className="text-gray-300 mb-4">
              Reserva una consulta gratuita de 30 minutos con nuestro equipo.
            </p>
            <Link className="flex " href="https://cal.com/ethdevs">
              <Button
                asChild
                size="lg"
                className="w-full bg-indigo-600 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition duration-300  "
              >
                Agendar Cita <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link className="flex " href="/schedule">
              <Button
                asChild
                size="lg"
                className="w-full bg-indigo-600 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition duration-300  "
              >
                Schedule<ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            Trabajar con Ethereal Devs fue una experiencia transformadora. Su
            equipo no solo entendió nuestra visión, sino que la elevó a un nivel
            que no creíamos posible. El resultado final superó todas nuestras
            expectativas.
          </p>
          <p className="font-semibold">María González, CEO de TechInnovate</p>
        </div>
      </main>
    </section>
  );
}
