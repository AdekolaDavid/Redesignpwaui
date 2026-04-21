import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { NewTicket } from './components/NewTicket';
import { TicketsList } from './components/TicketsList';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [showSplash, setShowSplash] = useState(true);

  const navigate = (path: string) => {
    setCurrentPath(path);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Dashboard onNavigate={navigate} />;
      case '/new-ticket':
        return <NewTicket onNavigate={navigate} />;
      case '/tickets':
        return <TicketsList onNavigate={navigate} />;
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <ThemeProvider>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="min-h-screen">
        <div className="fixed right-6 top-6 z-50">
          <ThemeToggle />
        </div>
        {renderPage()}
      </div>
    </ThemeProvider>
  );
}