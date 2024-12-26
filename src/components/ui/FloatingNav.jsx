"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className={cn(
          "fixed top-4 inset-x-4 max-w-xl mx-auto z-50",
          className
        )}
      >
        <div className="relative">
          {/* Desktop Navigation */}
          <div className={`hidden md:flex justify-center items-center p-2 ${scrolled ? 'bg-white' : 'bg-transparent'} border border-zinc-200 rounded-full shadow-md backdrop-blur-sm`}>
            <nav className="flex items-center justify-center">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm font-medium relative hover:text-secondary transition-colors font-alt px-3"
                  >
                    {item.name}
                  </a>
                  {index < navItems.length - 1 && (
                    <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden absolute left-0">
            <div className={`flex ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${scrolled ? 'bg-white' : 'bg-white/80'} rounded-full shadow-md backdrop-blur-sm border border-zinc-200`}
                aria-label="Menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span 
                    className={`block w-5 h-0.5 bg-primary transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                  />
                  <span 
                    className={`block w-5 h-0.5 bg-primary transition-opacity duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span 
                    className={`block w-5 h-0.5 bg-primary transform transition-transform duration-300 ease-in-out
                    ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                  />
                  
                  {/* Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-12 right-0 w-48 bg-white rounded-xl shadow-lg p-2 z-50"
                  >
                    <nav className="flex flex-col space-y-1">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          className="text-sm font-medium py-2 px-3 hover:bg-zinc-50 rounded-lg hover:text-secondary transition-colors font-alt"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 