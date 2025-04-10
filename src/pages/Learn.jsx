import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PhraseCard from '../components/PhraseCard';
import { phrases } from '../data/phrases';
import { useProgress } from '../context/ProgressContext';

export default function Learn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addPhrase, addPoints } = useProgress();

  const handleNext = () => {
    addPoints(5);
    addPhrase();
    setCurrentIndex((prev) => (prev + 1) % phrases.length);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <PhraseCard
          key={currentIndex}
          phrase={phrases[currentIndex]}
          onNext={handleNext}
        />
      </AnimatePresence>
      
      <div className="mt-6 text-center text-gray-600">
        <p>Frase {currentIndex + 1} de {phrases.length}</p>
      </div>
    </div>
  );
}