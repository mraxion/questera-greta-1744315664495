import { motion } from 'framer-motion';
import { HiLightBulb, HiVolumeUp, HiChatAlt, HiAcademicCap } from 'react-icons/hi';

export default function Help() {
  const helpSections = [
    {
      icon: HiLightBulb,
      title: "Consejos básicos",
      items: [
        "Practique un poco cada día",
        "Escuche la pronunciación varias veces",
        "No se preocupe por los errores",
        "Use las frases en situaciones reales"
      ]
    },
    {
      icon: HiVolumeUp,
      title: "Uso del audio",
      items: [
        "Toque el botón azul con el altavoz",
        "Puede escuchar cada frase dos veces",
        "Use audífonos si el ambiente es ruidoso",
        "Repita las frases en voz alta"
      ]
    },
    {
      icon: HiChatAlt,
      title: "Práctica",
      items: [
        "Elija respuestas tocando los botones",
        "Practique sin presión de tiempo",
        "Revise su progreso regularmente",
        "Celebre sus logros"
      ]
    },
    {
      icon: HiAcademicCap,
      title: "Aprendizaje",
      items: [
        "Comience con frases básicas",
        "Use el contexto para recordar mejor",
        "Practique con familiares",
        "Anote las frases que más usa"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-text mb-6"
      >
        Centro de Ayuda
      </motion.h1>

      <div className="grid gap-6">
        {helpSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="text-3xl text-primary" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2 text-lg">
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="card bg-blue-50 mt-8"
      >
        <h2 className="text-xl font-semibold mb-4">¿Necesita más ayuda?</h2>
        <p className="text-lg">
          Pídale a un familiar o amigo que le ayude a practicar las frases. 
          ¡El aprendizaje es mejor cuando se hace en compañía!
        </p>
      </motion.div>
    </div>
  );
}