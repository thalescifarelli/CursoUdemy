import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy{

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[this.rodada]

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  ngOnDestroy(): void {
    
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase()) {
      //trocar pergunta da rodada
      this.rodada++
      //progresso
      this.progresso += (100 / this.frases.length)

      //verificar se respondeu todas as perguntas
      if(this.rodada === this.frases.length)
      {
        this.encerrarJogo.emit('vitoria')
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()      
    } else {
      //diminuir a variavel tentantivas
      this.tentativas--
      //valida se perdeu todas as vidas
      if(this.tentativas === -1)
      {
        this.encerrarJogo.emit('derrota')
      }
    }
    
  }

  atualizaRodada(): void {

    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''

  }
}
