import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-lg bg-slate-800/50 animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative overflow-hidden rounded-xl border-2 border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-800/50 dark:bg-slate-800/50 bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400 transition-transform group-hover:rotate-180" />
        ) : (
          <Moon className="h-5 w-5 text-blue-600 transition-transform group-hover:-rotate-12" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
