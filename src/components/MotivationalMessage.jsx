import { motion } from 'framer-motion';

const messages = {
  beginner: [
    "¡Excelente comienzo! Cada frase te acerca más a tu meta.",
    "¡Vas por buen camino! El inglés será tu nuevo amigo."
  ],
  intermediate: [
    "¡Increíble progreso! Ya puedes mantener conversaciones básicas.",
    "¡Estás creando un hábito fantástico! Sigue así."
  ],
  advanced: [
    "¡Eres una inspiración! Tu dedicación está dando frutos.",
    "¡Extraordinario! Estás dominando el inglés día a día."
  ]
};

export default function MotivationalMessage({ level, className }) {
  const getRandomMessage = (level) => {
    const levelMessages = messages[level];
    return levelMessages[Math.floor(Math.random() * levelMessages.length)];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center p-4 ${className}`}
    >
      <p className="text-lg text-text font-medium">
        {getRandomMessage(level)}
      </p>
    </motion.div>
  );
}