/* 'use client';

import React, { useRef, useEffect } from 'react';

interface SketchfabEmbedProps {
  scrollY: number;
}

interface SketchfabAPIClient {
  start: () => void;
  stop: () => void;
  setRotation: (x: number, y: number, z: number) => void;
  addEventListener: (event: string, callback: () => void) => void;
}

const SketchfabEmbed: React.FC<SketchfabEmbedProps> = ({ scrollY }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let api: SketchfabAPIClient | null = null;

    const initSketchfabAPI = () => {
      if (window.Sketchfab) {
        const client = new window.Sketchfab('1.12.1', iframeRef.current);
        client.init((apiClient: SketchfabAPIClient) => {
          api = apiClient;
          api.start();
          api.addEventListener('viewerready', () => {
            console.log('Viewer is ready');
          });
        });
      }
    };

    if (iframeRef.current) {
      initSketchfabAPI();
    }

    // Cleanup: Detener la API cuando el componente se desmonte
    return () => {
      if (api) {
        api.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current && scrollY !== undefined) {
      const rotationY = (scrollY % 360) * (Math.PI / 180); // Convertir grados a radianes
      (iframeRef.current as any).api?.setRotation(0, rotationY, 0); // Manejo seguro del objeto `api`
    }
  }, [scrollY]);

  return (
    <div className="fixed bottom-0 right-0 w-[75vw] h-[75vw] max-w-[800px] max-h-[800px] pointer-events-none">
      <iframe
        ref={iframeRef}
        title="Hexagon Planet Earth"
        className="w-full h-full"
        style={{
          border: 'none',
          transform: 'translate(25%, 25%)', // Mover 1/4 del tamaño hacia abajo y a la derecha
        }}
        src="https://sketchfab.com/models/786616e01204449293f3cc35d4723009/embed?autospin=0&autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
};

export default SketchfabEmbed;
 */