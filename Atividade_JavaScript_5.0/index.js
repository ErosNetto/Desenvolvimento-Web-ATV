// Função da ativiade 1
function gerarParagrafos() {
  let paragrafosDiv = document.querySelector(".paragrafos");
  let conteudo = "";

  for (let i = 0; i < 10; i++) {
    if ((i + 1) % 3 === 0) {
      conteudo +=
        '<p class="color-paragrafo">Parágrafo ' +
        (i + 1) +
        ": Texto aleatório.</p>";
    } else {
      conteudo += "<p>Parágrafo " + (i + 1) + ": Texto aleatório.</p>";
    }
  }

  paragrafosDiv.innerHTML = conteudo;
}

function excluirParagrafos() {
  let paragrafosDiv = document.querySelector(".paragrafos");
  paragrafosDiv.innerHTML = "";
}

// Função da atividade 2
function gerarTabuada() {
  const num = parseInt(document.querySelector("#numero").value);
  let tabuadaDiv = document.querySelector(".tabuada");
  let conteudo = "";

  if (num >= 1 && num <= 10) {
    for (let i = 1; i <= 10; i++) {
      conteudo += `<p>Tabuada: ${i} x ${num} = ${i * num}</p>`;
    }
  } else {
    conteudo = "<p>Valor inválido, informe um número entre 1 e 10.</p>";
  }

  tabuadaDiv.innerHTML = conteudo;
}

function excluirParagrafos() {
  let tabuadaDiv = document.querySelector(".tabuada");
  tabuadaDiv.innerHTML = "";
}

// Função da atividade 3
function calculaMedia() {
  const mediaDiv = document.querySelector(".resultadoMedia");
  const nota1 = parseFloat(document.querySelector("#nota1").value);
  const nota2 = parseFloat(document.querySelector("#nota2").value);
  const faltas = parseInt(document.querySelector("#faltas").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(faltas)) {
    alert("Por favor, preencha todos os campos de notas e faltas.");
    return;
  }

  let media = (nota1 * nota2) / 2;
  let presenca = ((40 - faltas) / 40) * 100;
  let resultado = "";

  if (media >= 7.0 && presenca >= 75) {
    resultado += `<p class="aprovado">Aprovado!</p>`;
  } else if (presenca < 75) {
    resultado += `<p class="reprovado">Reprovado por falta.</p>`;
  } else {
    resultado += `<p class="reprovado">Reprovado por nota.</p>`;
  }

  resultado += `<p>Média: ${media.toFixed(1)}</p>`;
  resultado += `<p>Percentual de Presença: ${presenca.toFixed(1)}%</p>`;

  mediaDiv.innerHTML = resultado;
}

function limparMedia() {
  const mediaDiv = document.querySelector(".resultadoMedia");
  mediaDiv.innerHTML = "";
}

// Função da atividade 4
function enviarFormulario() {
  const nome = document.querySelector("#nome").value;
  const sexo = document.querySelector("#sexo").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const trabalho = document.querySelector("#trabalho").value;
  const mensagem = document.querySelector("#mensagem").value;
  const termos = document.querySelector("#termos");

  if (nome === "" || !validarNomeCompleto(nome)) {
    alert("Por Favor, preencha o seu nome completo");
    return;
  }

  if (sexo === "") {
    alert("Por Favor, preencha o campo sexo");
    return;
  }

  if (email === "") {
    alert("Por Favor, digite seu email");
    return;
  }

  if (senha === "") {
    alert("Por Favor, digite sua senha");
    return;
  }

  if (trabalho === "") {
    alert("Por Favor, escolha uma opção de trabalho");
    return;
  }

  if (mensagem === "") {
    alert("Por Favor, digite uma mensagem");
    return;
  }

  if (!termos.checked) {
    alert("Por Favor, confirme os termos de uso");
    return;
  }
}

function validarNomeCompleto(nome) {
  const regex = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;
  return regex.test(nome);
}

// Função da atividade 5
let listaDeCompras = [];
function adicionarItemNaLista() {
  const nomeProduto = document.getElementById("produto").value.trim();
  const valorProduto = parseFloat(document.getElementById("valor").value);

  if (nomeProduto === "" || valorProduto <= 0) {
    alert(
      "Por favor, preencha o nome do produto e um valor válido maior que zero."
    );
    return;
  }

  listaDeCompras.push({ nomeProduto, valorProduto });
  atualizarLista();
  calcularTotal();
}

function atualizarLista() {
  const listaComprasDiv = document.querySelector(".listaDeCompras");
  let listaHTML = "";

  listaDeCompras.forEach((item) => {
    listaHTML += `<div class="compra-item">`;
    listaHTML += `<span><strong>${
      item.nomeProduto
    }</strong> - R$ ${item.valorProduto.toFixed(2)}</span>`;
    listaHTML += `</div>`;
  });

  listaComprasDiv.innerHTML = listaHTML;
}

function calcularTotal() {
  const totalDaCompra = document.querySelector("#totalDaCompra");
  let total = 0;

  listaDeCompras.forEach((item) => {
    total += item.valorProduto;
  });

  totalDaCompra.textContent = total.toFixed(2);
}

function limparLista() {
  listaDeCompras = [];
  atualizarLista();
  calcularTotal();
}
