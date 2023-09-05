"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('lógica de selecionar');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('lógica de selecionar tudo');
        return [new Pessoa_1.default('', '')];
    }
}
exports.default = PessoaDao;
