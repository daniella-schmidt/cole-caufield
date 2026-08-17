$(function () {

  // ========== 1. VENOBOX – Lightbox para vídeo ==========
  new VenoBox({
    selector: ".my-video-links",
  });

  // ========== 2. PRELOADER – Tela de carregamento ==========
  $("#main-preloder")
    .delay(3000)
    .fadeOut(200);

  // ========== 3. MENU MOBILE – Abrir/fechar offcanvas ==========
  function openNav() {
    document.body.style.overflowY = "hidden";
    $("#offcanvas-nav").addClass("open");
  }
  function closeNav() {
    document.body.style.overflowY = "";
    $("#offcanvas-nav").removeClass("open");
  }
  $("#nav-opn-btn").on("click", openNav);
  $("#nav-cls-btn").on("click", closeNav);

  // ========== 4. BACK TO TOP – Rolagem suave e visibilidade ==========
  $(".back-to-top i").on("click", function () {
    $("html,body").animate({ scrollTop: 0 });
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    // Navbar background on scroll
    if (scrolling > 50) {
      $(".menu-bg").addClass("nav-bg");
    } else {
      $(".menu-bg").removeClass("nav-bg");
    }

    // Back to top visibility
    if (scrolling > 20) {
      $(".back-to-top i").fadeIn(500);
    } else {
      $(".back-to-top i").fadeOut(500);
    }
  });

  // ========== 5. ISOTOPE – Grade em masonry para destaques ==========
  $(window).on("load", function () {
    if ($(".grid").length > 0) {
      $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "masonry",
        resize: true,
        masonry: {
          gutter: 30,
          columnWidth: ".grid-item",
        },
        percentPosition: true,
        fitColumns: {
          gutter: ".grid-sizer",
        },
      });
    }
  });

  // ========== 6. SLICK CAROUSEL – Carrossel de habilidades ==========
  $(".mar-top").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // ========== 7. COUNTERUP – Animação de números nas estatísticas ==========
  $(".counter").counterUp({
    delay: 100,
    time: 5000,
  });

  // ========== 8. BARRAS DE PROGRESSO – Largura dinâmica com waypoint ==========
  function setProgressBars() {
    var values = [];
    $(".proress-item-text-two .counter").each(function () {
      var val = parseInt($(this).text());
      if (!isNaN(val)) values.push(val);
    });
    if (values.length === 0) return;
    var maxVal = Math.max.apply(null, values);

    $(".proress-item-text-two").each(function () {
      var $counter = $(this).find(".counter");
      var val = parseInt($counter.text());
      if (isNaN(val)) return;
      var percent = (val / maxVal) * 100;
      this.style.setProperty("--progress-width", percent + "%");
    });
  }

  if ($(".proress-item").length > 0) {
    $(".proress-item").waypoint(
      function () {
        setProgressBars();
      },
      { offset: "100%", triggerOnce: true }
    );
  }

  // ========== 9. ANO NO COPYRIGHT – Atualização automática (innerText) ==========
  document.getElementById('currentYear').innerText = new Date().getFullYear();

  // ======================================================================
  // ========== FUNÇÕES EXIGIDAS PELOS REQUISITOS AVALIATIVOS ==========
  // ======================================================================

  // ========== 10. LEIA MAIS / LEIA MENOS – Toggle de seção com addEventListener ==========
  // [REQUISITO 2 – Mostrar/esconder seção com addEventListener]
  const readMoreBtn = document.getElementById('read-more-btn');
  const aboutExtra = document.getElementById('about-extra');

  if (readMoreBtn && aboutExtra) {
    readMoreBtn.addEventListener('click', function () {
      const estaEscondido = aboutExtra.style.display === 'none';

      if (estaEscondido) {
        aboutExtra.style.display = 'block';
        readMoreBtn.innerText = 'Leia menos';
      } else {
        aboutExtra.style.display = 'none';
        readMoreBtn.innerText = 'Leia mais';
      }
    });
  }

  // ========== 11. CONTADOR DE VISITAS – localStorage (com ícone e plural) ==========
  // [REQUISITO ADICIONAL – contador com localStorage]
  const visitCounterEl = document.getElementById('visit-counter');
  let visitas = parseInt(localStorage.getItem('visitas')) || 0;
  visitas++;
  localStorage.setItem('visitas', visitas);

  if (visitCounterEl) {
    visitCounterEl.innerHTML = `Você já visitou esta página ${visitas} ${visitas === 1 ? 'vez' : 'vezes'}.`;
  }

  // ========== 12. SAUDAÇÃO DINÂMICA ENQUANTO DIGITA – Coleta de dado de campo (value) ==========
  // [REQUISITO 4 – Coletar e exibir dados inseridos em um campo – em tempo real]
  const nomeInputLive = document.getElementById('exampleFormControlInput1');
  const liveGreeting = document.getElementById('live-greeting');

  if (nomeInputLive && liveGreeting) {
    nomeInputLive.addEventListener('input', function () {
      const nome = nomeInputLive.value.trim();
      liveGreeting.innerText = nome ? `Olá, ${nome}! Bem-vindo(a).` : '';
    });
  }

  // ========== 13. CONTADOR DE CARACTERES DA MENSAGEM – addEventListener + innerText (bônus) ==========
  // [REQUISITO 3 – Alterar conteúdo com innerText]
  const mensagemTextarea = document.getElementById('exampleFormControlTextarea1');
  const charCounter = document.getElementById('char-counter');
  const LIMITE_CARACTERES = 300;

  if (mensagemTextarea && charCounter) {
    mensagemTextarea.addEventListener('input', function () {
      const restantes = LIMITE_CARACTERES - mensagemTextarea.value.length;
      charCounter.innerText = `${restantes} caracteres restantes`;
    });
  }

  // ========== 14. CONTROLE DE ÁUDIO – Play/Pause ==========
  const audio = document.getElementById('background-audio');
  const audioBtn = document.querySelector('.audio-button');

  if (audio && audioBtn) {
    audioBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play().catch(() => { /* navegador pode bloquear autoplay */ });
        audioBtn.classList.add('playing');
      } else {
        audio.pause();
        audioBtn.classList.remove('playing');
      }
    });

    // Inicia áudio na primeira interação do usuário (evita bloqueio)
    document.addEventListener('click', function initAudio() {
      if (audio.paused) {
        audio.play().catch(() => { });
        audioBtn.classList.add('playing');
      }
      document.removeEventListener('click', initAudio);
    }, { once: true });
  }

  // ========== 15. FORMULÁRIO DE CONTATO – Exibição de saudação personalizada com alert() ==========
  // [REQUISITO 1 – Exibir saudação com alert()]
  const btnEnviar = document.querySelector('.send-btn .btn-style-1 a');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', function (e) {
      e.preventDefault();
      const nome = nomeInputLive ? nomeInputLive.value.trim() : '';
      const saudacao = nome ? `Obrigado pela mensagem, ${nome}! Retornarei em breve.` : 'Mensagem enviada com sucesso!';
      alert(saudacao);
    });
  }

});