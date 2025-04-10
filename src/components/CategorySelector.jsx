import { motion } from 'framer-motion';
import { categories } from '../data/phrases';

const categoryIcons = {
  daily: "🌞",
  shopping: "🛒",
  health: "⚕️",
  tech: "📱",
  travel: "✈️"
};

const categoryNames = {
  daily: "Día a día",
  shopping: "Compras",
  health: "Salud",
  tech: "Tecnología",
  travel: "Viajes"
};

export default function CategorySelector({ selectedCategory, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {Object.entries(categories).map(([key, value]) => (
        <motion.button
          key={key}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(value)}
          className={`card p-4 flex flex-col items-center justify-center gap-2
            ${selectedCategory === value ? 'border-primary border-2' : ''}`}
        >
          <span className="text-3xl">{categoryIcons[value]}</span>
          <span className="text-lg font-medium">{categoryNames[value]}</span>
        </motion.button>
      ))}
    </div>
  );
}