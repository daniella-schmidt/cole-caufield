# Cole Caufield

Projeto acadêmico desenvolvido para a disciplina de **Programação IV** da **UNOESC**. A página tem como objetivo apresentar um **curriculo do jogador de hóquei no gelo Cole Caufield**, com foco visual na identidade do **Montreal Canadiens**.

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

O arquivo `custom.js` contem as seguintes funcionalidades numeradas:

1. **VenoBox** – Lightbox para vídeo do YouTube.
2. **Preloader** – Animação de carregamento que desaparece após 3 segundos.
3. **Menu Mobile** – Abrir/fechar menu offcanvas em dispositivos móveis.
4. **Back to Top** – Botão com rolagem suave e visibilidade condicional.
5. **Isotope** – Grade em masonry para os destaques da carreira.
6. **Slick Carousel** – Carrossel automático para a seção de habilidades.
7. **CounterUp** – Animação dos números das estatísticas (jogos, gols, assistências, pontos).
8. **Barras de Progresso** – Largura dinâmica calculada com base nos valores máximos.
9. **Ano no Copyright** – Inserção dinâmica do ano atual (`innerText`).
10. **Leia Mais / Leia Menos** – Toggle de exibição de texto extra com `addEventListener`.
11. **Contador de Visitas** – Armazenamento e exibição de visitas via `localStorage`.
12. **Saudação Dinâmica** – Atualização em tempo real ao digitar o nome (evento `input` + `value`).
13. **Contador de Caracteres** – Mostra caracteres restantes no campo de mensagem (`innerText`).
14. **Controle de Áudio** – Play/pause da música de fundo, com início na primeira interação do usuário.
15. **Formulário de Contato** – Exibe `alert()` personalizado com o nome digitado ao clicar em "Enviar!".

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

## Desenvolvimento

Projeto desenvolvido por **Daniella Schmidt** para a disciplina de **Programação IV**, com foco em aplicar conceitos de desenvolvimento front-end de forma prática e criativa.

---

## Licença

Este projeto foi desenvolvido para **fins acadêmicos e educacionais**.

Os direitos sobre imagens, marcas, vídeos, músicas e demais conteúdos pertencem aos seus respectivos proprietários. A página não possui finalidade comercial.

---

Desenvolvido com **HTML, CSS e JavaScript** para a disciplina de **Programação IV — UNOESC**.
