import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { type Teste, mockTestes } from '../../types/testes';

const Testes: React.FC = () => {
  const navigate = useNavigate();
  const [testes] = useState<Teste[]>(mockTestes);

  return (
    <div className="bg-surface-container-low font-body-md text-body-md text-on-background min-h-screen">
      {/* TopNavBar (Fixed) */}
      <nav className="fixed top-0 w-full z-50 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-8 font-inter antialiased text-slate-900 dark:text-slate-100">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
          <span className="text-xl font-bold tracking-tighter text-blue-800 dark:text-blue-400">Aerocode</span>
        </div>
        <div className="flex items-center gap-md">
          <span className="font-label-md text-label-md text-slate-500 dark:text-slate-400">User Name</span>
          <button 
            onClick={() => navigate('/login')}
            className="font-label-md text-label-md text-blue-800 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors active:opacity-80 flex items-center gap-xs"
          >
            Logout
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </nav>

      {/* SideNavBar (Fixed) */}
      <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 space-y-1 font-inter text-sm font-medium tracking-wide">
        <Link to="/dashboard" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </Link>
        <Link to="/aeronaves" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">flight</span>
          Aeronaves
        </Link>
        <Link to="/pecas" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">settings_input_component</span>
          Peças
        </Link>
        <Link to="/etapas" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">account_tree</span>
          Etapas
        </Link>
        <Link to="/funcionarios" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">badge</span>
          Funcionários
        </Link>
        <Link to="/testes" className="flex items-center gap-sm px-lg py-sm bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-300 border-l-4 border-blue-800 font-bold hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
          Testes
        </Link>
        <Link to="/relatorios" className="flex items-center gap-sm px-lg py-sm text-slate-600 dark:text-slate-400 border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-800 duration-150 ease-in-out">
          <span className="material-symbols-outlined">analytics</span>
          Relatórios
        </Link>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-[256px] pt-[64px] min-h-screen flex flex-col">
        {/* Action Bar */}
        <div className="sticky top-16 z-40 bg-surface-container-low/95 backdrop-blur-sm border-b border-outline-variant/30 px-xl py-lg flex justify-between items-center">
          <div>
            <nav className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-xs">
              <span className="hover:text-primary cursor-pointer transition-colors">Sistema</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary-container font-bold">QA & Testes</span>
            </nav>
            <h1 className="font-h2 text-h2 text-on-surface">Inspeções e Testes</h1>
          </div>
          <div className="flex items-center gap-md">
            <div className="relative w-[300px]">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input 
                className="w-full pl-[36px] pr-sm py-[10px] bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim transition-all placeholder:text-outline-variant" 
                placeholder="Buscar por código ou aeronave..." 
                type="text"
              />
            </div>
            <button className="flex items-center gap-xs px-lg py-[10px] bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Novo Teste
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-xl flex-1">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Código</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Aeronave</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Tipo de Teste</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Inspetor</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Data</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Status</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {testes.map((teste) => (
                  <tr key={teste.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-md px-lg font-label-md text-label-md text-on-surface font-semibold">
                      {teste.codigo}
                    </td>
                    <td className="py-md px-lg font-body-md text-body-md text-on-surface">
                      <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-outline-variant text-[18px]">flight</span>
                        {teste.aeronave}
                      </div>
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">
                      {teste.tipo}
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface">
                      {teste.inspetor}
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">
                      {teste.data}
                    </td>
                    <td className="py-md px-lg">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold border ${teste.statusVariant}`}>
                        {teste.status}
                      </span>
                    </td>
                    <td className="py-md px-lg text-right">
                      <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-secondary hover:text-primary transition-colors flex items-center" title="Editar">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="text-secondary hover:text-primary transition-colors flex items-center" title="Aprovar/Reprovar">
                          <span className="material-symbols-outlined text-[20px]">fact_check</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination Footer */}
            <div className="p-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
              <span className="text-body-sm font-body-sm text-secondary">Mostrando 1 a 4 de 24 testes</span>
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
        </div>
      </main>
    </div>
  );
};

export default Testes;
