'use client';

import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ClientWrapper({ children }) {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
