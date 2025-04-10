import { motion } from 'framer-motion';

export default function ProgressBar({ value, total }) {
  const percentage = (value / total) * 100;
  
  return (
    <div className="w-full bg-secondary rounded-full h-6 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-success"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}