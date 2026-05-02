import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type DashboardAircraft, type DashboardStats } from '../../types/dashboard';

const mockStats: DashboardStats = {
  aircrafts: 142,
  parts: 8934,
  stages: 56,
  tests: 1204
};

const mockAircrafts: DashboardAircraft[] = [
  { id: '1', identifier: 'AC-X901', model: 'Interceptor V2', currentPhase: 'Montagem Estrutural', status: 'Em Produção' },
  { id: '2', identifier: 'AC-X902', model: 'Cargo Heavy 500', currentPhase: 'Testes de Aviônicos', status: 'Revisão' },
  { id: '3', identifier: 'AC-X885', model: 'Interceptor V1', currentPhase: 'Inspeção Final', status: 'Alerta de Qualidade' },
  { id: '4', identifier: 'AC-X884', model: 'Interceptor V1', currentPhase: 'Entrega', status: 'Concluído' }
];

const getStatusClasses = (status: DashboardAircraft['status']) => {
  switch (status) {
    case 'Em Produção': return 'bg-secondary-fixed text-on-secondary-fixed';
    case 'Revisão': return 'bg-surface-variant text-on-surface-variant';
    case 'Alerta de Qualidade': return 'bg-tertiary-fixed text-on-tertiary-fixed';
    case 'Concluído': return 'bg-green-100 text-green-800';
    default: return 'bg-surface-variant text-on-surface-variant';
  }
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats] = useState<DashboardStats>(mockStats);
  const [aircrafts] = useState<DashboardAircraft[]>(mockAircrafts);

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
            <span className="font-label-md text-label-md text-on-surface-variant">User Name</span>
            <img 
              alt="Avatar" 
              className="w-8 h-8 rounded-full border border-outline-variant" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQf5RBJz0IjH7MZ8p432JAl3wXfMnpeAxR7Z1ndz23HggawSyphaGGG8zf6ahg6Y08_pPkL4AX2VMDy69ErvYytqhUMF8I7JlWNc_0K62q836pnnSQEZDQVXECKihPKegq3O0Rej_e2vty3g7Eaqx0ION6t2puO4JwjnUlMRrJQm-qNMbX1t0vmE5f7Crt9KeetAv_lj47KJmbFFh0MNV6Mgb3NHe3g70dbHWdnIabwBTdCvMjpEzJnD-sdpyo3xLF-1CFtBS6E_U" 
            />
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
            <Link to="/dashboard" className="flex items-center gap-md px-md py-sm bg-white text-primary border-l-4 border-primary font-bold">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/aeronaves" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">flight</span>
              <span>Aeronaves</span>
            </Link>
            <Link to="/pecas" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">settings_input_component</span>
              <span>Peças</span>
            </Link>
            <Link to="/etapas" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">account_tree</span>
              <span>Etapas</span>
            </Link>
            <Link to="/funcionarios" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">badge</span>
              <span>Funcionários</span>
            </Link>
            <Link to="/testes" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">biotech</span>
              <span>Testes</span>
            </Link>
            <Link to="/relatorios" className="flex items-center gap-md px-md py-sm text-on-surface-variant border-l-4 border-transparent hover:bg-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">analytics</span>
              <span>Relatórios</span>
            </Link>
          </nav>
        </aside>

        {/* Área Principal */}
        <main className="flex-1 overflow-y-auto bg-surface-container-low p-xl">
          <div className="max-w-7xl mx-auto space-y-xl">
            {/* Header & Botões Rápidos */}
            <div className="flex items-center justify-between">
              <h1 className="font-h1 text-h1 text-on-surface">Dashboard</h1>
              <div className="flex gap-sm">
                <button className="bg-surface-container-lowest border border-outline text-on-surface font-label-md text-label-md px-md py-sm rounded hover:shadow-sm transition-all flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Nova Peça
                </button>
                <button className="bg-surface-container-lowest border border-outline text-on-surface font-label-md text-label-md px-md py-sm rounded hover:shadow-sm transition-all flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Nova Etapa
                </button>
                <button className="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded hover:shadow-md transition-all flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Nova Aeronave
                </button>
              </div>
            </div>

            {/* 4 Cards de Resumo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Aeronaves</span>
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                    <span className="material-symbols-outlined">flight</span>
                  </div>
                </div>
                <div className="font-h1 text-h1 text-on-surface">{stats.aircrafts}</div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Peças</span>
                  <div className="w-8 h-8 rounded bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined">settings_input_component</span>
                  </div>
                </div>
                <div className="font-h1 text-h1 text-on-surface">{stats.parts.toLocaleString('pt-BR')}</div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Etapas</span>
                  <div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                    <span className="material-symbols-outlined">account_tree</span>
                  </div>
                </div>
                <div className="font-h1 text-h1 text-on-surface">{stats.stages}</div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Testes</span>
                  <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">biotech</span>
                  </div>
                </div>
                <div className="font-h1 text-h1 text-on-surface">{stats.tests.toLocaleString('pt-BR')}</div>
              </div>
            </div>

            {/* Lista de Últimas Aeronaves */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
              <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
                <h2 className="font-h3 text-h3 text-on-surface">Últimas aeronaves</h2>
                <Link to="/aeronaves" className="font-label-sm text-label-sm text-primary hover:underline">Ver todas</Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant font-label-sm text-label-sm text-on-surface-variant">
                      <th className="px-lg py-sm font-semibold">Identificador</th>
                      <th className="px-lg py-sm font-semibold">Modelo</th>
                      <th className="px-lg py-sm font-semibold">Fase Atual</th>
                      <th className="px-lg py-sm font-semibold">Status</th>
                      <th className="px-lg py-sm font-semibold text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface">
                    {aircrafts.map(aircraft => (
                      <tr key={aircraft.id} className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="px-lg py-md font-code">{aircraft.identifier}</td>
                        <td className="px-lg py-md">{aircraft.model}</td>
                        <td className="px-lg py-md">{aircraft.currentPhase}</td>
                        <td className="px-lg py-md">
                          <span className={`inline-flex items-center px-2 py-1 rounded font-label-sm text-label-sm ${getStatusClasses(aircraft.status)}`}>
                            {aircraft.status}
                          </span>
                        </td>
                        <td className="px-lg py-md text-right">
                          <button className="text-secondary hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
