//exercicio 1
function mostrarTexto() {
let texto = document.getElementById("input1").value;
document.getElementById("p1").innerText = texto;
}

//Exercicio 2
function saudar() {
let nome = document.getElementById("nome").value;
alert("Olá, " + nome + "!");
}
function verificarIdade() {
let idade = document.getElementById("idade").value;
let res = document.getElementById("resIdade");

//exercicio 3
if (idade >= 18) {
res.innerText = "Maior de idade";
} else {
res.innerText = "Menor de idade";
}
}

//exercicio 4
function mudarCor() {
document.body.style.backgroundColor = "lightblue";
}