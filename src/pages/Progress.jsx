import { useProgress } from '../context/ProgressContext';
import ProgressBar from '../components/ProgressBar';
import AchievementBadge from '../components/AchievementBadge';
import MotivationalMessage from '../components/MotivationalMessage';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

export default function Progress() {
  const { progress } = useProgress();
  const totalPhrases = 50; // Total number of phrases available
  
  const getLevel = () => {
    if (progress.phrasesLearned < 10) return 'beginner';
    if (progress.phrasesLearned < 30) return 'intermediate';
    return 'advanced';
  };

  const achievements = [
    {
      id: 'first-phrase',
      title: '¡Primera frase aprendida!',
      description: 'Has comenzado tu viaje al inglés',
      threshold: 1
    },
    {
      id: 'five-phrases',
      title: '¡5 frases dominadas!',
      description: 'Estás construyendo tu vocabulario',
      threshold: 5
    },
    {
      id: 'ten-phrases',
      title: '¡10 frases en tu repertorio!',
      description: 'Ya puedes tener conversaciones básicas',
      threshold: 10
    }
  ];

  const handleDownloadProgress = () => {
    // Implementation for downloading progress report as PDF
    // This is a placeholder for the actual implementation
    alert('Descargando tu progreso...');
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-text mb-4">Tu Progreso</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Frases aprendidas: {progress.phrasesLearned} de {totalPhrases}
            </p>
            <ProgressBar 
              value={progress.phrasesLearned} 
              total={totalPhrases} 
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-text">
              Puntos totales: {progress.points}
            </p>
            {progress.points >= 20 && (
              <button
                onClick={handleDownloadProgress}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <HiDownload className="text-xl" />
                <span>Descargar PDF</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <MotivationalMessage 
        level={getLevel()} 
        className="bg-white rounded-xl p-6 shadow-lg"
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-text">Logros</h3>
        {achievements.map(achievement => (
          progress.phrasesLearned >= achievement.threshold && (
            <AchievementBadge
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
            />
          )
        ))}
      </div>
    </div>
  );
}