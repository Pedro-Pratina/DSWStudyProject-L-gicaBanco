const input = require("prompt-sync")();

console.log(`Bem-vindo ao Banco Pratina!`)
const nomeDoCliente = input(`Digite seu nome completo: `)
const numeroDaConta = input(`Digite um número de 5 digitos para sua conta: `)
let saldo = 0
let extrato = []

const detalheDaConta = `\n\tDetalhes da conta:\n\t\tNúmero da conta: ${numeroDaConta}\n\t\tNome do titular: ${nomeDoCliente}\n\t\tSaldo atual: ${saldo}\n`

console.log(`\tConsta criada com sucesso!\n\n\tDetalhes da conta:\n\t\tNúmero da conta: ${numeroDaConta}\n\t\tNome do titular: ${nomeDoCliente}\n\t\tSaldo atual: ${saldo}\n`)

let resposta = 0

while(resposta !== 5){
    console.log(`Escolha uma opção:
        \t1-Saldo
        \t2-Extrato
        \t3-Saque
        \t4-Depósito
        \t5-Sair\n`)
    resposta = Number(input(`Digite a opção: `))

    if(resposta === 1){
        console.log(detalheDaConta)
    } else if(resposta === 2){
        console.log(detalheDaConta)
    } else if(resposta === 3){
        console.log(detalheDaConta)
    } else if(resposta === 4){
        console.log(detalheDaConta)
    } else if(resposta === 5){
        console.log(`Você escolheu sair. Obrigado por escolher o Banco Pratina!\n`)
        console.log(detalheDaConta)
    } else {
        console.log(`\nOpção invalida!\n`)
    }
}