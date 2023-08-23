"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ConcessionariaDao from "./ConcessionariaDao"
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
// import PessoaDao from "./PessoaDao"
const Pessoa_1 = __importDefault(require("./Pessoa"));
// import MotoDao from "./MotoDao"
const Moto_1 = __importDefault(require("./Moto"));
// import CarroDao from "./CarroDao"
const Carro_1 = __importDefault(require("./Carro"));
const Dao_1 = __importDefault(require("./Dao"));
let dao = new Dao_1.default();
// let concessionariaDao: ConcessionariaDao = new ConcessionariaDao()
let concessionariaDao = new Dao_1.default();
let: Concessconcessionariaionaria = new Concessionaria_1.default('', []);
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
concessionariaDao.selecionarTodos();
concessionariaDao.remover(1);
concessionariaDao.selecionar(1);
console.log('--------------------------------');
// let pessoaDao: PessoaDao = new PessoaDao()
let pessoaDao = new Dao_1.default();
let pessoa = new Pessoa_1.default('', '');
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
pessoaDao.selecionarTodos();
pessoaDao.remover(1);
pessoaDao.selecionar(1);
console.log('--------------------------------');
// let motoDao: MotoDao = new MotoDao()
let motoDao = new Dao_1.default();
let moto = new Moto_1.default();
motoDao.inserir(moto);
motoDao.atualizar(moto);
motoDao.selecionarTodos();
motoDao.remover(1);
motoDao.selecionar(1);
console.log('--------------------------------');
// let carroDao: CarroDao = new CarroDao()
let carroDao = new Dao_1.default();
let carro = new Carro_1.default('', 0);
carroDao.inserir(carro);
carroDao.atualizar(carro);
carroDao.selecionarTodos();
carroDao.remover(1);
carroDao.selecionar(1);
