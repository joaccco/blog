'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from 'lucide-react'

interface Booking {
    id: string
    title: string
    startTime: string
    endTime: string
    location: string
    status: string
}

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBookings() {
            try {
                const response = await fetch('/api/bookings')
                const data = await response.json()
                setBookings(data)
            } catch (error) {
                console.error('Error fetching bookings:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBookings()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#14132C] text-white p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#14132C] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Reservaciones</h1>
                <div className="grid gap-4">
                    {bookings.map((booking) => (
                        <Card key={booking.id} className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">{booking.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-gray-300">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>
                                            {new Date(booking.startTime).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>
                                            {new Date(booking.startTime).toLocaleTimeString()} -
                                            {new Date(booking.endTime).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{booking.location}</span>
                                    </div>
                                    <div className="mt-4">
                                        <span className={`px-2 py-1 rounded-full text-xs ${booking.status === 'confirmed'
                                                ? 'bg-green-500/20 text-green-300'
                                                : booking.status === 'cancelled'
                                                    ? 'bg-red-500/20 text-red-300'
                                                    : 'bg-yellow-500/20 text-yellow-300'
                                            }`}>
                                            {booking.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

