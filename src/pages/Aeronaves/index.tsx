import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { type Aeronave, mockAeronaves } from '../../types/aeronaves';

const Aeronaves: React.FC = () => {
  const navigate = useNavigate();
  const [aeronaves, setAeronaves] = useState<Aeronave[]>(mockAeronaves);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaAeronave, setNovaAeronave] = useState({
    codigo: '',
    modelo: '',
    tipo: 'Comercial',
    capacidade: '',
    alcance: ''
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const aero: Aeronave = {
      id: Math.random().toString(),
      codigo: novaAeronave.codigo,
      modelo: novaAeronave.modelo,
      tipo: novaAeronave.tipo as 'Comercial' | 'Militar',
      capacidade: Number(novaAeronave.capacidade),
      alcance: Number(novaAeronave.alcance),
      tipoBadgeColor: novaAeronave.tipo === 'Comercial' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-green-100 text-green-800 border-green-200'
    };
    setAeronaves([aero, ...aeronaves]);
    setIsModalOpen(false);
    setNovaAeronave({ codigo: '', modelo: '', tipo: 'Comercial', capacidade: '', alcance: '' });
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-full">
        {/* Action Bar (Sticky beneath TopNavBar) */}
        <div className="sticky top-0 z-40 bg-surface-container-low/95 backdrop-blur-sm border-b border-outline-variant/30 px-xl py-lg flex justify-between items-center">
          <div>
            <nav className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-xs">
              <span className="hover:text-primary cursor-pointer transition-colors">Sistema</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary-container font-bold">Aeronaves</span>
            </nav>
            <h1 className="font-h2 text-h2 text-on-surface">Gestão de Frota</h1>
          </div>
          <div className="flex items-center gap-md">
            {/* Search Field */}
            <div className="relative w-[300px]">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input
                className="w-full pl-[36px] pr-sm py-[10px] bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim transition-all placeholder:text-outline-variant"
                placeholder="Buscar aeronave..."
                type="text"
              />
            </div>
            {/* Primary Action Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-on-primary px-lg py-[10px] rounded-lg font-label-md text-label-md flex items-center gap-sm shadow-md hover:bg-primary-container transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Nova Aeronave
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-xl flex flex-col gap-lg flex-1">
          {/* Metrics Cards */}
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm relative overflow-hidden">
              <div className="font-label-md text-label-md text-on-surface-variant mb-xs">Total Registrado</div>
              <div className="font-h2 text-h2 text-on-surface">142</div>
              <div className="absolute -right-2 -bottom-2 opacity-5">
                <span className="material-symbols-outlined text-[80px]">flight</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
              <div className="font-label-md text-label-md text-on-surface-variant mb-xs">Em Produção</div>
              <div className="font-h2 text-h2 text-primary-container">18</div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
              <div className="font-label-md text-label-md text-on-surface-variant mb-xs">Aguardando Testes</div>
              <div className="font-h2 text-h2 text-tertiary-container">05</div>
            </div>
          </div>

          {/* Data Table Container */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col flex-1">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Código</th>
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Modelo</th>
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Tipo</th>
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Capacidade</th>
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Alcance</th>
                    <th className="py-md px-lg font-label-md text-label-md text-on-surface-variant whitespace-nowrap text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50">
                  {aeronaves.map((aero) => (
                    <tr key={aero.id} className="hover:bg-surface-container transition-colors group">
                      <td className="py-md px-lg font-code text-code text-on-surface font-semibold">{aero.codigo}</td>
                      <td className="py-md px-lg font-body-sm text-body-sm text-on-surface">{aero.modelo}</td>
                      <td className="py-md px-lg">
                        <span className={`inline-flex items-center px-2 py-1 rounded-sm font-label-sm text-label-sm ${aero.tipoBadgeColor}`}>
                          {aero.tipo}
                        </span>
                      </td>
                      <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">{aero.capacidade} passageiros</td>
                      <td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">{aero.alcance} km</td>
                      <td className="py-md px-lg text-right">
                        <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                          <button
                            aria-label={`Ver etapas de ${aero.codigo}`}
                            className="p-xs text-secondary hover:text-primary hover:bg-primary-fixed rounded transition-colors"
                            onClick={() => navigate(`/etapas?search=${aero.codigo}`)}
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">assignment</span>
                          </button>
                          <button
                            aria-label={`Editar ${aero.codigo}`}
                            className="p-xs text-secondary hover:text-primary hover:bg-primary-fixed rounded transition-colors"
                          >
                            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                          <button
                            aria-label={`Excluir ${aero.codigo}`}
                            className="p-xs text-secondary hover:text-error hover:bg-error-container rounded transition-colors"
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
            {/* Table Footer / Pagination */}
            <div className="px-lg py-sm border-t border-outline-variant bg-surface-container-low flex items-center justify-between mt-auto">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Mostrando 1 a 4 de 142 aeronaves</span>
              <div className="flex items-center gap-xs">
                <button className="p-xs border border-outline-variant rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="p-xs border border-outline-variant rounded text-on-surface-variant hover:bg-surface-container">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Cadastrar nova Aeronave">
        <form className="flex flex-col gap-md" onSubmit={handleCreate}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Código único</label>
            <input type="text" value={novaAeronave.codigo} onChange={(e) => setNovaAeronave({ ...novaAeronave, codigo: e.target.value })} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Modelo</label>
            <input type="text" value={novaAeronave.modelo} onChange={(e) => setNovaAeronave({ ...novaAeronave, modelo: e.target.value })} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Capacidade de Passageiros</label>
            <input type="number" value={novaAeronave.capacidade} onChange={(e) => setNovaAeronave({ ...novaAeronave, capacidade: e.target.value })} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Alcance em Km</label>
            <input type="number" value={novaAeronave.alcance} onChange={(e) => setNovaAeronave({ ...novaAeronave, alcance: e.target.value })} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface">Tipo</label>
            <select value={novaAeronave.tipo} onChange={(e) => setNovaAeronave({ ...novaAeronave, tipo: e.target.value })} className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:border-primary focus:outline-none" required>
              <option value="Comercial">1- Comercial</option>
              <option value="Militar">2- Militar</option>
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

export default Aeronaves;
