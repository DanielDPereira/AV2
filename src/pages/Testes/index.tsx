import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { type Teste, mockTestes } from '../../types/testes';

const Testes: React.FC = () => {
  const [testes] = useState<Teste[]>(mockTestes);

  return (
    <Layout>
      <div className="flex flex-col min-h-full">
        {/* Action Bar */}
        <div className="sticky top-0 z-40 bg-surface-container-low/95 backdrop-blur-sm border-b border-outline-variant/30 px-xl py-lg flex justify-between items-center">
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
      </div>
    </Layout>
  );
};

export default Testes;
