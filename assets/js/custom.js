$(function () {

  // Venobox para vídeo
  new VenoBox({
    selector: ".my-video-links",
  });

  // Preloader
  $("#main-preloder")
    .delay(3000)
    .fadeOut(200);

  // Menu mobile
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

  // Back to top
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

  // Isotope / Masonry para a grade de destaques (Product)
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

  // Slick carousel para os serviços (habilidades)
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

  // CounterUp para estatísticas
  $(".counter").counterUp({
    delay: 100,
    time: 5000,
  });

  // Barras de progresso (baseadas nos números)
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

  // Anima as barras quando a seção entra na tela, junto com o counterUp,
  // em vez de calcular tudo cedo demais (antes do usuário rolar até lá)
  if ($(".proress-item").length > 0) {
    $(".proress-item").waypoint(
      function () {
        setProgressBars();
      },
      { offset: "100%", triggerOnce: true }
    );
  }

  // Atualiza o ano no copyright automaticamente
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // ========== CONTROLE DE ÁUDIO ==========
  const audio = document.getElementById('background-audio');
  const audioBtn = document.querySelector('.audio-button');

  if (audio && audioBtn) {
      // Alterna play/pause ao clicar no botão
      audioBtn.addEventListener('click', function() {
          if (audio.paused) {
              audio.play().catch(() => { /* navegador pode bloquear autoplay */ });
              audioBtn.classList.add('playing');
          } else {
              audio.pause();
              audioBtn.classList.remove('playing');
          }
      });

      // Opcional: inicia o áudio quando o usuário interagir com a página (para evitar bloqueio)
      document.addEventListener('click', function initAudio() {
          if (audio.paused) {
              audio.play().catch(() => {});
              audioBtn.classList.add('playing');
          }
          document.removeEventListener('click', initAudio);
      }, { once: true });
  }

  // "Enviar!" do formulário de contato
  const btnEnviar = document.querySelector('.send-btn .btn-style-1 a');
  if (btnEnviar) {
      btnEnviar.addEventListener('click', function (e) {
          e.preventDefault();
          alert('Mensagem enviada com sucesso!');
      });
  }
});