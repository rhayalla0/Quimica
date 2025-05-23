const perguntas = [
    {
      pergunta: "Qual é o símbolo químico do Oxigênio?",
      opcoes: ["Ox", "O", "Og"],
      correta: 1
    },
    {
      pergunta: "Que tipo de ligação envolve compartilhamento de elétrons?",
      opcoes: ["Ligação iônica", "Ligação metálica", "Ligação covalente"],
      correta: 2
    },
    {
      pergunta: "Na reação de neutralização, ácido + base formam:",
      opcoes: ["Ácido forte", "Gás carbônico", "Sal e água"],
      correta: 2
    },
    {
      pergunta: "Qual dessas é uma reação de combustão?",
      opcoes: [
        "CH₄ + O₂ → CO₂ + H₂O",
        "NaOH + HCl → NaCl + H₂O",
        "H₂ + Cl₂ → 2HCl"
      ],
      correta: 0
    },
    {
      pergunta: "Qual o pH típico de uma solução básica?",
      opcoes: ["pH 3", "pH 10", "pH 2"],
      correta: 1
    }
  ];
  
  let indiceAtual = 0;
  let pontuacao = 0;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const feedbackEl = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextBtn');
  const mostrarPontuacaoBtn = document.getElementById('mostrarPontuacao');
  
  function carregarPergunta() {
    feedbackEl.innerText = '';
    feedbackEl.className = '';
    nextBtn.style.display = 'none';
    mostrarPontuacaoBtn.style.display = 'none';
  
    let p = perguntas[indiceAtual];
    questionEl.innerText = p.pergunta;
    optionsEl.innerHTML = '';
  
    p.opcoes.forEach((opcao, i) => {
      let btn = document.createElement('button');
      btn.innerText = opcao;
      btn.onclick = () => responder(i);
      optionsEl.appendChild(btn);
    });
  }
  
  function responder(opcaoSelecionada) {
    let p = perguntas[indiceAtual];
    feedbackEl.className = '';
    if (opcaoSelecionada === p.correta) {
      feedbackEl.innerText = '✅ Correto!';
      feedbackEl.classList.add('success');
      pontuacao++;
    } else {
      feedbackEl.innerText = '❌ Errado!';
      feedbackEl.classList.add('error');
    }
  
    // Bloquear botões após responder
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  
    if (indiceAtual < perguntas.length - 1) {
      nextBtn.style.display = 'inline-block';
    } else {
      mostrarPontuacaoBtn.style.display = 'inline-block';
    }
  }
  
  function proximaPergunta() {
    indiceAtual++;
    carregarPergunta();
  }
  
  function mostrarPontuacao() {
    alert(`Você acertou ${pontuacao} de ${perguntas.length} perguntas!`);
  }
  
  function resetarPontuacao() {
    indiceAtual = 0;
    pontuacao = 0;
    carregarPergunta();
    feedbackEl.innerText = '';
    feedbackEl.className = '';
    nextBtn.style.display = 'none';
    mostrarPontuacaoBtn.style.display = 'none';
    Array.from(optionsEl.children).forEach(btn => btn.disabled = false);
  }
  
  window.onload = carregarPergunta
