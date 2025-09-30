// console.log(typeof name); //typeof retorna o tipo da variável.
/*
var userName = "Rosemeire";
document.getElementById('user-name').innerHTML = userName; //innerHTML insere o valor da variável na tag HTML com o id userName.*/


/*
// Arrays:
var characters = ['Meste Yoda', 'Darth Vader', 'Luke Skywalker', 'Princesa Leia'];

characters.push('C3pO'); //push adiciona um novo elemento no final do array.
characters.push('R2D2');

characters = characters.filter(function(p) { //filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    return p !== 'Darth Vader'; //retorna todos os elementos diferentes de Darth Vader.
})

characters = characters.filter(function(p) { 
    return p === 'Mestre Yoda'; 
})

console.log(characters); //console.log exibe o valor da variável no console do navegador.
*/

// Controle de repetição:
var characters = ['Meste Yoda', 'Darth Vader', 'Luke Skywalker', 'Princesa Leia']
characters.forEach(function(p) {
    console.log(p);
})
