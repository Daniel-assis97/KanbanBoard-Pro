# 📋 KanbanBoard Pro

O **KanbanBoard Pro** é um gerenciador de tarefas ágil baseado na metodologia Kanban, desenvolvido inteiramente com **JavaScript Puro (Vanilla JS)**, **HTML5 semântico** e **CSS3 moderno**. O projeto foi concebido para oferecer uma experiência fluida de organização pessoal e profissional, contando com movimentação nativa por arrasto, suporte a temas e persistência robusta de dados locais.

---

## 🚀 Funcionalidades

* **Movimentação Nativa (Drag and Drop):** Arraste e solte seus cards de tarefas entre as colunas (*A Fazer*, *Em Andamento* e *Concluído*) de maneira intuitiva e responsiva.
* **Persistência de Dados (Web Storage):** Os dados são salvos de forma automática e transparente no navegador via `LocalStorage`, garantindo que nenhuma informação seja perdida ao fechar ou atualizar a página (`F5`).
* **Modo Escuro (Dark Mode):** Alternância dinâmica de tema integrado diretamente no cabeçalho, adaptando paletas de cores e contrastes para conforto visual.
* **Design Responsivo Extremo (Mobile-First):** Layout totalmente maleável usando Media Queries e técnicas de Flexbox, transformando o painel horizontal de computadores em um fluxo vertical empilhado perfeitamente legível em celulares.
* **Crescimento Fluido e Inteligente:** Uso estratégico de regras de dimensionamento físico (`min-height` e `height: auto`), permitindo que as colunas expandam organicamente conforme novos cards são acumulados, impedindo quebras ou transbordo de layout.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica, modular e acessível das seções, cabeçalhos e colunas.
* **CSS3:** Estilização avançada, transições suaves de cor/fundo, efeitos dinâmicos ao arrastar (`.dragging`) e responsividade integrada.
* **JavaScript (ES6+):** Manipulação avançada e reativa do DOM, escutadores de eventos de ciclo de arrasto nativos (`dragstart`, `dragover`, `drop`, `dragend`), manipulação matemática de arrays de objetos e gerenciamento de estados locais.

---

## 📦 Como Usar o Projeto

1. Baixe os arquivos do projeto ou clone o repositório em sua máquina.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam localizados exatamente na mesma pasta raiz.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.

---

## 📝 Detalhes Técnicos e Garantia de Qualidade

* **Prevenção de Bugs no Arraste:** Inclusão de `pointer-events: none` nas tags internas dos cards (`<p>`) para evitar que a seleção de texto trave ou interfira no ciclo físico de disparo do Drag and Drop do navegador.
* **Gerenciamento Seguro de Coleções:** Uso do operador de coalescência nula (`?? []`) durante a leitura do `LocalStorage`, anulando falhas críticas de execução (`Uncaught TypeError`) caso a aplicação seja inicializada pela primeira vez com o banco de dados limpo.
* **Sincronização de Estados:** A propriedade `status` de cada objeto de tarefa é sincronizada rigidamente com o `id` da coluna receptora no exato momento do evento `drop`, mantendo a integridade absoluta entre o que é exibido na tela e o que está salvo em disco.

---

## 👨‍💻 Autor

Desenvolvido por **Daniel Assis** — Estudante de Análise e Desenvolvimento de Sistemas (ADS).
