"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
class CarroDao {
    nomeTabela = 'tb_carro';
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
        return new Carro_1.default('', 0);
    }
    selecionar(id) {
        console.log('lógica de selecionar');
        return new Carro_1.default('', 0);
    }
    selecionarTodos() {
        console.log('lógica de selecionar tudo');
        return [new Carro_1.default('', 0)];
    }
}
exports.default = CarroDao;
