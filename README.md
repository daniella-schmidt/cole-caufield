# Cole Caufield

Projeto acadêmico desenvolvido para a disciplina de **Programação IV** da **UNOESC**. A página tem como objetivo apresentar uma **landing page do jogador de hóquei no gelo Cole Caufield**, com foco visual na identidade do **Montreal Canadiens**.

A aplicação foi criada como uma landing page responsiva e interativa, combinando elementos de design, conteúdo esportivo, animações e recursos front-end para simular uma página moderna de divulgação e fan engagement.

## Demonstração

A página está disponível online no GitHub Pages:

[**Acessar website**](https://daniella-schmidt.github.io/cole-caufield/)

---

## Objetivo do Projeto

O projeto foi desenvolvido para aplicar conceitos estudados em **Programação IV**, como:

- estrutura semântica em HTML5;
- estilização e responsividade com CSS3;
- manipulação do DOM com JavaScript;
- uso de bibliotecas e plugins front-end;
- criação de interfaces interativas e visualmente consistentes.

---

## Funcionalidades Gerais

- **Layout responsivo** para diferentes tamanhos de tela;
- **Header e navegação mobile** com menu offcanvas;
- **Animações e hover effects** em elementos interativos;
- **Carrossel de informações** com Slick;
- **Galeria de imagens** em estilo Masonry com Isotope;
- **Lightbox para vídeos** com VenoBox;
- **Contadores animados** para estatísticas;
- **Player de áudio** com reprodução de música de fundo;
- **Botão de voltar ao topo** com rolagem suave;
- **Formulário de contato** com feedback visual;
- **Atualização dinâmica do ano** no rodapé;
- **Identidade visual inspirada nas cores do Montreal Canadiens**.

---

## Funcionalidades JavaScript (Lista Numerada)

O arquivo `custom.js` contem as seguintes funcionalidades, numeradas para facilitar a correcao:

1. **VenoBox** – Ativa o lightbox para exibicao de video.
2. **Preloader** – Exibe uma animacao de carregamento e a remove apos 3 segundos.
3. **Menu Mobile** – Controla a abertura e fechamento do menu offcanvas em dispositivos moveis.
4. **Back to Top** – Botao com rolagem suave para o topo; aparece/desaparece conforme a rolagem.
5. **Isotope** – Organiza a grade de destaques em layout masonry.
6. **Slick Carousel** – Cria um carrossel automatico para a secao de habilidades.
7. **CounterUp** – Anima os numeros das estatisticas (jogos, gols, assistencias, pontos).
8. **Barras de Progresso** – Calcula e anima a largura das barras com base nos valores das estatisticas, acionado ao entrar na tela (waypoint).
9. **Ano no Copyright** – Insere dinamicamente o ano atual no rodape (innerText).
10. **Leia Mais / Leia Menos** – Toggle de exibicao de um bloco de texto adicional com `addEventListener` (requisito 2).
11. **Contador de Visitas** – Utiliza `localStorage` para armazenar e exibir o numero de visitas (requisito adicional).
12. **Saudacao Dinamica** – Ao digitar o nome no campo "Nome", a saudacao e atualizada em tempo real (captura de `value` – requisito 4).
13. **Contador de Caracteres** – Mostra quantos caracteres restam no campo de mensagem, atualizando com `innerText` (requisito 3).
14. **Controle de Audio** – Botao de play/pause para a musica de fundo, com inicio na primeira interacao do usuario.
15. **Formulario de Contato** – Ao clicar em "Enviar!", exibe um `alert()` com uma mensagem personalizada, capturando o nome digitado (requisito 1).

---

## Tecnologias e Bibliotecas

| Tecnologia / Biblioteca | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura semântica da página |
| CSS3 | Estilo, layout, responsividade e animações |
| JavaScript | Interações, manipulação do DOM e eventos |
| jQuery | Integração com plugins e scripts auxiliares |
| Bootstrap 5 | Grid, componentes e responsividade |
| Slick Carousel | Carrossel e sliders |
| Isotope | Organização da galeria em layout dinâmico |
| VenoBox | Lightbox para imagens e vídeos |
| CounterUp | Animação dos contadores |
| Waypoints | Ativação de efeitos ao rolar a página |

---

## Estrutura do Projeto

```text
cole-caufield/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── responsive.css
│   │   ├── slick.css
│   │   ├── style.css
│   │   └── venobox.min.css
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.js
│   │   ├── custom.js
│   │   ├── email-decode.min.js
│   │   ├── isotope.pkgd.min.js
│   │   ├── jquery-1.12.4.min.js
│   │   ├── jquery.counterup.min.js
│   │   ├── slick.min.js
│   │   └── venobox.min.js
│   │
│   └── media/
│       ├── audio/
│       │   └── MrSaturdayNight.mp3
│       └── image/
│           └── others/
│               ├── banner/
│               ├── elements/
│               ├── icon/
│               ├── journal/
│               ├── logo/
│               └── ...
│
├── index.html
└── README.md
```

---

## Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/daniella-schmidt/cole-caufield.git
```

### 2. Acesse a pasta do projeto

```bash
cd cole-caufield
```

### 3. Abra o arquivo HTML no navegador

Você pode abrir diretamente o arquivo `index.html` no navegador ou usar uma extensão como **Live Server** no VS Code.

---

## Contexto Acadêmico

**Disciplina:** Programação IV  
**Instituição:** UNOESC — Universidade do Oeste de Santa Catarina

Este projeto foi desenvolvido como parte de uma atividade prática de front-end, com foco na aplicação de conceitos de web design, responsividade e interatividade em uma página estática.

---

## Sobre Cole Caufield

**Cole Caufield** é um jogador profissional norte-americano de hóquei no gelo, conhecido por sua atuação como atacante no **Montreal Canadiens** na **NHL**. A lading page foi criada como uma homenagem visual e acadêmica ao atleta, reunindo elementos gráficos e informativos relacionados à sua trajetória e identidade esportiva.

---

## Desenvolvimento

Projeto desenvolvido por **Daniella Schmidt** para a disciplina de **Programação IV**, com foco em aplicar conceitos de desenvolvimento front-end de forma prática e criativa.

---

## Licença

Este projeto foi desenvolvido para **fins acadêmicos e educacionais**.

Os direitos sobre imagens, marcas, vídeos, músicas e demais conteúdos pertencem aos seus respectivos proprietários. A página não possui finalidade comercial.

---

Desenvolvido com **HTML, CSS e JavaScript** para a disciplina de **Programação IV — UNOESC**.
