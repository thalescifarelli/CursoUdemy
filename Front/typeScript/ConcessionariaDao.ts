import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export default class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('logia de remover')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('lógica de selecionar')
        return new Concessionaria('', [])
    }

    selecionarTodos(): Concessionaria[] {
        console.log('lógica de selecionar tudo')
        return [new Concessionaria('', [])]
    }
}