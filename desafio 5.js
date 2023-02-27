// [ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const person = [{
    name: "Roberto",
    age: 26,
    profission: "Conferente",
    nacionality: "Brasileiro"
},
{
    name: "Cássia",
    age: 27,
    profission: "Administradora",
    nacionality: "Brasileira"
},
{
    name: "Karina",
    age: 15,
    profission: "Desempregada",
    nacionality: "Brasileira"
},
{
    name: "Jhon",
    age: 30,
    profission: "Leader",
    nacionality: "Americano"
},
{
    name: "Marie",
    age: 25,
    profission: "Baby Sister",
    nacionality: "Canadense"
}]

if (person.age >= 18 && person.nacionality === "Brasileiro", "Brasileira", "brasileiro", "brasileira") {
    console.log("Aprovado(a) no processo")
} else {
    console.log("Reprovado(a) no processo")
}