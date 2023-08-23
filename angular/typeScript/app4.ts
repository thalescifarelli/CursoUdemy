// import ConcessionariaDao from "./ConcessionariaDao"
import Concessionaria from "./Concessionaria"

// import PessoaDao from "./PessoaDao"
import Pessoa from "./Pessoa"

// import MotoDao from "./MotoDao"
import Moto from "./Moto"

// import CarroDao from "./CarroDao"
import Carro from "./Carro"

import Dao from "./Dao"

let dao: Dao<Concessionaria> = new Dao<Concessionaria>()

// let concessionariaDao: ConcessionariaDao = new ConcessionariaDao()
let concessionariaDao: Dao<Concessionaria> = new Dao<Concessionaria>()
let : Concessconcessionariaionaria = new Concessionaria('', [])

concessionariaDao.inserir(concessionaria)
concessionariaDao.atualizar(concessionaria)
concessionariaDao.selecionarTodos()
concessionariaDao.remover(1)
concessionariaDao.selecionar(1)

console.log('--------------------------------')

// let pessoaDao: PessoaDao = new PessoaDao()
let pessoaDao: Dao<Pessoa> = new Dao<Pessoa>()
let pessoa: Pessoa = new Pessoa('', '')

pessoaDao.inserir(pessoa)
pessoaDao.atualizar(pessoa)
pessoaDao.selecionarTodos()
pessoaDao.remover(1)
pessoaDao.selecionar(1)

console.log('--------------------------------')

// let motoDao: MotoDao = new MotoDao()
let motoDao: Dao<Moto> = new Dao<Moto>()
let moto: Moto = new Moto()

motoDao.inserir(moto)
motoDao.atualizar(moto)
motoDao.selecionarTodos()
motoDao.remover(1)
motoDao.selecionar(1)

console.log('--------------------------------')

// let carroDao: CarroDao = new CarroDao()
let carroDao: Dao<Carro> = new Dao<Carro>()
let carro: Carro = new Carro('', 0)

carroDao.inserir(carro)
carroDao.atualizar(carro)
carroDao.selecionarTodos()
carroDao.remover(1)
carroDao.selecionar(1)