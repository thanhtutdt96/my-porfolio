import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dracula';

const STORAGE_KEY = 'theme-mode';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dracula';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dracula') return stored;

  return 'dracula';
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
  const isDarkMode = theme === 'dracula';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dracula' ? 'light' : 'dracula'));

  return { theme, setTheme, toggle, isDarkMode } as const;
}
