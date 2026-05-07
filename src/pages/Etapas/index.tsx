import React, { useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Tooltip from '../../components/Tooltip';
import { type Etapa, mockEtapas } from '../../types/etapas';

const inputCls = "px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none";

const statusMeta: Record<string, { variant: string; icon: string }> = {
  'Pendente': { variant: 'bg-surface-variant text-on-surface-variant', icon: 'chevron_right' },
  'Em andamento': { variant: 'bg-secondary-container text-on-secondary-container', icon: 'expand_more' },
  'Concluída': { variant: 'bg-primary-fixed text-on-primary-fixed', icon: 'chevron_right' },
};

const Etapas: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';

  const [etapas, setEtapas] = useState<Etapa[]>(mockEtapas);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaEtapa, setNovaEtapa] = useState({ aeronave: '', nome: '', prazo: '' });

  // ── Edição ──────────────────────────────────────────────────────────
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Etapa | null>(null);
  const [editForm, setEditForm] = useState({ aeronaveCodigo: '', nome: '', prazo: '', status: 'Pendente' });

  // ── Exclusão ────────────────────────────────────────────────────────
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Etapa | null>(null);

  const filteredEtapas = etapas.filter(etapa =>
    etapa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    etapa.aeronaveCodigo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const etapa: Etapa = { id: Math.random().toString(), aeronaveCodigo: novaEtapa.aeronave, nome: novaEtapa.nome, prazo: novaEtapa.prazo, status: 'Pendente', statusBadgeVariant: statusMeta['Pendente'].variant, icon: statusMeta['Pendente'].icon, isExpanded: false };
    setEtapas([etapa, ...etapas]);
    setIsModalOpen(false);
    setNovaEtapa({ aeronave: '', nome: '', prazo: '' });
  };

  // ── Iniciar / Finalizar ─────────────────────────────────────────────
  const handleIniciar = (id: string) => {
    setEtapas(etapas.map(e => e.id === id ? { ...e, status: 'Em andamento' as const, statusBadgeVariant: statusMeta['Em andamento'].variant, icon: statusMeta['Em andamento'].icon, isExpanded: true } : e));
  };
  const handleFinalizar = (id: string) => {
    setEtapas(etapas.map(e => e.id === id ? { ...e, status: 'Concluída' as const, statusBadgeVariant: statusMeta['Concluída'].variant, icon: statusMeta['Concluída'].icon, isExpanded: false } : e));
  };

  // ── Editar ──────────────────────────────────────────────────────────
  const openEdit = (et: Etapa) => { setEditTarget(et); setEditForm({ aeronaveCodigo: et.aeronaveCodigo, nome: et.nome, prazo: et.prazo, status: et.status }); setIsEditOpen(true); };
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault(); if (!editTarget) return;
    const sm = statusMeta[editForm.status] || statusMeta['Pendente'];
    setEtapas(etapas.map(et => et.id === editTarget.id ? { ...et, aeronaveCodigo: editForm.aeronaveCodigo, nome: editForm.nome, prazo: editForm.prazo, status: editForm.status as Etapa['status'], statusBadgeVariant: sm.variant, icon: sm.icon } : et));
    setIsEditOpen(false);
  };

  // ── Excluir ─────────────────────────────────────────────────────────
  const openDelete = (et: Etapa) => { setDeleteTarget(et); setIsDeleteOpen(true); };
  const handleDelete = () => { if (!deleteTarget) return; setEtapas(etapas.filter(et => et.id !== deleteTarget.id)); setIsDeleteOpen(false); };

  return (
    <Layout>
      <div className="p-xl flex flex-col min-h-full">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
            <div>
              <nav className="flex items-center gap-xs font-body-sm text-on-surface-variant mb-xs">
                <span className="hover:text-primary cursor-pointer transition-colors">Sistema</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-medium text-on-surface">Etapas</span>
              </nav>
              <h1 className="font-h2 text-h2 text-on-surface">Etapas de Produção</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Controle operacional das fases de montagem.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded flex items-center gap-xs shadow-sm hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>Nova Etapa
            </button>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-bright">
                <div className="relative w-64">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                  <input className="w-full pl-[36px] pr-sm py-xs border border-outline-variant rounded bg-surface-container-lowest font-body-sm text-body-sm focus:border-primary-container focus:ring-2 focus:ring-primary-fixed focus:outline-none transition-all" placeholder="Buscar etapa ou aeronave..." type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="flex gap-sm">
                  <button className="px-md py-xs border border-outline-variant rounded font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">filter_list</span>Filtros
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      <th className="px-lg py-md font-semibold">Aeronave</th>
                      <th className="px-lg py-md font-semibold w-1/3">Nome da Etapa</th>
                      <th className="px-lg py-md font-semibold">Prazo (Data)</th>
                      <th className="px-lg py-md font-semibold">Status</th>
                      <th className="px-lg py-md font-semibold text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface">
                    {filteredEtapas.map((etapa) => (
                      <Fragment key={etapa.id}>
                        <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors group">
                          <td className="px-lg py-md align-top font-code text-primary font-medium">{etapa.aeronaveCodigo}</td>
                          <td className="px-lg py-md align-top">
                            <div className="flex items-center gap-sm">
                              <span className={`material-symbols-outlined ${etapa.isExpanded ? 'text-primary' : 'text-outline'} text-[20px]`}>{etapa.icon}</span>
                              <div className="font-medium text-on-surface">{etapa.nome}</div>
                            </div>
                          </td>
                          <td className="px-lg py-md align-top text-on-surface-variant">{etapa.prazo}</td>
                          <td className="px-lg py-md align-top"><span className={`inline-flex items-center px-2 py-0.5 rounded ${etapa.statusBadgeVariant} font-label-sm text-[11px] uppercase`}>{etapa.status}</span></td>
                          <td className="px-lg py-md text-right align-top">
                            <div className="flex items-center justify-end gap-xs">
                              {/* Status-change buttons */}
                              {etapa.status === 'Pendente' && (
                                <button onClick={() => handleIniciar(etapa.id)} className="bg-primary text-on-primary hover:bg-primary-container text-label-sm px-sm py-1 rounded transition-colors flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-[16px]">play_arrow</span>Iniciar
                                </button>
                              )}
                              {etapa.status === 'Em andamento' && (
                                <button onClick={() => handleFinalizar(etapa.id)} className="bg-error-container text-on-error-container hover:bg-error text-label-sm px-sm py-1 rounded transition-colors flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-[16px]">stop</span>Finalizar
                                </button>
                              )}
                              {/* Edit / Delete — always visible on hover */}
                              <div className="flex items-center gap-xs opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                                <Tooltip label="Editar"><button aria-label={`Editar ${etapa.nome}`} className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest" onClick={() => openEdit(etapa)}><span aria-hidden="true" className="material-symbols-outlined text-[20px]">edit</span></button></Tooltip>
                                <Tooltip label="Excluir"><button aria-label={`Excluir ${etapa.nome}`} className="p-1 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-error-container" onClick={() => openDelete(etapa)}><span aria-hidden="true" className="material-symbols-outlined text-[20px]">delete</span></button></Tooltip>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {etapa.isExpanded && etapa.funcionariosAlocados && (
                          <tr className="bg-surface-container-lowest border-b border-outline-variant">
                            <td className="px-lg pb-md" colSpan={5}>
                              <div className="ml-[28px] p-md border-l-2 border-primary bg-surface-container-low rounded-r-lg flex flex-col gap-md">
                                <div className="flex flex-col md:flex-row justify-between gap-md">
                                  <div className="flex-1">
                                    <h4 className="font-label-sm text-on-surface-variant uppercase mb-sm">Funcionários Alocados</h4>
                                    <div className="flex flex-wrap gap-sm">
                                      {etapa.funcionariosAlocados.map((func) => (
                                        <div key={func.id} className="flex items-center gap-xs bg-white px-sm py-1 rounded border border-outline-variant">
                                          <div className={`w-6 h-6 rounded-full ${func.corVariant} flex items-center justify-center text-[10px] font-bold`}>{func.iniciais}</div>
                                          <span className="text-body-sm">{func.nome}</span>
                                        </div>
                                      ))}
                                      <button className="flex items-center gap-xs text-primary hover:underline text-body-sm">
                                        <span className="material-symbols-outlined text-[18px]">person_add</span> Alocar
                                      </button>
                                    </div>
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

              <div className="px-lg py-md border-t border-outline-variant bg-surface-bright flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Mostrando 1 a {filteredEtapas.length} de 24 etapas</span>
                <div className="flex gap-xs">
                  <button className="p-1 rounded border border-outline-variant text-outline hover:bg-surface-container transition-colors" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                  <button className="p-1 rounded border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Modal: Cadastrar */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nova Etapa">
        <form className="flex flex-col gap-md" onSubmit={handleCreate}>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Código Aeronave</label><input type="text" value={novaEtapa.aeronave} onChange={(e) => setNovaEtapa({...novaEtapa, aeronave: e.target.value})} className={inputCls} required /></div>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Nome da etapa</label><input type="text" value={novaEtapa.nome} onChange={(e) => setNovaEtapa({...novaEtapa, nome: e.target.value})} className={inputCls} required /></div>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Prazo</label><input type="text" value={novaEtapa.prazo} onChange={(e) => setNovaEtapa({...novaEtapa, prazo: e.target.value})} className={inputCls} required /></div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Criar</button>
          </div>
        </form>
      </Modal>

      {/* Modal: Editar */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title={`Editar Etapa — ${editTarget?.nome || ''}`}>
        <form className="flex flex-col gap-md" onSubmit={handleEdit}>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Aeronave</label><input type="text" value={editForm.aeronaveCodigo} onChange={(e) => setEditForm({...editForm, aeronaveCodigo: e.target.value})} className={inputCls} required /></div>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Nome da Etapa</label><input type="text" value={editForm.nome} onChange={(e) => setEditForm({...editForm, nome: e.target.value})} className={inputCls} required /></div>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Prazo</label><input type="text" value={editForm.prazo} onChange={(e) => setEditForm({...editForm, prazo: e.target.value})} className={inputCls} required /></div>
          <div className="flex flex-col gap-xs"><label className="font-label-md text-on-surface">Status</label><select value={editForm.status} onChange={(e) => setEditForm({...editForm, status: e.target.value})} className={inputCls} required><option value="Pendente">Pendente</option><option value="Em andamento">Em andamento</option><option value="Concluída">Concluída</option></select></div>
          <div className="flex justify-end gap-sm mt-md">
            <button type="button" onClick={() => setIsEditOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="submit" className="px-md py-sm rounded bg-primary text-on-primary hover:opacity-90">Salvar Alterações</button>
          </div>
        </form>
      </Modal>

      {/* Modal: Confirmar Exclusão */}
      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Confirmar Exclusão">
        <div className="flex flex-col gap-lg">
          <div className="flex items-start gap-md">
            <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-error text-[20px]">warning</span></div>
            <div>
              <p className="font-body-md text-body-md text-on-surface">Tem certeza que deseja excluir a etapa <strong>{deleteTarget?.nome}</strong> da aeronave <strong>{deleteTarget?.aeronaveCodigo}</strong>?</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Esta ação não poderá ser desfeita.</p>
            </div>
          </div>
          <div className="flex justify-end gap-sm">
            <button type="button" onClick={() => setIsDeleteOpen(false)} className="px-md py-sm rounded text-primary hover:bg-primary-fixed">Cancelar</button>
            <button type="button" onClick={handleDelete} className="px-md py-sm rounded bg-error text-on-error hover:opacity-90">Excluir</button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Etapas;
