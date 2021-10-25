import { Injectable } from '@angular/core';
import { Contato } from '../class/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private _contatos : Contato[] = [];

  constructor() { 

  }

  public getContatos() : Contato[]{
    return this._contatos
  }

  public inserir(contato: Contato) : void{
    this._contatos.push(contato);
  }


  public editar(contato: Contato, contatoEditado : Contato) : boolean{
    for(let i = 0; i < this._contatos.length; i++ ){
      if((this._contatos[i].getId()) == contato.getId()){
        this._contatos[i].setNomemusica(contatoEditado.getNomemusica())
        this._contatos[i].setNomeartista(contatoEditado.getNomeartista())
        this._contatos[i].setAno(contatoEditado.getAno())
        this._contatos[i].setNumeromusicas(contatoEditado.getNumeromusicas())
        this._contatos[i].setGravadora(contatoEditado.getGravadora())
        this._contatos[i].setGenero(contatoEditado.getGenero())
        this._contatos[i].setTema(contatoEditado.getTema())
        return true;
      }
    }
    return false;
  }

  public excluir(contato: Contato) : boolean{

    for(let i = 0; i < this._contatos.length; i++ ){
      if((this._contatos[i].getId()) == contato.getId()){
        this._contatos.splice(i,1)
        return true;
      }
    }
      return false;

  }

}
