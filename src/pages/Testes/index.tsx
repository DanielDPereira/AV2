import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Tooltip from '../../components/Tooltip';
import { type Teste, mockTestes } from '../../types/testes';

const inputCls = "px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none w-full";

const resultadoMap = (val: string): { resultado: Teste['resultado']; variant: string } =>
  val === 's'
    ? { resultado: 'Aprovado', variant: 'bg-green-100 text-green-800 border-green-200' }
    : { resultado: 'Reprovado', variant: 'bg-red-100 text-red-800 border-red-200' };

const tipoMap: Record<string, Teste['tipo']> = {
  '1': 'Elétrico',
  '2': 'Hidráulico',
  '3': 'Aerodinâmico',
};
const tipoToKey = (tipo: string) =>
  tipo === 'Hidráulico' ? '2' : tipo === 'Aerodinâmico' ? '3' : '1';

const Testes: React.FC = () => {
  const [testes, setTestes] = useState<Teste[]>(mockTestes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoTeste, setNovoTeste] = useState({ aeronave: '', tipo: '1', resultado: 's' });

  // Edit state
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Teste | null>(null);
  const [editForm, setEditForm] = useState({ aeronave: '', tipo: '1', resultado: 's' });

  // Approve/reject state
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [resultTarget, setResultTarget] = useState<Teste | null>(null);
  const [resultVal, setResultVal] = useState<'s' | 'n'>('s');

  const handleCreateTeste = (e: React.FormEvent) => {
    e.preventDefault();
    const { resultado, variant } = resultadoMap(novoTeste.resultado);
    const teste: Teste = {
      id: Math.random().toString(),
      aeronave: novoTeste.aeronave,
      tipo: tipoMap[novoTeste.tipo],
      resultado,
      resultadoVariant: variant,
    };
    setTestes([teste, ...testes]);
    setIsModalOpen(false);
    setNovoTeste({ aeronave: '', tipo: '1', resultado: 's' });
  };

  const openEdit = (t: Teste) => {
    setEditTarget(t);
    setEditForm({ aeronave: t.aeronave || '', tipo: tipoToKey(t.tipo), resultado: t.resultado === 'Aprovado' ? 's' : 'n' });
    setIsEditOpen(true);
  };
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget) return;
    const { resultado, variant } = resultadoMap(editForm.resultado);
    setTestes(testes.map(t =>
      t.id === editTarget.id
        ? { ...t, aeronave: editForm.aeronave, tipo: tipoMap[editForm.tipo], resultado, resultadoVariant: variant }
        : t
    ));
    setIsEditOpen(false);
  };

  const openResult = (t: Teste) => {
    setResultTarget(t);
    setResultVal(t.resultado === 'Aprovado' ? 's' : 'n');
    setIsResultOpen(true);
  };
  const handleResult = () => {
    if (!resultTarget) return;
    const { resultado, variant } = resultadoMap(resultVal);
    setTestes(testes.map(t =>
      t.id === resultTarget.id ? { ...t, resultado, resultadoVariant: variant } : t
    ));
    setIsResultOpen(false);
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
              <span className="text-primary-container font-bold">QA &amp; Testes</span>
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
                        <Tooltip label="Editar">
                          <button
                            aria-label={`Editar teste de ${teste.aeronave}`}
                            className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest"
                            onClick={() => openEdit(teste)}
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </Tooltip>
                        <Tooltip label="Alterar Resultado">
                          <button
                            aria-label={`Aprovar ou reprovar teste de ${teste.aeronave}`}
                            className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest"
                            onClick={() => openResult(teste)}
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">fact_check</span>
                          </button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination Footer */}
            <div className="p-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
              <span className="text-body-sm font-body-sm text-secondary">Mostrando 1 a {testes.length} de {testes.length} testes</span>
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

      {/* Modal: Novo Teste */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Registrar Teste de Qualidade">
        <form className="flex flex-col gap-md" onSubmit={handleCreateTeste}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código da Aeronave</label>
            <input type="text" value={novoTeste.aeronave} onChange={(e) => setNovoTeste({ ...novoTeste, aeronave: e.target.value })} className={inputCls} required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Tipo</label>
            <select value={novoTeste.tipo} onChange={(e) => setNovoTeste({ ...novoTeste, tipo: e.target.value })} className={inputCls} required>
              <option value="1">1- Elétrico</option>
              <option value="2">2- Hidráulico</option>
              <option value="3">3- Aerodinâmico</option>
            </select>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Aprovado?</label>
            <select value={novoTeste.resultado} onChange={(e) => setNovoTeste({ ...novoTeste, resultado: e.target.value })} className={inputCls} required>
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

      {/* Modal: Editar Teste */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title={`Editar Teste — ${editTarget?.aeronave || ''}`}>
        <form className="flex flex-col gap-md" onSubmit={handleEdit}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código da Aeronave</label>
            <input type="text" value={editForm.aeronave} onChange={(e) => setEditForm({ ...editForm, aeronave: e.target.value })} className={inputCls} required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Tipo</label>
            <select value={editForm.tipo} onChange={(e) => setEditForm({ ...editForm, tipo: e.target.value })} className={inputCls} required>
              <option value="1">1- Elétrico</option>
              <option value="2">2- Hidráulico</option>
              <option value="3">3- Aerodinâmico</option>
            </select>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Resultado</label>
            <select value={editForm.resultado} onChange={(e) => setEditForm({ ...editForm, resultado: e.target.value })} className={inputCls} required>
              <option value="s">Aprovado</option>
              <option value="n">Reprovado</option>
            </select>
          </div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsEditOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Salvar Alterações</button>
          </div>
        </form>
      </Modal>

      {/* Modal: Alterar Resultado */}
      <Modal isOpen={isResultOpen} onClose={() => setIsResultOpen(false)} title={`Resultado — ${resultTarget?.aeronave || ''}`}>
        <div className="flex flex-col gap-lg">
          <p className="font-body-md text-body-md text-on-surface">
            Defina o resultado do teste <strong>{resultTarget?.tipo}</strong> para a aeronave <strong>{resultTarget?.aeronave}</strong>:
          </p>
          <div className="flex gap-md">
            <button
              type="button"
              onClick={() => setResultVal('s')}
              className={`flex-1 flex flex-col items-center gap-xs p-md rounded-xl border-2 transition-all ${resultVal === 's' ? 'border-green-500 bg-green-50 text-green-800' : 'border-outline-variant text-on-surface-variant hover:border-green-300'}`}
            >
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
              <span className="font-label-md text-label-md">Aprovado</span>
            </button>
            <button
              type="button"
              onClick={() => setResultVal('n')}
              className={`flex-1 flex flex-col items-center gap-xs p-md rounded-xl border-2 transition-all ${resultVal === 'n' ? 'border-red-500 bg-red-50 text-red-800' : 'border-outline-variant text-on-surface-variant hover:border-red-300'}`}
            >
              <span className="material-symbols-outlined text-[28px]">cancel</span>
              <span className="font-label-md text-label-md">Reprovado</span>
            </button>
          </div>
          <div className="flex justify-end gap-sm">
            <button type="button" onClick={() => setIsResultOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="button" onClick={handleResult} className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Confirmar</button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Testes;
