import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="bg-surface-container-low min-h-screen flex items-center justify-center p-md">
      <main className="w-full max-w-[400px] bg-surface rounded-xl border border-surface-variant p-xl">
        <div className="mb-xl flex flex-col items-center">
          <h1 className="font-h1 text-h1 text-primary tracking-tighter uppercase">Aerocode</h1>
        </div>
        
        <form className="space-y-lg" onSubmit={handleLogin}>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="username">
              Usuário
            </label>
            <input 
              className="w-full bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface py-sm px-md outline-none transition-all" 
              id="username" 
              name="username" 
              placeholder="Usuário" 
              type="text" 
              required
            />
          </div>
          
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="password">
              Senha
            </label>
            <input 
              className="w-full bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface py-sm px-md outline-none transition-all" 
              id="password" 
              name="password" 
              placeholder="Senha" 
              type="password" 
              required
            />
          </div>
          
          <div className="pt-sm">
            <button 
              className="w-full bg-primary text-on-primary font-label-md text-label-md py-[12px] px-lg rounded hover:bg-primary-container transition-colors flex justify-center items-center" 
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
