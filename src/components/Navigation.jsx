import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiAcademicCap, HiPencil, HiChartBar, HiQuestionMarkCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { to: '/', icon: HiHome, label: 'Inicio' },
    { to: '/learn', icon: HiAcademicCap, label: 'Aprender' },
    { to: '/practice', icon: HiPencil, label: 'Practicar' },
    { to: '/progress', icon: HiChartBar, label: 'Progreso' },
    { to: '/help', icon: HiQuestionMarkCircle, label: 'Ayuda' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-gray-100 pb-safe-area">
      <div className="grid grid-cols-5 gap-1 p-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center p-3 rounded-xl relative
                ${isActive ? 'text-primary' : 'text-text'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="navBackground"
                  className="absolute inset-0 bg-blue-50 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <Icon className="text-3xl relative" />
              <span className="text-base mt-1 font-medium relative">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}