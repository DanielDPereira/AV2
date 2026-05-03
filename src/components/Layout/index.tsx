import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/aeronaves', icon: 'flight', label: 'Aeronaves' },
    { path: '/pecas', icon: 'settings_input_component', label: 'Peças' },
    { path: '/etapas', icon: 'account_tree', label: 'Etapas' },
    { path: '/funcionarios', icon: 'badge', label: 'Funcionários' },
    { path: '/testes', icon: 'biotech', label: 'Testes' },
    { path: '/relatorios', icon: 'analytics', label: 'Relatórios' },
  ];

  return (
    <div className="bg-surface-container-low text-on-surface font-body-md text-body-md antialiased h-screen overflow-hidden flex flex-col">
      {/* Header Fixo */}
      <nav className="fixed top-0 w-full z-50 h-16 bg-white border-b border-outline-variant flex items-center justify-between px-8">
        <div className="flex items-center gap-xl">
          <span className="text-xl font-bold tracking-tighter text-primary">Aerocode</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest hidden md:block">Sistema de Gestão Industrial</span>
        </div>
        <div className="flex items-center gap-lg">
          <div className="flex items-center gap-sm">
            <span className="font-label-md text-label-md text-on-surface-variant">Daniel Dias</span>
            <div
              aria-label="Avatar do utilizador"
              className="w-8 h-8 rounded-full border border-outline-variant bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm select-none"
            >
              DD
            </div>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="font-label-sm text-label-sm text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            Sair
          </button>
        </div>
      </nav>

      <div className="flex flex-1 pt-16 h-full">
        {/* Sidebar Fixa */}
        <aside className="w-64 h-full bg-surface-container border-r border-outline-variant flex flex-col py-6">
          <nav className="flex-1 flex flex-col space-y-1">
            {menuItems.map(item => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`flex items-center gap-md px-md py-sm transition-colors ${
                    isActive 
                      ? 'bg-white text-primary border-l-4 border-primary font-bold' 
                      : 'text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Área Principal */}
        <main className="flex-1 overflow-y-auto bg-surface-container-low relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
