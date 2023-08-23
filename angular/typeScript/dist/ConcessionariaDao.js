"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    nomeTabela = 'tb_concessionaria';
    inserir(object) {
        console.log('lógica de insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica de atualizar');
        return true;
    }
    remover(id) {
        console.log('logia de remover');
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('lógica de selecionar');
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('lógica de selecionar tudo');
        return [new Concessionaria_1.default('', [])];
    }
}
exports.default = ConcessionariaDao;
