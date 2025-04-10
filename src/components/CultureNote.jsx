import { motion } from 'framer-motion';
import { HiInformationCircle } from 'react-icons/hi';

export default function CultureNote({ title, content, region }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card bg-purple-50"
    >
      <div className="flex items-start gap-3">
        <HiInformationCircle className="text-2xl text-purple-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-lg text-gray-700">{content}</p>
          {region && (
            <p className="text-purple-600 mt-2 text-sm">
              Relevante en: {region}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}