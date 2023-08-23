import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface {
    
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number): Pessoa {
        console.log('logia de remover')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('lógica de selecionar')
        return new Pessoa('', '')
    }

    selecionarTodos(): Pessoa[] {
        console.log('lógica de selecionar tudo')
        return [new Pessoa('', '')]
    }
}