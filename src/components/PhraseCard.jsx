import { motion } from 'framer-motion';
import { HiVolumeUp, HiArrowRight, HiGlobe } from 'react-icons/hi';
import { useAudio } from '../hooks/useAudio';

export default function PhraseCard({ phrase, onNext }) {
  const { speak, repeatAudio } = useAudio();

  const handleSpeak = () => {
    repeatAudio(phrase.english, 'en-US', 2, 2000); // Repeat twice with 2s interval
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="card max-w-lg mx-auto"
    >
      <img 
        src={phrase.image} 
        alt={phrase.spanish}
        className="w-full h-56 object-cover rounded-xl mb-6"
        loading="lazy"
      />
      
      <div className="space-y-6">
        {/* Phrase Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-text">{phrase.english}</h2>
          <p className="text-xl text-gray-600">{phrase.spanish}</p>
        </div>
        
        {/* Pronunciation Guide */}
        <div className="bg-blue-50 rounded-xl p-4 space-y-2">
          <h3 className="text-lg font-medium">Pronunciación:</h3>
          <p className="text-lg">{phrase.pronunciation}</p>
          <p className="text-gray-600">{phrase.pronunciationTip}</p>
        </div>

        {/* Context and Example */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-lg">{phrase.context}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-medium">Ejemplo:</p>
            <p className="text-lg">{phrase.example}</p>
            <p className="text-gray-600">{phrase.exampleSpanish}</p>
          </div>
        </div>

        {/* Region Info */}
        {phrase.region !== 'BOTH' && (
          <div className="flex items-center gap-2 text-gray-600">
            <HiGlobe className="text-xl" />
            <span>
              Común en: {phrase.region === 'US' ? 'Estados Unidos' : 'Reino Unido'}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={handleSpeak}
            className="btn-primary"
            aria-label="Escuchar pronunciación"
          >
            <HiVolumeUp className="text-3xl" />
            <span>Escuchar (2 veces)</span>
          </button>

          <button
            onClick={onNext}
            className="btn-secondary"
            aria-label="Siguiente frase"
          >
            <span>Siguiente frase</span>
            <HiArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}