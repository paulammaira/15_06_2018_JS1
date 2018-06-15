/*let nome = prompt ("Quem é o você?");

alert(`Seja bem vindo,  ${nome}`);
/* Alerta para inserção de nome, o caso da crase facilita o jeito de aparecer  $ ai inserir o let nome dentro da sting*/

/*console.log (`O usuário ${nome} acessou a pagina`);

/*estruturas de controle: */

let nota = prompt("Qual foi a nota do aluno?");

nota = Number (nota);

if(isNaN(nota)){
    alert("ERRO:VALOR INVÁLIDO;");
}

if (nota < 5) {
    alert("Reprovado");
}
else if (nota >= 7) {
	alert ("Aprovado");
}
else {
	alert("Exame");
}