import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiVolumeUp, HiCheck, HiX } from 'react-icons/hi';
import { useAudio } from '../hooks/useAudio';

export default function ListeningExercise({ phrase, onComplete }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const { speak } = useAudio();

  const playAudio = () => {
    setIsPlaying(true);
    speak(phrase.english, 'en-US');
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      onComplete();
    }, 3000);
  };

  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-medium text-center">
        Escucha y adivina la frase
      </h2>

      <button
        onClick={playAudio}
        disabled={isPlaying}
        className="btn-primary w-full"
      >
        <HiVolumeUp className="text-3xl" />
        <span>{isPlaying ? 'Reproduciendo...' : 'Escuchar frase'}</span>
      </button>

      <div className="space-y-4">
        <button
          onClick={revealAnswer}
          className="btn-secondary w-full"
        >
          Ver respuesta
        </button>

        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-xl p-4 text-center"
          >
            <p className="text-xl mb-2">{phrase.english}</p>
            <p className="text-gray-600">{phrase.spanish}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}