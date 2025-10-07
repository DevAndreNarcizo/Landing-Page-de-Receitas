# 🍰 Site de Receitas Deliciosas

## 📖 Sobre o Projeto
O **Site de Receitas Deliciosas** é um projeto front-end simples e elegante, desenvolvido para demonstrar a manipulação de dados com **JavaScript puro**.  
Ele apresenta uma **galeria de receitas dinâmica**, com **busca em tempo real** e **página de detalhes** para cada prato.  
O design é **limpo, responsivo** e focado na **experiência do usuário**.

---

## ✨ Funcionalidades

### 🏠 Página Inicial (`index.html`)
- Seção *hero* com destaque visual.  
- Formulário de inscrição para newsletter com validação.  

### 🍳 Galeria de Receitas (`receitas.html`)
- Exibe todas as receitas em um **layout de grade responsivo**.  
- Efeito de **"skeleton loading"** para melhorar a experiência do usuário durante o carregamento.  
- **Busca dinâmica**: filtra receitas em tempo real (por título e ingredientes).  
- Mensagem informativa quando nenhuma receita é encontrada.  

### 📄 Página de Detalhes da Receita (`receita.html`)
- Carregamento dinâmico dos dados da receita (imagem, título, ingredientes, modo de preparo).  
- Obtém o **ID da receita via URL** (query parameter).  
- Layout limpo e de fácil leitura.  

### 📱 Design Responsivo
- Adapta-se perfeitamente a diferentes tamanhos de tela (desktop, tablet e mobile).  

### 🧩 JavaScript Modularizado
- Código dividido em módulos com responsabilidades específicas:  
  - `dados-receitas.js`  
  - `galeria.js`  
  - `carregar-receita.js`  
  - `script.js`  

---

## 🚀 Tecnologias Utilizadas

- **HTML5** → Estrutura semântica das páginas.  
- **CSS3** → Estilização, layout responsivo (Flexbox e Grid) e animações.  
- **JavaScript (ES6+)** → Interatividade, manipulação do DOM e lógica de busca.  

---

## 📂 Estrutura de Arquivos

├── Imagens/
│ ├── brownie-de-chocolate.png
│ └── ... (outras imagens de receitas)
├── index.html # Página inicial
├── receitas.html # Galeria de todas as receitas
├── receita.html # Página de detalhes da receita
├── style.css # Estilos principais
├── dados-receitas.js # "Banco de dados" local de receitas
├── galeria.js # Renderização e busca de receitas
├── carregar-receita.js # Carregamento dinâmico da receita selecionada
└── script.js # Scripts gerais (validação e footer)


---

## 🧠 Detalhes dos Scripts

### `dados-receitas.js`
Atua como um *banco de dados local*, armazenando todas as informações das receitas em um **array de objetos**.

### `galeria.js`
Responsável por **renderizar dinamicamente** os cards das receitas e aplicar a **lógica de busca em tempo real**.

### `carregar-receita.js`
Lê o **ID da receita** a partir da URL e **carrega automaticamente** os dados correspondentes na página de detalhes.

### `script.js`
Contém funções gerais, como:
- **Validação** do formulário de newsletter.  
- **Atualização automática** do ano no rodapé.  

---

## 🛠️ Como Executar

Este é um projeto **front-end estático**, portanto não requer servidor ou dependências externas.

### Passos:
1. **Clone** o repositório ou **baixe os arquivos**:
   ```bash
   git clone https://github.com/SEU_USUARIO/site-receitas-deliciosas.git

2. Acesse a pasta do projeto:

cd site-receitas-deliciosas

-------------------------------------------------------------------------------------------------
3. Abra o arquivo index.html no navegador:

Dê um duplo clique no arquivo, ou

Arraste-o para a janela do navegador.

✅ Pronto!
Agora você pode navegar entre as páginas, testar a busca e visualizar os detalhes das receitas.

📜 Licença

Este projeto está sob a licença MIT

👨‍💻 Desenvolvido por Dev. André Narcizo
