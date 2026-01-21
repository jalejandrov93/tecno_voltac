"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría obtener información sobre sus servicios."
    );
    window.open(`${COMPANY_INFO.whatsappLink}?text=${message}`, "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 p-4 max-w-xs border border-slate-100 dark:border-slate-700"
              >
                <button
                  onClick={handleCloseTooltip}
                  className="absolute -top-2 cursor-pointer -right-2 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  aria-label="Cerrar mensaje"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  ¿Necesita ayuda?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Escríbanos por WhatsApp y le atenderemos de inmediato.
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-slate-100 dark:border-slate-700 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className="group relative w-14 h-14 cursor-pointer md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
            tabIndex={0}
          >
            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

            <MessageCircle
              className="w-7 h-7 md:w-8 md:h-8 relative z-10"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
