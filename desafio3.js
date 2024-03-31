// 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o nome do personagem: ', (nomePersonagemInput) => { 
    rl.question('Idade: ',  (idadeInput) =>{
        rl.question('Insira o tipo do seu personagem: "mago, guerreiro, monge ou ninja..." ',  (tipoInput)=>{
        
            let nomePersonagem = nomePersonagemInput
            let idadePersonagem = parseInt(idadeInput);
            let tipoPersonagem = tipoInput;


            class heroi {
                constructor(nome, idade, tipo){
                    this.nome = nome
                    this.idade = idade
                    this.tipo = tipo
                }

                atacar (){
                    if  (dadosHeroi.tipo === 'guerreiro'){
                        return "Espada"
                    } else if (dadosHeroi.tipo === 'mago'){
                        return "Feitiço"
                    } else if (dadosHeroi.tipo === 'monge') {
                        return "Artes marciais"
                    } else {
                        return "Shuriken"
                    }
                }

                mensagem (){
                    console.log(`O personagem ${this.nome}, ${this.idade} anos, ${this.tipo} atacou usando ${this.atacar()}!`)
                }
            }

            let dadosHeroi = new heroi(
                nomePersonagem, 
                idadePersonagem, 
                tipoPersonagem
            )

            dadosHeroi.atacar()
            dadosHeroi.mensagem()

        rl.close()
        })
    })
})
//console.log(`O ${this.tipo} atacou usando ${this.ataque} `)


// node desafio3.js