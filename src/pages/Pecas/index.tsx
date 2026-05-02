import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { type Peca, mockPecas } from '../../types/pecas';

const Pecas: React.FC = () => {
  const navigate = useNavigate();
  const [pecas] = useState<Peca[]>(mockPecas);

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopNavBar */}
      <header className="bg-white dark:bg-slate-900 font-inter antialiased text-slate-900 dark:text-slate-100 fixed top-0 w-full z-50 h-16 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-8 max-w-full">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>air</span>
          <span className="text-xl font-bold tracking-tighter text-blue-800 dark:text-blue-400">Aerocode</span>
        </div>
        <div className="flex items-center gap-md">
          <span className="text-body-sm font-body-sm text-secondary">User Name</span>
          <button 
            onClick={() => navigate('/login')}
            className="text-label-md font-label-md text-primary hover:text-blue-800 dark:hover:text-blue-300 transition-colors active:opacity-80 transition-all"
          >
            Logout
          </button>
        </div>
      </header>

      {/* SideNavBar & Main Content Wrapper */}
      <div className="flex pt-16">
        {/* SideNavBar */}
        <nav className="bg-slate-50 dark:bg-slate-950 font-inter text-sm font-medium tracking-wide fixed left-0 top-16 w-64 h-[calc(100vh-64px)] border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 space-y-1 overflow-y-auto">
          <Link to="/dashboard" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/aeronaves" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">flight</span>
            <span>Aeronaves</span>
          </Link>
          <Link to="/pecas" className="bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-300 border-l-4 border-blue-800 font-bold duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
            <span>Peças</span>
          </Link>
          <Link to="/etapas" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">account_tree</span>
            <span>Etapas</span>
          </Link>
          <Link to="/funcionarios" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">badge</span>
            <span>Funcionários</span>
          </Link>
          <Link to="/testes" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">biotech</span>
            <span>Testes</span>
          </Link>
          <Link to="/relatorios" className="text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out flex items-center gap-sm px-lg py-sm">
            <span className="material-symbols-outlined">analytics</span>
            <span>Relatórios</span>
          </Link>
        </nav>

        {/* Main Canvas */}
        <main className="ml-64 flex-1 p-margin flex flex-col gap-lg">
          {/* Header Section */}
          <div className="flex flex-col gap-xs">
            <nav aria-label="Breadcrumb" className="flex text-body-sm font-body-sm text-secondary">
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <span className="text-secondary cursor-pointer hover:underline">Home</span>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                    <span className="text-on-surface font-medium">Peças</span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="flex items-center justify-between">
              <h1 className="text-h2 font-h2 text-on-surface">Gestão de Peças</h1>
              <button className="bg-primary text-on-primary text-label-md font-label-md px-md py-sm rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Nova Peça
              </button>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            {/* Table Toolbar */}
            <div className="p-md border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
                <input 
                  className="w-full pl-xl pr-sm py-sm text-body-sm font-body-sm border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-lowest text-on-surface outline-none transition-all" 
                  placeholder="Buscar peças..." 
                  type="text"
                />
              </div>
              <button className="flex items-center gap-xs text-body-sm font-body-sm text-secondary border border-outline-variant px-sm py-xs rounded-lg hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filtros
              </button>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap">Nome</th>
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap">Tipo</th>
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap">Fornecedor</th>
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap">Status</th>
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {pecas.map((peca) => (
                    <tr key={peca.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="p-md text-body-sm font-body-sm text-on-surface font-medium">{peca.nome}</td>
                      <td className="p-md">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-label-sm font-label-sm ${peca.tipoBadgeVariant}`}>
                          {peca.tipo}
                        </span>
                      </td>
                      <td className="p-md text-body-sm font-body-sm text-secondary">{peca.fornecedor}</td>
                      <td className="p-md">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-label-sm font-label-sm ${peca.statusBadgeVariant}`}>
                          <span className="material-symbols-outlined text-[14px]">{peca.statusIcon}</span>
                          {peca.status}
                        </span>
                      </td>
                      <td className="p-md text-right">
                        <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-secondary hover:text-primary transition-colors flex items-center" title="Editar">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                          <button className="text-secondary hover:text-primary transition-colors flex items-center" title="Alterar status">
                            <span className="material-symbols-outlined text-[20px]">published_with_changes</span>
                          </button>
                          <button className="text-secondary hover:text-error transition-colors flex items-center" title="Excluir">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="p-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
              <span className="text-body-sm font-body-sm text-secondary">Mostrando 1 a 4 de 24 peças</span>
              <div className="flex items-center gap-sm">
                <button className="text-secondary hover:text-primary p-xs rounded hover:bg-surface-variant transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="text-body-sm font-body-sm text-on-surface font-medium w-8 text-center">1</span>
                <button className="text-secondary hover:text-primary p-xs rounded hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pecas;
