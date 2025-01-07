'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { calConfig } from "@/lib/cal-config";

export default function SchedulePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initCal = async () => {
            try {
                const cal = await getCalApi();
                cal("inline", {
                    elementOrSelector: "#cal-booking-place",
                    calLink: `${calConfig.username}/${calConfig.eventTypes.consultation}`,
                    config: {
                        theme: calConfig.theme,
                        hideEventTypeDetails: false,
                        layout: "month_view",
                        name: 'Consulta Inicial',
                        styles: calConfig.styles
                    }
                });
                setIsLoading(false);
            } catch (err) {
                console.error('Error initializing Cal:', err);
                setError('Failed to load the calendar. Please try again later.');
                setIsLoading(false);
            }
        };

        initCal();
    }, []);

    return (
        <div className="min-h-screen bg-[#14132C] text-white">
            <div className="max-w-4xl mx-auto p-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Agenda una Consulta</h1>
                    <p className="text-gray-300">
                        Selecciona el horario que mejor te convenga para una consulta inicial de 30 minutos.
                    </p>
                </div>

                <div
                    id="cal-booking-place"
                    className="min-h-[700px] rounded-xl overflow-hidden bg-gray-900 shadow-xl border border-gray-800"
                >
                    {isLoading && (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
                                <p className="text-gray-400">Cargando calendario...</p>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center text-red-500">
                                <p>{error}</p>
                                <Button
                                    onClick={() => window.location.reload()}
                                    variant="outline"
                                    className="mt-4"
                                >
                                    Intentar de nuevo
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8">
                    <Button
                        onClick={() => window.history.back()}
                        variant="outline"
                        className="text-gray-300 hover:text-white"
                    >
                        ← Volver
                    </Button>
                </div>
            </div>
        </div>
    );
}

