import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { type Funcionario, mockFuncionarios } from '../../types/funcionarios';

const Funcionarios: React.FC = () => {
  const navigate = useNavigate();
  const [funcionarios] = useState<Funcionario[]>(mockFuncionarios);

  return (
    <div className="bg-background text-on-background antialiased min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-8 max-w-full">
        <div className="flex items-center gap-md">
          <span className="text-xl font-bold tracking-tighter text-blue-800 dark:text-blue-400">Aerocode</span>
        </div>
        <div className="flex items-center gap-lg">
          <span className="font-inter antialiased text-slate-900 dark:text-slate-100 font-medium text-sm">User Name</span>
          <button 
            onClick={() => navigate('/login')}
            className="font-inter antialiased text-slate-900 dark:text-slate-100 hover:text-blue-800 dark:hover:text-blue-300 transition-colors active:opacity-80 flex items-center gap-xs font-medium text-sm"
          >
            <span>Logout</span>
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 space-y-1">
        <div className="px-6 mb-4">
          <span className="font-inter text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase text-xs">System Management</span>
        </div>
        <nav className="flex flex-col space-y-1">
          <Link to="/dashboard" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/aeronaves" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">flight</span>
            <span>Aeronaves</span>
          </Link>
          <Link to="/pecas" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">settings_input_component</span>
            <span>Peças</span>
          </Link>
          <Link to="/etapas" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">account_tree</span>
            <span>Etapas</span>
          </Link>
          <Link to="/funcionarios" className="bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-300 border-l-4 border-blue-800 font-bold active:opacity-80 transition-all flex items-center gap-3 px-6 py-3 font-inter text-sm tracking-wide">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
            <span>Funcionários</span>
          </Link>
          <Link to="/testes" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">biotech</span>
            <span>Testes</span>
          </Link>
          <Link to="/relatorios" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-3 px-6 py-3 font-inter text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined">analytics</span>
            <span>Relatórios</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 pt-16 min-h-screen bg-background">
        <div className="p-xl max-w-[1200px] mx-auto w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center text-on-surface-variant font-label-sm text-label-sm mb-lg">
            <span className="hover:text-primary transition-colors cursor-pointer">System Management</span>
            <span className="material-symbols-outlined mx-xs text-[16px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Funcionários</span>
          </nav>

          {/* Page Header */}
          <header className="flex items-center justify-between mb-xl">
            <div>
              <h1 className="font-h1 text-h1 text-on-surface">Funcionários</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Gerencie o diretório de pessoal e níveis de acesso ao sistema.</p>
            </div>
            <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-sm rounded-DEFAULT hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all font-label-md text-label-md active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Novo Funcionário</span>
            </button>
          </header>

          {/* Data Table Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* Toolbar */}
            <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
              <div className="relative w-72">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm text-on-surface transition-all" 
                  placeholder="Buscar por nome ou registro..." 
                  type="text"
                />
              </div>
              <button className="flex items-center gap-xs px-md py-2 border border-outline-variant rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-lowest transition-colors font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filtros
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="py-md px-lg font-semibold">Nome</th>
                    <th className="py-md px-lg font-semibold">Telefone</th>
                    <th className="py-md px-lg font-semibold">Endereço</th>
                    <th className="py-md px-lg font-semibold">Nível de Permissão</th>
                    <th className="py-md px-lg font-semibold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
                  {funcionarios.map((func) => (
                    <tr key={func.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-md px-lg">
                        <div className="flex items-center gap-md">
                          <div className={`w-10 h-10 rounded-full ${func.iniciaisVariant} flex items-center justify-center font-label-md text-label-md`}>
                            {func.iniciais}
                          </div>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface">{func.nome}</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{func.registro}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-md px-lg font-body-md text-body-md text-on-surface-variant whitespace-nowrap">{func.telefone}</td>
                      <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant max-w-[200px] truncate" title={func.endereco}>{func.endereco}</td>
                      <td className="py-md px-lg">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full ${func.nivelVariant} font-label-sm text-label-sm border`}>
                          {func.nivel}
                        </span>
                      </td>
                      <td className="py-md px-lg text-right">
                        <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest" title="Editar">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-error-container" title="Remover">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Footer */}
            <div className="p-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Mostrando 1 a 4 de 124 funcionários</span>
              <div className="flex items-center gap-sm">
                <button className="p-1 text-outline hover:text-on-surface transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="p-1 text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Funcionarios;
