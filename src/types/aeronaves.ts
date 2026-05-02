export interface Aeronave {
  id: string;
  codigo: string;
  modelo: string;
  tipo: string;
  capacidade: string;
  alcance: string;
  tipoBadgeColor: string;
}

export const mockAeronaves: Aeronave[] = [
  {
    id: '1',
    codigo: 'AC-737-MAX',
    modelo: 'Boeing 737 MAX 8',
    tipo: 'Comercial',
    capacidade: '210 passageiros',
    alcance: '6.570 km',
    tipoBadgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
  },
  {
    id: '2',
    codigo: 'AC-A320-NEO',
    modelo: 'Airbus A320neo',
    tipo: 'Comercial',
    capacidade: '195 passageiros',
    alcance: '6.300 km',
    tipoBadgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
  },
  {
    id: '3',
    codigo: 'AC-C130-J',
    modelo: 'Lockheed C-130J',
    tipo: 'Carga/Militar',
    capacidade: '19.000 kg',
    alcance: '3.334 km',
    tipoBadgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
  },
  {
    id: '4',
    codigo: 'AC-E195-E2',
    modelo: 'Embraer E195-E2',
    tipo: 'Comercial',
    capacidade: '146 passageiros',
    alcance: '4.815 km',
    tipoBadgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
  },
];
