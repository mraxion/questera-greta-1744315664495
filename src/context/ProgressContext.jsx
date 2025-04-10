import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      points: 0,
      phrasesLearned: 0,
      completedLessons: [],
      achievements: [],
      lastMotivationalMessage: null,
      streakDays: 0,
      lastStudyDate: null
    };
  });

  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  }, [progress]);

  const addPoints = (points) => {
    setProgress(prev => ({
      ...prev,
      points: prev.points + points
    }));
  };

  const addPhrase = () => {
    const today = new Date().toISOString().split('T')[0];
    
    setProgress(prev => {
      const isNewDay = prev.lastStudyDate !== today;
      const streakDays = isNewDay ? prev.streakDays + 1 : prev.streakDays;
      
      return {
        ...prev,
        phrasesLearned: prev.phrasesLearned + 1,
        streakDays,
        lastStudyDate: today
      };
    });
  };

  const checkAchievements = () => {
    // Implementation for checking and awarding achievements
    // This would be called after significant actions
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      addPoints, 
      addPhrase,
      checkAchievements 
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);