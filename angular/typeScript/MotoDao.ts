import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";


export default class MotoDao implements DaoInterface {
    
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Moto): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number): Moto {
        console.log('logia de remover')
        return new Moto()
    }

    selecionar(id: number): Moto {
        console.log('lógica de selecionar')
        return new Moto()
    }

    selecionarTodos(): Moto[] {
        console.log('lógica de selecionar tudo')
        return [new Moto()]
    }
}