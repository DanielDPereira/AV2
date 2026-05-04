import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { type Peca, mockPecas } from '../../types/pecas';

const Pecas: React.FC = () => {
  const [pecas, setPecas] = useState<Peca[]>(mockPecas);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaPeca, setNovaPeca] = useState({
    aeronave: '',
    nome: '',
    fornecedor: '',
    tipo: 'Nacional'
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const peca: Peca = {
      id: Math.random().toString(),
      aeronave: novaPeca.aeronave,
      nome: novaPeca.nome,
      fornecedor: novaPeca.fornecedor,
      tipo: novaPeca.tipo as 'Nacional' | 'Importada',
      status: 'Em produção',
      statusBadgeVariant: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      statusIcon: 'manufacturing',
      tipoBadgeVariant: novaPeca.tipo === 'Nacional' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
    };
    setPecas([peca, ...pecas]);
    setIsModalOpen(false);
    setNovaPeca({ aeronave: '', nome: '', fornecedor: '', tipo: 'Nacional' });
  };

  return (
    <Layout>
      <div className="p-xl flex flex-col gap-lg min-h-full">
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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-on-primary text-label-md font-label-md px-md py-sm rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-xs">
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
                    <th className="p-md text-label-md font-label-md text-on-surface-variant whitespace-nowrap">Aeronave Associada</th>
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
                      <td className="p-md text-body-sm font-body-sm text-on-surface">{peca.aeronave || '-'}</td>
                      <td className="p-md">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-label-sm font-label-sm ${peca.statusBadgeVariant}`}>
                          <span className="material-symbols-outlined text-[14px]">{peca.statusIcon}</span>
                          {peca.status}
                        </span>
                      </td>
                      <td className="p-md text-right">
                        <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                          <button
                            aria-label={`Editar peça ${peca.nome}`}
                            className="text-secondary hover:text-primary transition-colors flex items-center"
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                          <button
                            aria-label={`Alterar status de ${peca.nome}`}
                            className="text-secondary hover:text-primary transition-colors flex items-center"
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">published_with_changes</span>
                          </button>
                          <button
                            aria-label={`Excluir peça ${peca.nome}`}
                            className="text-secondary hover:text-error transition-colors flex items-center"
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">delete</span>
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
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar Peça a uma Aeronave">
        <form className="flex flex-col gap-md" onSubmit={handleCreate}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código da Aeronave alvo</label>
            <input type="text" value={novaPeca.aeronave} onChange={(e) => setNovaPeca({...novaPeca, aeronave: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Nome do componente</label>
            <input type="text" value={novaPeca.nome} onChange={(e) => setNovaPeca({...novaPeca, nome: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Empresa fornecedora</label>
            <input type="text" value={novaPeca.fornecedor} onChange={(e) => setNovaPeca({...novaPeca, fornecedor: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Origem</label>
            <select value={novaPeca.tipo} onChange={(e) => setNovaPeca({...novaPeca, tipo: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required>
              <option value="Nacional">1- Nacional</option>
              <option value="Importada">2- Importada</option>
            </select>
          </div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Cadastrar</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

export default Pecas;
