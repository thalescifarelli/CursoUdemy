import Carro from './Carro'  //import { Carro as x } from './Carro' //import { Carro } from './Carro' //import Carro {outraImportacao} from './Carro' -> somente com exportação default
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* ---- criar carros ---- */
let carroA = new Carro('dodge journey',4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

/* ---- montar lista de carros da concessionaria ---- */
let listaDeCarros: Carro[]  = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* ---- exibir a lista de carros ---- */
console.log(concessionaria.mostrarListaDeCarros())

/* ---- comprar o carro ---- */
let cliente = new Pessoa('Thales', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())