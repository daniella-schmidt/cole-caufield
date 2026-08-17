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
    document.getElementById('nav-opn-btn').setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    document.body.style.overflowY = "";
    $("#offcanvas-nav").removeClass("open");
    document.getElementById('nav-opn-btn').setAttribute('aria-expanded', 'false');
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

  // ========== 7. COUNTERUP + BARRAS DE PROGRESSO ==========
  if ($(".counter").length) {
    var totalTime = 5000 + 100;
    $(".counter").waypoint({
      handler: function () {
        $(this.element).counterUp({
          delay: 100,
          time: 5000
        });
        setTimeout(function () {
          setProgressBars();
        }, totalTime);
      },
      offset: "100%",
      triggerOnce: true
    });
  }

  // ========== 8. BARRAS DE PROGRESSO – Largura dinâmica ==========
  function setProgressBars() {
    var values = [];
    $(".proress-item-text-two .counter").each(function () {
      var val = parseInt($(this).text());
      if (!isNaN(val)) values.push(val);
    });
    if (values.length === 0) return;
    var maxVal = Math.max.apply(null, values);

    $(".proress-item-text-two").each(function (index) {
      var $counter = $(this).find(".counter");
      var val = parseInt($counter.text());
      if (isNaN(val)) return;
      var percent = (val / maxVal) * 100;
      $(this).find('.progress-bar').css('width', percent + '%');
    });
  }

  // ========== 9. ANO NO COPYRIGHT – Atualização automática (innerText) ==========
  document.getElementById('currentYear').innerText = new Date().getFullYear();

  // ========== 10. LEIA MAIS / LEIA MENOS – Toggle de seção com addEventListener ==========
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

  // ========== 11. CONTADOR DE VISITAS – localStorage ==========
  const visitCounterEl = document.getElementById('visit-counter');
  let visitas = parseInt(localStorage.getItem('visitas')) || 0;
  visitas++;
  localStorage.setItem('visitas', visitas);

  if (visitCounterEl) {
    visitCounterEl.innerHTML = `Você já visitou esta página ${visitas} ${visitas === 1 ? 'vez' : 'vezes'}.`;
  }

  // ========== 12. SAUDAÇÃO DINÂMICA ENQUANTO DIGITA ==========
  const nomeInputLive = document.getElementById('exampleFormControlInput1');
  const liveGreeting = document.getElementById('live-greeting');

  if (nomeInputLive && liveGreeting) {
    nomeInputLive.addEventListener('input', function () {
      const nome = nomeInputLive.value.trim();
      liveGreeting.innerText = nome ? `Olá, ${nome}! Bem-vindo(a).` : '';
    });
  }

  // ========== 13. CONTADOR DE CARACTERES DA MENSAGEM ==========
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
        audio.play().catch(() => {});
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-pressed', 'true');
      } else {
        audio.pause();
        audioBtn.classList.remove('playing');
        audioBtn.setAttribute('aria-pressed', 'false');
      }
    });

    document.addEventListener('click', function initAudio() {
      if (audio.paused) {
        audio.play().catch(() => {});
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-pressed', 'true');
      }
      document.removeEventListener('click', initAudio);
    }, { once: true });
  }

  // ========== 15. FORMULÁRIO DE CONTATO – Validação + alert ==========
  const nomeInput = document.getElementById('exampleFormControlInput1');
  const sobrenomeInput = document.getElementById('exampleFormControlInput2');
  const emailInput = document.getElementById('exampleFormControlInput3');
  const telefoneInput = document.getElementById('exampleFormControlInput4');
  const mensagemInput = document.getElementById('exampleFormControlTextarea1');

  function criarErro(campo, mensagem) {
    let erro = campo.parentNode.querySelector('.erro-msg');
    if (!erro) {
      erro = document.createElement('small');
      erro.className = 'erro-msg';
      erro.style.color = '#dc3545';
      erro.style.display = 'block';
      erro.style.marginTop = '4px';
      campo.parentNode.appendChild(erro);
    }
    erro.textContent = mensagem;
    campo.style.borderColor = '#dc3545';
  }

  function removerErro(campo) {
    const erro = campo.parentNode.querySelector('.erro-msg');
    if (erro) {
      erro.remove();
      campo.style.borderColor = '';
    }
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarTelefone(tel) {
    const cleaned = tel.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  }

  function validarCampo(campo, testFn, mensagemErro) {
    const val = campo.value.trim();
    if (!val || (testFn && !testFn(val))) {
      criarErro(campo, mensagemErro);
      return false;
    } else {
      removerErro(campo);
      return true;
    }
  }

  const btnEnviar = document.querySelector('.send-btn .btn-style-1 a');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', function (e) {
      e.preventDefault();

      let valido = true;
      valido &= validarCampo(nomeInput, (v) => v.length >= 2, 'Nome deve ter pelo menos 2 caracteres.');
      valido &= validarCampo(sobrenomeInput, (v) => v.length >= 2, 'Sobrenome deve ter pelo menos 2 caracteres.');
      valido &= validarCampo(emailInput, validarEmail, 'Digite um e-mail válido (ex: nome@dominio.com).');
      valido &= validarCampo(telefoneInput, validarTelefone, 'Digite um telefone válido (ex: (49) 99999-9999).');
      valido &= validarCampo(mensagemInput, (v) => v.length > 0 && v.length <= 300, 'Mensagem obrigatória (máx. 300 caracteres).');

      if (valido) {
        const nome = nomeInput.value.trim();
        const saudacao = nome ? `Obrigado pela mensagem, ${nome}! Retornarei em breve.` : 'Mensagem enviada com sucesso!';
        alert(saudacao);
        // Opcional: resetar formulário
        // document.querySelector('.send-item').querySelectorAll('input, textarea').forEach(el => el.value = '');
        // removerErro de cada campo
      }
    });
  }

  // Remover erros ao digitar (melhor UX)
  [nomeInput, sobrenomeInput, emailInput, telefoneInput, mensagemInput].forEach(campo => {
    if (campo) {
      campo.addEventListener('input', function () {
        removerErro(this);
      });
    }
  });

  // ========== GRÁFICO DE GOLS (Canvas) ==========
  var canvas = document.getElementById('goalsChart');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    var data = {
      labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26'],
      values: [4, 23, 26, 28, 37, 51],
      colors: ['#042F9C', '#A50F27', '#042F9C', '#A50F27', '#042F9C', '#A50F27']
    };

    var barWidth = 60;
    var gap = 30;
    var startX = (width - (data.labels.length * (barWidth + gap) - gap)) / 2;
    var maxValue = Math.max(...data.values) * 1.2;
    var chartHeight = height - 40;
    var bottomY = height - 20;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.moveTo(20, 20);
    ctx.lineTo(20, bottomY);
    ctx.lineTo(width - 20, bottomY);
    ctx.stroke();

    for (var i = 0; i < data.labels.length; i++) {
      var x = startX + i * (barWidth + gap);
      var barHeight = (data.values[i] / maxValue) * chartHeight;
      var y = bottomY - barHeight;

      ctx.fillStyle = data.colors[i];
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = '#333';
      ctx.font = '12px Work Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data.values[i], x + barWidth / 2, y - 5);
      ctx.fillText(data.labels[i], x + barWidth / 2, bottomY + 16);
    }
  }

});