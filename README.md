Site de Receitas Deliciosas
📖 Sobre o Projeto
Este é um projeto de um site de receitas front-end, simples e elegante. Ele foi desenvolvido para demonstrar a manipulação de dados com JavaScript puro, criando uma galeria de receitas dinâmica com funcionalidades de busca e uma página de detalhes para cada prato. O design é limpo, responsivo e focado na experiência do usuário.

✨ Funcionalidades
Página Inicial (index.html): Apresenta uma seção "hero" atraente e um formulário de inscrição para newsletter com validação.

Galeria de Receitas (receitas.html):

Exibe todas as receitas disponíveis em um layout de grade responsivo.

Apresenta um efeito de "skeleton loading" inicial para uma melhor experiência de usuário enquanto os cards são renderizados.

Busca Dinâmica: Permite que o usuário filtre as receitas em tempo real, buscando tanto no título quanto nos ingredientes.

Mensagem informativa caso nenhuma receita seja encontrada na busca.

Página de Detalhes da Receita (receita.html):

Carrega dinamicamente os dados (imagem, título, ingredientes, modo de preparo) da receita selecionada a partir de um ID na URL (query parameter).

Layout claro e organizado para facilitar a leitura da receita.

Design Responsivo: O site se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

JavaScript Modularizado: O código JavaScript é dividido em arquivos com responsabilidades específicas (dados-receitas.js, galeria.js, carregar-receita.js, script.js), facilitando a manutenção.

🚀 Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias web fundamentais:

HTML5: Para a estrutura semântica das páginas.

CSS3: Para estilização, layout (Flexbox e Grid), responsividade e animações.

JavaScript (ES6+): Para toda a interatividade, manipulação do DOM, lógica de busca e carregamento dinâmico de conteúdo.

📂 Estrutura de Arquivos
O projeto está organizado da seguinte forma:

/
├── Imagens/
│   ├── brownie-de-chocolate.png
│   └── ... (outras imagens de receitas)
├── index.html                # Página inicial
├── receitas.html             # Página com a galeria de todas as receitas
├── receita.html              # Modelo da página de detalhes de uma receita
├── style.css                 # Folha de estilos principal
├── dados-receitas.js         # Arquivo com o array de objetos de todas as receitas
├── galeria.js                # Lógica para renderizar e filtrar a galeria em receitas.html
├── carregar-receita.js       # Lógica para carregar os dados na página receita.html
└── script.js                 # Scripts gerais (validação da newsletter, ano dinâmico no footer)
Detalhes dos Scripts:
dados-receitas.js: Atua como um "banco de dados" local, armazenando todas as informações das receitas em um array de objetos.

galeria.js: Responsável por ler o array de receitas e criar dinamicamente os cards na página receitas.html. Também contém a lógica do campo de busca para filtrar os resultados.

carregar-receita.js: Pega o id da receita da URL, encontra a receita correspondente no array de dados e preenche a página receita.html com as informações corretas.

script.js: Contém funcionalidades aplicadas a múltiplas páginas, como a validação do formulário de newsletter e a atualização automática do ano no rodapé.

🛠️ Como Executar
Este é um projeto front-end estático, portanto, não requer um servidor ou dependências complexas para ser executado.

Clone o repositório ou baixe os arquivos.

Navegue até a pasta do projeto.

Abra o arquivo index.html no seu navegador de preferência.

Você pode simplesmente dar um duplo clique no arquivo ou arrastá-lo para a janela do navegador.

E pronto! Você pode navegar entre a página inicial e a galeria de receitas, testar a busca e visualizar os detalhes de cada prato.
