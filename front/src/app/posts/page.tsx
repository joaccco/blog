"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

// Mock data for news posts
const newsPosts = [
    {
        id: 1,
        title: "Lanzamiento de Nuestra Nueva Plataforma de E-commerce",
        excerpt: "Descubre cómo nuestra última solución está revolucionando el comercio electrónico para pequeñas y medianas empresas.",
        date: "2023-05-15",
        author: "Ana Martínez",
        category: "Lanzamientos",
        image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform"
    },
    {
        id: 2,
        title: "Ethereal Devs Gana Premio a la Innovación Tecnológica",
        excerpt: "Nos enorgullece anunciar que hemos sido reconocidos por nuestro compromiso con la innovación en el desarrollo web.",
        date: "2023-06-02",
        author: "Carlos Rodríguez",
        category: "Reconocimientos",
        image: "/placeholder.svg?height=400&width=600&text=Innovation+Award"
    },
    {
        id: 3,
        title: "Caso de Éxito: Transformación Digital para Industria Manufacturera",
        excerpt: "Descubre cómo ayudamos a una empresa líder en manufactura a optimizar sus procesos a través de soluciones digitales personalizadas.",
        date: "2023-06-20",
        author: "Laura Sánchez",
        category: "Casos de Éxito",
        image: "/placeholder.svg?height=400&width=600&text=Manufacturing+Digital+Transformation"
    },
];

export default function NewsPage() {
    return (
        <div className="min-h-screen overflow-y-auto bg-transparent text-white">
            <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-16">
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-pink-100"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Novedades y Actualizaciones
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Mantente al día con las últimas noticias, lanzamientos y logros de Ethereal Devs.
                        </motion.p>
                    </header>

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {newsPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-400 mb-2">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                        <User className="w-4 h-4 ml-4 mr-2" />
                                        <span>{post.author}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2 hover:text-purple-400 transition duration-300">
                                        <Link href={`/news/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900 text-purple-200">
                                            <Tag className="w-4 h-4 mr-1" />
                                            {post.category}
                                        </span>
                                        <Button
                                            asChild
                                            variant="link"
                                            className="text-purple-400 hover:text-purple-300"
                                        >
                                            <Link href={`/news/${post.id}`} className="flex items-center">
                                                Leer más <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button
                            asChild
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/20 transition duration-300"
                        >
                            <Link href="/news/archive">Ver Todas las Noticias</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}


