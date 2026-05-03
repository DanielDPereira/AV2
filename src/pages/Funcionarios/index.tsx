import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { type Funcionario, mockFuncionarios } from '../../types/funcionarios';

const Funcionarios: React.FC = () => {
  const [funcionarios] = useState<Funcionario[]>(mockFuncionarios);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Funcionarios;
