import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { phrases } from '../data/phrases';
import { HiVolumeUp, HiCheck, HiX } from 'react-icons/hi';
import { useAudio } from '../hooks/useAudio';

export default function Practice() {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { addPoints } = useProgress();
  const { speak } = useAudio();

  useEffect(() => {
    generateNewExercise();
  }, []);

  const generateNewExercise = () => {
    const exerciseTypes = ['listen', 'select'];
    const type = exerciseTypes[Math.floor(Math.random() * exerciseTypes.length)];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // Generate 3 random options plus the correct one
    let exerciseOptions = [phrase];
    while (exerciseOptions.length < 4) {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      if (!exerciseOptions.includes(randomPhrase)) {
        exerciseOptions.push(randomPhrase);
      }
    }
    
    // Shuffle options
    exerciseOptions = exerciseOptions.sort(() => Math.random() - 0.5);

    setCurrentExercise({ type, phrase });
    setOptions(exerciseOptions);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    
    const isCorrect = option === currentExercise.phrase;
    if (isCorrect) {
      addPoints(5);
    }

    // Move to next exercise after delay
    setTimeout(() => {
      generateNewExercise();
    }, 2000);
  };

  const playAudio = () => {
    speak(currentExercise.phrase.english);
  };

  if (!currentExercise) return null;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-text mb-6">
          {currentExercise.type === 'listen' 
            ? '¿Qué frase escuchas?' 
            : '¿Cuál es la traducción correcta?'}
        </h2>

        {currentExercise.type === 'listen' ? (
          <button
            onClick={playAudio}
            className="btn-primary w-full mb-6"
          >
            <HiVolumeUp className="text-3xl" />
            <span>Escuchar frase</span>
          </button>
        ) : (
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="text-xl text-center">{currentExercise.phrase.english}</p>
          </div>
        )}

        <div className="grid gap-4">
          {options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`btn-secondary relative ${
                showFeedback && option === currentExercise.phrase
                  ? 'bg-green-100 border-green-500'
                  : showFeedback && option === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : ''
              }`}
              disabled={showFeedback}
              whileHover={!showFeedback ? { scale: 1.02 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
            >
              <span className="text-xl">
                {currentExercise.type === 'listen' 
                  ? option.english 
                  : option.spanish}
              </span>
              
              {showFeedback && option === currentExercise.phrase && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 text-green-500"
                >
                  <HiCheck className="text-2xl" />
                </motion.div>
              )}
              
              {showFeedback && option === selectedAnswer && option !== currentExercise.phrase && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 text-red-500"
                >
                  <HiX className="text-2xl" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`card text-center ${
              selectedAnswer === currentExercise.phrase
                ? 'bg-green-50'
                : 'bg-red-50'
            }`}
          >
            <p className="text-xl font-medium">
              {selectedAnswer === currentExercise.phrase
                ? '¡Muy bien! 🎉'
                : 'No te preocupes, sigue intentando 💪'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}