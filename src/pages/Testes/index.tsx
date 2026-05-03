import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { type Teste, mockTestes } from '../../types/testes';

const Testes: React.FC = () => {
  const [testes] = useState<Teste[]>(mockTestes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoTeste, setNovoTeste] = useState({ aeronave: '', tipo: '1', resultado: 's' });

  const handleCreateTeste = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setNovoTeste({ aeronave: '', tipo: '1', resultado: 's' });
  };

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
                placeholder="Buscar por aeronave..." 
                type="text"
              />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-xs px-lg py-[10px] bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
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
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Aeronave</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Tipo de Teste</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Resultado</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {testes.map((teste) => (
                  <tr key={teste.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-md px-lg font-body-md text-body-md text-on-surface">
                      <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-outline-variant text-[18px]">flight</span>
                        {teste.aeronave}
                      </div>
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">
                      {teste.tipo}
                    </td>
                    <td className="py-md px-lg">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold border ${teste.resultadoVariant}`}>
                        {teste.resultado}
                      </span>
                    </td>
                    <td className="py-md px-lg text-right">
                      <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                        <button
                          aria-label={`Editar teste de ${teste.aeronave}`}
                          className="text-secondary hover:text-primary transition-colors flex items-center"
                        >
                          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button
                          aria-label={`Aprovar ou reprovar teste de ${teste.aeronave}`}
                          className="text-secondary hover:text-primary transition-colors flex items-center"
                        >
                          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">fact_check</span>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Registrar Teste de Qualidade">
        <form className="flex flex-col gap-md" onSubmit={handleCreateTeste}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código da Aeronave</label>
            <input type="text" value={novoTeste.aeronave} onChange={(e) => setNovoTeste({...novoTeste, aeronave: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Tipo</label>
            <select value={novoTeste.tipo} onChange={(e) => setNovoTeste({...novoTeste, tipo: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required>
              <option value="1">1- Elétrico</option>
              <option value="2">2- Hidráulico</option>
              <option value="3">3- Aerodinâmico</option>
            </select>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Aprovado?</label>
            <select value={novoTeste.resultado} onChange={(e) => setNovoTeste({...novoTeste, resultado: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required>
              <option value="s">Sim</option>
              <option value="n">Não</option>
            </select>
          </div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Salvar Teste</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

export default Testes;
