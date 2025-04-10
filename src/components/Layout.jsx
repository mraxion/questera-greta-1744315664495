import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import HelpButton from './HelpButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Layout() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => setShowHelp(!showHelp);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <HelpButton onClick={toggleHelp} />
      
      <main className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {showHelp ? (
            <motion.div
              key="help"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="card mb-6"
            >
              <h2 className="text-2xl font-bold text-text mb-4">Ayuda Rápida</h2>
              <ul className="space-y-4 text-lg">
                <li>• Toque "Escuchar" para oír la pronunciación</li>
                <li>• Use "Siguiente" para ver más frases</li>
                <li>• Vea su progreso en la sección "Progreso"</li>
                <li>• ¿Necesita más ayuda? Vaya a "Ayuda" abajo</li>
              </ul>
            </motion.div>
          ) : null}
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Navigation />
    </div>
  );
}