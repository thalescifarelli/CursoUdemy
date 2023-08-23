import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export default class CarroDao implements DaoInterface {

    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Carro): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number): Carro {
        console.log('logia de remover')
        return new Carro('', 0)
    }

    selecionar(id: number): Carro {
        console.log('lógica de selecionar')
        return new Carro('', 0)
    }

    selecionarTodos(): Carro[] {
        console.log('lógica de selecionar tudo')
        return [new Carro('', 0)]
    }
}