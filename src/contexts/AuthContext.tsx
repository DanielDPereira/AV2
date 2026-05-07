import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

// ── Enums de Permissão (espelhando AV1) ──────────────────────────────────────
export enum NivelPermissao {
  ADMINISTRADOR = 'Administrador',
  ENGENHEIRO = 'Engenheiro',
  OPERADOR = 'Operador',
}

// ── Interface do Funcionário autenticado ──────────────────────────────────────
export interface UsuarioAutenticado {
  id: string;
  nome: string;
  usuario: string;
  telefone: string;
  endereco: string;
  nivelPermissao: NivelPermissao;
}

// ── Banco de dados local de funcionários (3 logins pré-configurados) ─────────
// Seguindo o documento AV1: admin/admin como Administrador padrão,
// mais um Engenheiro e um Operador.
interface FuncionarioDB {
  id: string;
  nome: string;
  usuario: string;
  senha: string; // Em produção seria hash; aqui é comparação direta (frontend-only)
  telefone: string;
  endereco: string;
  nivelPermissao: NivelPermissao;
}

const funcionariosDB: FuncionarioDB[] = [
  {
    id: '1',
    nome: 'Carlos Silva',
    usuario: 'admin',
    senha: 'admin',
    telefone: '+55 11 98765-4321',
    endereco: 'Av. Paulista, 1000, São Paulo - SP',
    nivelPermissao: NivelPermissao.ADMINISTRADOR,
  },
  {
    id: '2',
    nome: 'Mariana Lima',
    usuario: 'engenheiro',
    senha: 'engenheiro',
    telefone: '+55 12 99123-4567',
    endereco: 'Rua das Bandeiras, 45, S.J. Campos - SP',
    nivelPermissao: NivelPermissao.ENGENHEIRO,
  },
  {
    id: '3',
    nome: 'Rafael Pereira',
    usuario: 'operador',
    senha: 'operador',
    telefone: '+55 11 97777-8888',
    endereco: 'Alameda Santos, 200, São Paulo - SP',
    nivelPermissao: NivelPermissao.OPERADOR,
  },
];

// ── Contexto de Autenticação ─────────────────────────────────────────────────
interface AuthContextType {
  usuario: UsuarioAutenticado | null;
  isAutenticado: boolean;
  fazerLogin: (login: string, senha: string) => { sucesso: boolean; mensagem: string };
  fazerLogout: () => void;
  temPermissao: (niveisRequeridos: NivelPermissao[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Provider ─────────────────────────────────────────────────────────────────
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioAutenticado | null>(() => {
    // Recupera sessão do sessionStorage (persiste durante a aba)
    const stored = sessionStorage.getItem('aerocode_user');
    if (stored) {
      try {
        return JSON.parse(stored) as UsuarioAutenticado;
      } catch {
        return null;
      }
    }
    return null;
  });

  const isAutenticado = usuario !== null;

  const fazerLogin = useCallback((login: string, senha: string): { sucesso: boolean; mensagem: string } => {
    const func = funcionariosDB.find(f => f.usuario === login);

    if (!func) {
      return { sucesso: false, mensagem: 'Credenciais inválidas. Usuário não encontrado.' };
    }

    if (func.senha !== senha) {
      return { sucesso: false, mensagem: 'Credenciais inválidas. Senha incorreta.' };
    }

    const usuarioAutenticado: UsuarioAutenticado = {
      id: func.id,
      nome: func.nome,
      usuario: func.usuario,
      telefone: func.telefone,
      endereco: func.endereco,
      nivelPermissao: func.nivelPermissao,
    };

    setUsuario(usuarioAutenticado);
    sessionStorage.setItem('aerocode_user', JSON.stringify(usuarioAutenticado));

    return { sucesso: true, mensagem: `Bem-vindo, ${func.nome}!` };
  }, []);

  const fazerLogout = useCallback(() => {
    setUsuario(null);
    sessionStorage.removeItem('aerocode_user');
  }, []);

  const temPermissao = useCallback((niveisRequeridos: NivelPermissao[]): boolean => {
    if (!usuario) return false;
    return niveisRequeridos.includes(usuario.nivelPermissao);
  }, [usuario]);

  return (
    <AuthContext.Provider value={{ usuario, isAutenticado, fazerLogin, fazerLogout, temPermissao }}>
      {children}
    </AuthContext.Provider>
  );
};

// ── Hook de acesso ao contexto ───────────────────────────────────────────────
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
