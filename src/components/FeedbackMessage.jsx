import { motion } from 'framer-motion';
import { HiLightningBolt, HiHeart } from 'react-icons/hi';

export default function FeedbackMessage({ isCorrect, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`card text-center ${isCorrect ? 'bg-green-50' : 'bg-blue-50'}`}
    >
      <div className="flex items-center justify-center gap-3 text-2xl">
        {isCorrect ? (
          <>
            <HiLightningBolt className="text-yellow-500" />
            <span>¡Excelente! +{points} puntos</span>
          </>
        ) : (
          <>
            <HiHeart className="text-red-500" />
            <span>¡Sigue intentando!</span>
          </>
        )}
      </div>
      
      <p className="text-lg mt-2 text-gray-600">
        {isCorrect 
          ? '¡Cada vez lo haces mejor!' 
          : 'No te preocupes, la práctica hace al maestro'}
      </p>
    </motion.div>
  );
}