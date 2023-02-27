// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const FirstNumber = (Math.ceil(Math.random() * 10))
const SeccondNumber = (Math.ceil(Math.random() * 10)) 
const ThirdNumber = (Math.ceil(Math.random() * 10))

console.log(FirstNumber)
console.log(SeccondNumber)
console.log(ThirdNumber)

if (FirstNumber > SeccondNumber && FirstNumber > ThirdNumber){ 
    console.log("Primeiro numero é o maior")
} else if (SeccondNumber > FirstNumber && SeccondNumber > ThirdNumber){
    console.log("Secundo numero é o maior")
}else if (ThirdNumber > FirstNumber && ThirdNumber > SeccondNumber) {
    console.log("Terceiro numero é o maior")
}

if (FirstNumber < SeccondNumber && FirstNumber < ThirdNumber){
    console.log("Primeiro numero é o menor")
} else if (SeccondNumber < FirstNumber && SeccondNumber < ThirdNumber){
    console.log("Secundo numero é o menor")
}else if (ThirdNumber < FirstNumber && ThirdNumber < SeccondNumber) {
    console.log("Terceiro numero é o menor")
}