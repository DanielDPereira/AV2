import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { type Etapa, mockEtapas } from '../../types/etapas';

const Etapas: React.FC = () => {
  const [etapas] = useState<Etapa[]>(mockEtapas);

  return (
    <Layout>
      <div className="p-xl flex flex-col min-h-full">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-xs font-body-sm text-on-surface-variant mb-xs">
                <span className="hover:text-primary cursor-pointer transition-colors">Sistema</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-medium text-on-surface">Etapas</span>
              </nav>
              <h1 className="font-h2 text-h2 text-on-surface">Etapas de Produção</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Controle operacional das fases de montagem.</p>
            </div>
            <button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded flex items-center gap-xs shadow-sm hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Nova Etapa
            </button>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Main Data Grid Card */}
            <div className="lg:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Card Header/Filter Bar */}
              <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-bright">
                <div className="relative w-64">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                  <input 
                    className="w-full pl-[36px] pr-sm py-xs border border-outline-variant rounded bg-surface-container-lowest font-body-sm text-body-sm focus:border-primary-container focus:ring-2 focus:ring-primary-fixed focus:outline-none transition-all" 
                    placeholder="Buscar etapa..." 
                    type="text"
                  />
                </div>
                <div className="flex gap-sm">
                  <button className="px-md py-xs border border-outline-variant rounded font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">filter_list</span>
                    Filtros
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      <th className="px-lg py-md font-semibold w-1/3">Nome da Etapa</th>
                      <th className="px-lg py-md font-semibold">Prazo (Data)</th>
                      <th className="px-lg py-md font-semibold">Status</th>
                      <th className="px-lg py-md font-semibold text-right">Ações Rápidas</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface">
                    {etapas.map((etapa) => (
                      <Fragment key={etapa.id}>
                        <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors group">
                          <td className="px-lg py-md align-top">
                            <div className="flex items-center gap-sm">
                              <span className={`material-symbols-outlined ${etapa.isExpanded ? 'text-primary' : 'text-outline'} text-[20px]`}>
                                {etapa.icon}
                              </span>
                              <div className="font-medium text-on-surface">{etapa.nome}</div>
                            </div>
                            <div className="text-[12px] text-on-surface-variant mt-xs ml-[28px]">{etapa.subnome}</div>
                          </td>
                          <td className={`px-lg py-md align-top ${etapa.atrasado ? 'text-on-error-container' : 'text-on-surface-variant'}`}>
                            {etapa.prazo} {etapa.atrasado && <span className="font-bold text-[10px] ml-1">(ATRASADO)</span>}
                          </td>
                          <td className="px-lg py-md align-top">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded ${etapa.statusBadgeVariant} font-label-sm text-[11px] uppercase`}>
                              {etapa.status}
                            </span>
                          </td>
                          <td className="px-lg py-md text-right align-top">
                            {etapa.status === 'Em andamento' && (
                              <div className="flex justify-end gap-xs">
                                <button className="bg-error-container text-on-error-container hover:bg-error text-label-sm px-sm py-1 rounded transition-colors flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-[16px]">stop</span>
                                  Finalizar
                                </button>
                              </div>
                            )}
                            {etapa.status === 'Pendente' && (
                              <div className="flex justify-end gap-xs">
                                <button className="bg-primary text-on-primary hover:bg-primary-container text-label-sm px-sm py-1 rounded transition-colors flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                                  Iniciar
                                </button>
                              </div>
                            )}
                            {etapa.status === 'Concluída' && (
                              <button className="text-outline hover:text-primary-container p-1 rounded hover:bg-surface-container transition-colors">
                                <span className="material-symbols-outlined text-[20px]">history</span>
                              </button>
                            )}
                          </td>
                        </tr>
                        {etapa.isExpanded && etapa.funcionariosAlocados && (
                          <tr className="bg-surface-container-lowest border-b border-outline-variant">
                            <td className="px-lg pb-md" colSpan={4}>
                              <div className="ml-[28px] p-md border-l-2 border-primary bg-surface-container-low rounded-r-lg flex flex-col gap-md">
                                <div className="flex flex-col md:flex-row justify-between gap-md">
                                  <div className="flex-1">
                                    <h4 className="font-label-sm text-on-surface-variant uppercase mb-sm">Funcionários Alocados</h4>
                                    <div className="flex flex-wrap gap-sm">
                                      {etapa.funcionariosAlocados.map((func) => (
                                        <div key={func.id} className="flex items-center gap-xs bg-white px-sm py-1 rounded border border-outline-variant">
                                          <div className={`w-6 h-6 rounded-full ${func.corVariant} flex items-center justify-center text-[10px] font-bold`}>
                                            {func.iniciais}
                                          </div>
                                          <span className="text-body-sm">{func.nome}</span>
                                        </div>
                                      ))}
                                      <button className="flex items-center gap-xs text-primary hover:underline text-body-sm">
                                        <span className="material-symbols-outlined text-[18px]">person_add</span> Alocar
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0 flex items-end gap-sm">
                                    <button className="px-md py-1.5 border border-outline text-on-surface-variant rounded hover:bg-surface-variant transition-colors text-label-sm">
                                      Editar Detalhes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="px-lg py-md border-t border-outline-variant bg-surface-bright flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Mostrando 1 a 4 de 24 etapas</span>
                <div className="flex gap-xs">
                  <button className="p-1 rounded border border-outline-variant text-outline hover:bg-surface-container transition-colors" disabled>
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button className="p-1 rounded border border-outline-variant text-on-surface hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default Etapas;
