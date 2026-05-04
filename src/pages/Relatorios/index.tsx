import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { type Relatorio, mockRelatorios } from '../../types/relatorios';

const Relatorios: React.FC = () => {
  const [relatorios] = useState<Relatorio[]>(mockRelatorios);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoRelatorio, setNovoRelatorio] = useState({ aeronave: '', gerarDisco: 's' });

  const handleGerarRelatorio = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setNovoRelatorio({ aeronave: '', gerarDisco: 's' });
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
              <span className="text-primary-container font-bold">Relatórios</span>
            </nav>
            <h1 className="font-h2 text-h2 text-on-surface">Central de Relatórios</h1>
          </div>
          <div className="flex items-center gap-md">
            <button className="flex items-center gap-xs px-md py-sm border border-outline-variant text-on-surface-variant bg-surface-container-lowest hover:bg-surface-variant rounded-lg font-label-md text-label-md transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_alt</span>
              Filtros Avançados
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-xs px-lg py-[10px] bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">add_chart</span>
              Gerar Relatório
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-xl flex-1">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="p-lg border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
              <h2 className="text-h3 font-h3 text-on-surface">Histórico Recente</h2>
              <div className="relative w-[250px]">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input 
                  className="w-full pl-[36px] pr-sm py-xs bg-surface-container-lowest border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-all text-body-sm" 
                  placeholder="Pesquisar arquivo..." 
                  type="text"
                />
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest border-b border-outline-variant">
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Arquivo</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Aeronave Associada</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant">Data de Geração</th>
                  <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {relatorios.map((relatorio) => (
                  <tr key={relatorio.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-md px-lg">
                      <div className="flex items-center gap-md">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 bg-blue-100`}>
                          <span className="material-symbols-outlined">description</span>
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface font-semibold">{relatorio.nomeArquivo}</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">TXT</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface">
                      {relatorio.aeronaveCodigo}
                    </td>
                    <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">
                      {relatorio.dataGeracao}
                    </td>
                    <td className="py-md px-lg text-right">
                      <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                        <button
                          aria-label={`Visualizar relatório ${relatorio.nomeArquivo}`}
                          className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-fixed-dim/20 rounded-full"
                        >
                          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button
                          aria-label={`Baixar relatório ${relatorio.nomeArquivo}`}
                          className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-fixed-dim/20 rounded-full"
                        >
                          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">download</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Gerar Relatório de Entrega">
        <form className="flex flex-col gap-md" onSubmit={handleGerarRelatorio}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código da Aeronave</label>
            <input type="text" value={novoRelatorio.aeronave} onChange={(e) => setNovoRelatorio({...novoRelatorio, aeronave: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Deseja gerar o .txt em disco?</label>
            <select value={novoRelatorio.gerarDisco} onChange={(e) => setNovoRelatorio({...novoRelatorio, gerarDisco: e.target.value})} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required>
              <option value="s">Sim</option>
              <option value="n">Não</option>
            </select>
          </div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Gerar Relatório</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

export default Relatorios;
