# Aerocode GUI ✈️

## Descrição do Projeto
O **Aerocode GUI** é um sistema de gerenciamento industrial de alta performance voltado para a cadeia de produção e manutenção aeronáutica. O software oferece uma interface gráfica moderna e intuitiva para o controle rigoroso de estoque de peças, gestão estratégica de colaboradores, monitoramento em tempo real de etapas produtivas e execução de protocolos de testes de qualidade.

## Contexto Acadêmico
Este projeto foi desenvolvido como requisito avaliativo para a disciplina de **Programação Orientada a Objetos (POO)** na **Fatec São José dos Campos**.

*   **Instituição:** Fatec São José dos Campos - Prof. Jessen Vidal
*   **Matéria:** Programação Orientada a Objetos (POO)
*   **Professor:** Eng. Dr. Gerson Penha Neto
*   **Desenvolvedor:** [Daniel Dias Pereira](https://github.com/DanielDPereira)

## Evolução do Projeto
O Aerocode GUI representa a maturidade tecnológica do projeto (AV2), sendo uma evolução direta do [Aerocode CLI](https://github.com/DanielDPereira/AV1/). Enquanto a primeira versão focava na solidez da lógica de negócios via linha de comando, esta versão expande o ecossistema para a web, implementando uma interface gráfica robusta, responsiva e seguindo padrões avançados de UX/UI.

## Funcionalidades Principais
-   📊 **Dashboard Operacional:** Visão analítica e consolidada do status do sistema.
-   🛩️ **Gestão de Aeronaves:** Cadastro e acompanhamento detalhado de modelos e unidades.
-   ⚙️ **Fluxo de Etapas:** Controle granular das fases de montagem, manutenção e inspeção.
-   📦 **Inventário de Peças:** Gestão inteligente de componentes e insumos industriais.
-   👥 **Gestão de Colaboradores:** Sistema de RBAC (Role-Based Access Control) com níveis de permissão:
    -   **Administrador:** Acesso total ao sistema e gestão de pessoal.
    -   **Engenheiro:** Gestão técnica e operacional.
    -   **Operador:** Execução e acompanhamento de tarefas.
-   🧪 **Controle de Qualidade:** Registro sistemático de testes e validações técnicas.
-   📄 **Relatórios:** Geração de dados para auditoria e otimização de processos.

## Tecnologias Utilizadas
A stack tecnológica foi selecionada para garantir escalabilidade, performance e segurança:

-   **React 19:** Biblioteca de ponta para interfaces reativas.
-   **TypeScript:** Tipagem estática para robustez e redução de bugs em tempo de compilação.
-   **Vite:** Tooling de última geração para desenvolvimento ágil.
-   **Tailwind CSS 4:** Estilização utilitária para um design premium e responsivo.
-   **React Router Dom 7:** Navegação fluida e segura entre módulos.
-   **Context API:** Gerenciamento centralizado de estado e autenticação.

## Pré-requisitos
Para rodar este projeto localmente, você deve ter instalado:
-   [Node.js](https://nodejs.org/) (v20 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DanielDPereira/AV2.git
    cd AV2
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesso:**
    Abra o seu navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

---

## Documentação e Relatórios
Para detalhes técnicos sobre a arquitetura do sistema, diagramas de classe (UML) e fundamentação teórica de POO aplicada, acesse o documento abaixo:

📂 **[Relatório para desenvolvimento - Aerocode - GUI.pdf](./Docs/Relatório%20para%20desenvolvimento%20-%20Aerocode%20-%20GUI.pdf)**

> [!IMPORTANT]
> **Atenção:** Recomenda-se a leitura do relatório acima para uma compreensão completa da arquitetura do projeto e das decisões de design implementadas.

---
*Desenvolvido com dedicação para a disciplina de POO - Fatec SJC.*
