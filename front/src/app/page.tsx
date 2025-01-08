"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from 'lucide-react'
import ServicesSection from "../components/ServicesSection";
import { SendHorizontal, PhoneCall, CalendarDays, Twitter, Linkedin, Instagram } from 'lucide-react'
import EarthAnimation from '../components/EarthAnimation'
import MoonAnimation from '../components/MoonAnimation'
import { Poppins, Genos } from 'next/font/google';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const genos = Genos({ subsets: ['latin'], weight: ['400'] });

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Típicamente, una landing page puede tomar 2-3 semanas, mientras que aplicaciones más complejas pueden llevar 2-4 meses."
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer: "Utilizamos las últimas tecnologías web como React, Next.js, Node.js, y bases de datos modernas. La stack específica se elige según las necesidades de cada proyecto."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Sí, ofrecemos planes de soporte y mantenimiento continuo para asegurar que tu aplicación funcione perfectamente y se mantenga actualizada."
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer: "Nuestro proceso incluye: 1) Consulta inicial y planificación, 2) Diseño y aprobación, 3) Desarrollo y pruebas, 4) Lanzamiento y soporte. Mantenemos una comunicación constante durante todo el proceso."
  }
]

const navigation = [
  { name: 'Novedades', href: '/' },
  { name: 'Nuestros Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Conoce nuestra Historia', href: '#about' },
]

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
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e346ff] to-[#776fff] opacity-20 animate-wave"
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
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#544bff] to-[#0062f4] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

export function Section1() {
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
            <span className={`${poppins.className} block`}>
              Creamos experiencias web innovadoras
              y aplicaciones personalizadas que transforman tu visión en realidad.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 mb-16 w-full max-w-md">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-indigo-500/50 transition duration-300 ease-in-out transform hover:-translate-y-1"
              asChild
            >
              <Link href="/form" className="flex justify-center items-center">
                Iniciar Proyecto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent text-white font-bold py-4 px-8 rounded-full shadow-lg border-2 border-indigo-500 hover:bg-indigo-500/10 hover:shadow-indigo-500/30 transition duration-300 ease-in-out transform hover:-translate-y-1"
              asChild
            >
              <Link href="/contact" className="flex justify-center items-center">
                Contactar <ChevronDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/20 hover:shadow-purple-500/20 transition duration-300 ease-in-out transform hover:-translate-y-1"
              asChild
            >
              <Link href="/process" className="flex justify-center items-center">
                ¿Cómo es el Proceso de Contrato?
              </Link>
            </Button>
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
        <h2 className="text-3xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-100">
          Proyectos Que Inspiran
        </h2>
        <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
          <span className={`${poppins.className} block`}>
            Descubre cómo transformamos ideas en soluciones digitales innovadoras
            que impulsan el éxito de nuestros clientes.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/60 transition duration-300 overflow-hidden"
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
                <span className={`${poppins.className} block text-sm`}>
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
    <section className="relative bg-transparent flex flex-col min-h-screen items-center justify-center snap-center overflow-hidden rounded-3xl border border-gray-800">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-5" style={{
        backgroundImage: 'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Tech+Background")'
      }} />
      <main className="relative z-10 text-center text-white p-8 w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
          Hagamos Realidad Tu Visión Digital
        </h2>
        <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
          <span className={`${poppins.className} block`}>
            Estás a un paso de transformar tu idea en una poderosa solución digital.
            Nuestro equipo de expertos está listo para llevar tu proyecto al siguiente nivel.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <SendHorizontal className="w-8 h-8 text-indigo-400" />,
              title: "Contáctanos",
              description: "Cuéntanos sobre tu proyecto y te responderemos en 24 horas.",
              action: "Contactar",
              href: "/contact"
            },
            {
              icon: <PhoneCall className="w-8 h-8 text-indigo-400" />,
              title: "Háblanos al WhatsApp",
              description: "Habla directamente con uno de nuestros expertos en desarrollo.",
              action: "Ir a WhatsApp",
              href: "https://wa.me/yourwhatsapp"
            },
            {
              icon: <CalendarDays className="w-8 h-8 text-indigo-400" />,
              title: "Agenda una Cita",
              description: "Reserva una consulta gratuita de 30 minutos con nuestro equipo.",
              action: "Agendar Cita",
              href: "https://cal.com/ethdevs"
            }
          ].map((option, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-indigo-500/50 hover:shadow-purple-500/60 transition duration-300">
              {option.icon}
              <h3 className="text-xl font-semibold my-4">{option.title}</h3>
              <p className="text-gray-400 mb-6"> <span className={`${poppins.className} block text-sm`}>
                {option.description}
              </span></p>
              <Button asChild size="lg" className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700">
                <Link href={option.href}>
                  {option.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Navegación Rápida</h3>
            <nav className="grid grid-cols-2 gap-4 mb-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Confían en Nosotros</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=40&width=100&text=Client+${i}`}
                alt={`Client ${i} logo`}
                width={100}
                height={40}
                className="opacity-40 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto border border-gray-800 mb-16">
          <p className="italic text-gray-300 mb-4">
            Trabajar con Ethereal Devs fue una experiencia transformadora. Su equipo no solo entendió nuestra visión, sino que la elevó a un nivel que no creíamos posible. El resultado final superó todas nuestras expectativas.
          </p>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40&text=MG"
              alt="María González"
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">María González</p>
              <p className="text-sm text-gray-400">CEO de TechInnovate</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
