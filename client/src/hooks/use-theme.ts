import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    
    // Then check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
