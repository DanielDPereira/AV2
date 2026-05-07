import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Aeronaves from '../pages/Aeronaves';

import Etapas from '../pages/Etapas';
import Pecas from '../pages/Pecas';
import Funcionarios from '../pages/Funcionarios';
import Relatorios from '../pages/Relatorios';
import Testes from '../pages/Testes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aeronaves" element={<Aeronaves />} />

        <Route path="/etapas" element={<Etapas />} />
        <Route path="/pecas" element={<Pecas />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/testes" element={<Testes />} />
      </Routes>
    </BrowserRouter>
  );
};
