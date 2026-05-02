import React from 'react';
import { Link } from 'react-router-dom';

const Aeronaves: React.FC = () => {
  return (
    <div>
      <h1>Aeronaves - Listagem</h1>
      <p>Lista de aeronaves.</p>
      {/* Exemplo de link para detalhes */}
      <Link to="/aeronaves/1">Ver Detalhes da Aeronave 1</Link>
    </div>
  );
};

export default Aeronaves;
