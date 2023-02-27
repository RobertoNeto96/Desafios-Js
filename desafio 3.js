// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const RandomNumber = (Math.ceil(Math.random() * 10))
const YourNumber = 10

if (YourNumber === RandomNumber) {
    console.log("Ganhador do premio")
} else {
    console.log("Não ganhou o premio")
}