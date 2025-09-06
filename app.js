//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
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
