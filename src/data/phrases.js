export const categories = {
  DAILY: 'daily',
  SHOPPING: 'shopping',
  HEALTH: 'health',
  TECH: 'tech',
  TRAVEL: 'travel'
};

export const phrases = [
  {
    id: 1,
    category: categories.DAILY,
    english: "Good morning",
    spanish: "Buenos días",
    pronunciation: "gud mor-ning",
    pronunciationTip: "Como decir 'gud' y 'morning' juntos",
    context: "Para saludar por la mañana",
    example: "Good morning! How are you?",
    exampleSpanish: "¡Buenos días! ¿Cómo estás?",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    region: "BOTH", // US, UK, o BOTH
    difficulty: 1
  },
  {
    id: 2,
    category: categories.TECH,
    english: "How do I send a WhatsApp message?",
    spanish: "¿Cómo envío un mensaje de WhatsApp?",
    pronunciation: "jau du ai send a wotsap mes-ech",
    pronunciationTip: "'jau' como en 'auto'",
    context: "Para pedir ayuda con WhatsApp",
    example: "How do I send a WhatsApp message to my daughter?",
    exampleSpanish: "¿Cómo envío un mensaje de WhatsApp a mi hija?",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    region: "BOTH",
    difficulty: 2
  },
  // Add more phrases...
];