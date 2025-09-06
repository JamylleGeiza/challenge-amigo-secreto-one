let nomeAmigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo");
  if (nome.value == "") {
    alert("O campo não pode estar vazio");
  } else if (nomeAmigos.includes(nome.value)) {
    alert("Amigo já adicionado");
  } else {
    nomeAmigos.push(nome.value);
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML += `<li>${nome.value}</li>`;
    nome.value = "";
  }
}

function sortearAmigo(params) {
  if (nomeAmigos.length == 0) {
    return alert("Adicione amigos primeiro!");
  } else {
    let numeroSorteado = Math.floor(Math.random() * nomeAmigos.length);
    let amigoSorteado = nomeAmigos[numeroSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`;
  }
}
