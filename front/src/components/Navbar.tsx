'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Menu, X, User } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/about' },
  { name: 'Nuestro Trabajo', href: '/projects' },
  { name: 'Contacto', href: '/contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Simulated auth state
  const [showUserMenu, setShowUserMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">Ethereal</span>
            </Link>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="relative h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                    aria-label="User menu"
                  >
                    <User className="h-5 w-5 text-white" />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuración</a>
                        <a href="#" onClick={() => setIsAuthenticated(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesión</a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthenticated(true)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Iniciar Sesión
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <p>Menu</p>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-24 right-8 w-[400px] bg-[#f2f2f2] rounded-[32px] z-40 shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center p-6">
              <span className="text-black text-xl font-bold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-6 pb-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={itemVariants}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-black hover:bg-white transition p-6 rounded-2xl text-4xl flex items-center justify-start font-bold hover:text-gray-600 py-3"
                  >
                    <span className="mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 20 20"
                        className="text-black"
                      >
                        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                          <path d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 10 10.293 6.707a1 1 0 0 1 0-1.414z" />
                          <path d="M4 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
                        </g>
                      </svg>
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

