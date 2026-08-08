import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Discipline } from '../types';

interface DisciplineContextType {
  activeDiscipline: Discipline;
  setActiveDiscipline: (discipline: Discipline) => void;
  getAccentColor: () => string;
  getAccentGlow: () => string;
  getAccentShadow: () => string;
}

const DisciplineContext = createContext<DisciplineContextType | undefined>(undefined);

export const DisciplineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>('web');

  const getAccentColor = () => {
    switch (activeDiscipline) {
      case 'web': return '#6366f1'; // Indigo
      case 'android': return '#10b981'; // Emerald
      case 'design': return '#f43f5e'; // Rose
      case 'systems': return '#fbbf24'; // Amber
      default: return '#6366f1';
    }
  };

  const getAccentGlow = () => {
    switch (activeDiscipline) {
      case 'web': return 'rgba(99, 102, 241, 0.15)';
      case 'android': return 'rgba(16, 185, 129, 0.15)';
      case 'design': return 'rgba(244, 63, 94, 0.15)';
      case 'systems': return 'rgba(251, 191, 36, 0.15)';
      default: return 'rgba(99, 102, 241, 0.15)';
    }
  };

  const getAccentShadow = () => {
    switch (activeDiscipline) {
      case 'web': return 'glow-shadow-web';
      case 'android': return 'glow-shadow-android';
      case 'design': return 'glow-shadow-design';
      case 'systems': return 'glow-shadow-systems';
      default: return 'glow-shadow-web';
    }
  };

  return (
    <DisciplineContext.Provider value={{
      activeDiscipline,
      setActiveDiscipline,
      getAccentColor,
      getAccentGlow,
      getAccentShadow
    }}>
      {children}
    </DisciplineContext.Provider>
  );
};

export const useDiscipline = () => {
  const context = useContext(DisciplineContext);
  if (context === undefined) {
    throw new Error('useDiscipline must be used within a DisciplineProvider');
  }
  return context;
};
