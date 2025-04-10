import { motion } from 'framer-motion';

export default function ExerciseProgress({ current, total }) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">
            Ejercicio {current} de {total}
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-primary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(current / total) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}