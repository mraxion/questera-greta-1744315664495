import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

export default function AchievementBadge({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg p-4 shadow-md flex items-center gap-4"
    >
      <div className="bg-primary rounded-full p-2">
        <HiStar className="text-2xl text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-text">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}