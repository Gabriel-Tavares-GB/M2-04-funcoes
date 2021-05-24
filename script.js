/*1 - crie uma função que exiba uma mensagem no console

2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
*/



//Para fixar: FUNÇÕES: Utilizadas para criarmos uma sequência de operações para serem executadas.

/*
Parametro seria como uma caracteristica da função, podendo usá-la depois!
*/


function ola_mundo(nome) {
    console.log(nome)
}

ola_mundo("Hello word!")
//

function meu_nome(nome) {
    console.log(nome);
}
meu_nome('Gabriel')
//

var idade = "undefined!"
function mostrar_idade(idade) {
    console.log("Minha idade : " + idade)
}
mostrar_idade(idade)
//

function music(nome) {
    console.log(`Estilo musical favorito : ${nome}`)
}
music("Rock 'N' Roll!")
//

function film(nome) {
    console.log(`Filme favorito : ${nome}`)
}
film("The Hobbit: The Battle of the Five Armies")
//

function música(nome) {
    console.log(`Música favorita : ${nome}`)
}
música('Impossível escolher só uma!rs')
//




