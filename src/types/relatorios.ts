export interface Relatorio {
  id: string;
  titulo: string;
  tipo: string;
  tipoIcon: string;
  iconVariant: string;
  dataGeracao: string;
  geradoPor: string;
  tamanho: string;
}

export const mockRelatorios: Relatorio[] = [
  {
    id: '1',
    titulo: 'Produção Mensal - Setembro 2026',
    tipo: 'PDF',
    tipoIcon: 'picture_as_pdf',
    iconVariant: 'text-red-600 bg-red-100',
    dataGeracao: '01/10/2026 08:30',
    geradoPor: 'Sistema Automático',
    tamanho: '2.4 MB'
  },
  {
    id: '2',
    titulo: 'Inventário de Peças Importadas',
    tipo: 'Excel',
    tipoIcon: 'table_view',
    iconVariant: 'text-green-700 bg-green-100',
    dataGeracao: '15/10/2026 14:15',
    geradoPor: 'Carlos Ferreira',
    tamanho: '450 KB'
  },
  {
    id: '3',
    titulo: 'Relatório de Qualidade e Refações',
    tipo: 'PDF',
    tipoIcon: 'picture_as_pdf',
    iconVariant: 'text-red-600 bg-red-100',
    dataGeracao: '20/10/2026 09:00',
    geradoPor: 'M. Santos (QA)',
    tamanho: '5.1 MB'
  },
  {
    id: '4',
    titulo: 'Desempenho da Equipe de Montagem',
    tipo: 'Dashboard',
    tipoIcon: 'monitoring',
    iconVariant: 'text-blue-600 bg-blue-100',
    dataGeracao: '22/10/2026 11:45',
    geradoPor: 'Ana Diretora',
    tamanho: 'Online'
  }
];
