export interface Teste {
  id: string;
  codigo: string;
  aeronave: string;
  tipo: string;
  inspetor: string;
  status: 'Aprovado' | 'Reprovado' | 'Em Análise' | 'Pendente';
  statusVariant: string;
  data: string;
}

export const mockTestes: Teste[] = [
  {
    id: '1',
    codigo: 'TST-2023-001',
    aeronave: 'AC-700 (Fenix)',
    tipo: 'Estrutural',
    inspetor: 'M. Santos',
    status: 'Aprovado',
    statusVariant: 'bg-green-100 text-green-800 border-green-200',
    data: '15/10/2026',
  },
  {
    id: '2',
    codigo: 'TST-2023-002',
    aeronave: 'B-850 (Legacy)',
    tipo: 'Sistemas Aviônicos',
    inspetor: 'L. Oliveira',
    status: 'Reprovado',
    statusVariant: 'bg-red-100 text-red-800 border-red-200',
    data: '14/10/2026',
  },
  {
    id: '3',
    codigo: 'TST-2023-003',
    aeronave: 'AC-700 (Fenix)',
    tipo: 'Pressurização',
    inspetor: 'C. Ferreira',
    status: 'Em Análise',
    statusVariant: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    data: '16/10/2026',
  },
  {
    id: '4',
    codigo: 'TST-2023-004',
    aeronave: 'C-990 (Cargo)',
    tipo: 'Motores',
    inspetor: 'A. Costa',
    status: 'Pendente',
    statusVariant: 'bg-slate-100 text-slate-800 border-slate-200',
    data: '18/10/2026',
  },
];
