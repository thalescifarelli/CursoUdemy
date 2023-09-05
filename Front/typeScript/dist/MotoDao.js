"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Moto_1 = __importDefault(require("./Moto"));
class MotoDao {
    nomeTabela = 'tb_moto';
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
        return new Moto_1.default();
    }
    selecionar(id) {
        console.log('lógica de selecionar');
        return new Moto_1.default();
    }
    selecionarTodos() {
        console.log('lógica de selecionar tudo');
        return [new Moto_1.default()];
    }
}
exports.default = MotoDao;
