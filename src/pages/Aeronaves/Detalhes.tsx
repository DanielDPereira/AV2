import React from 'react';
import { useParams } from 'react-router-dom';

const AeronaveDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Detalhes da Aeronave</h1>
      <p>Exibindo detalhes para o ID: {id}</p>
    </div>
  );
};

export default AeronaveDetalhes;
