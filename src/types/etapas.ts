export interface FuncionarioAlocado {
  id: string;
  iniciais: string;
  nome: string;
  corVariant: string;
}

export interface Etapa {
  id: string;
  nome: string;
  subnome: string;
  prazo: string;
  atrasado?: boolean;
  status: string;
  statusBadgeVariant: string;
  icon: string;
  isExpanded?: boolean;
  funcionariosAlocados?: FuncionarioAlocado[];
}

export const mockEtapas: Etapa[] = [
  {
    id: '1',
    nome: 'Usinagem do Eixo Principal',
    subnome: 'Aero-73X-Comp',
    prazo: '12/10/2023',
    status: 'Em andamento',
    statusBadgeVariant: 'bg-secondary-container text-on-secondary-container',
    icon: 'expand_more',
    isExpanded: true,
    funcionariosAlocados: [
      { id: '1', iniciais: 'RM', nome: 'Ricardo Mendes', corVariant: 'bg-primary-fixed-dim' },
      { id: '2', iniciais: 'AS', nome: 'Ana Silva', corVariant: 'bg-secondary-fixed-dim' },
    ]
  },
  {
    id: '2',
    nome: 'Inspeção de Turbina',
    subnome: 'Controle de Qualidade V2',
    prazo: '15/10/2023',
    status: 'Pendente',
    statusBadgeVariant: 'bg-surface-variant text-on-surface-variant',
    icon: 'chevron_right',
  },
  {
    id: '3',
    nome: 'Soldagem Estrutural Asa Esq.',
    subnome: 'Fuselagem Base',
    prazo: '08/10/2023',
    status: 'Concluída',
    statusBadgeVariant: 'bg-primary-fixed text-on-primary-fixed',
    icon: 'chevron_right',
  },
  {
    id: '4',
    nome: 'Calibração de Sensores Nav.',
    subnome: 'Sistemas Eletrônicos',
    prazo: '10/10/2023',
    atrasado: true,
    status: 'Pendente',
    statusBadgeVariant: 'bg-error-container text-on-error-container',
    icon: 'chevron_right',
  },
];
