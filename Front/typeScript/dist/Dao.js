"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dao {
    nomeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        console.log('lógica de selecionar');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica de selecionar tudo');
        return [Object()];
    }
}
exports.default = Dao;
