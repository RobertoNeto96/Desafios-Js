// [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

const number = 2
const resto  = number % 2

/**
 *  true  -> 1
 *  false -> 0
 */

if (resto) {
    console.log("O número é ímpar")
} else {
    console.log("O número é par")
}