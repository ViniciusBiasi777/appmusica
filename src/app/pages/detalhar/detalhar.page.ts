import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  private _contato: Contato
  private _nomemusica: string
  private _nomeartista: string
  private _ano: number
  private _numeromusicas: number
  private _gravadora: string
  private _genero: string
  private _tema: string
  private _editar : boolean = false

  constructor(public alertController: AlertController, private _router : Router, private _contatoService : ContatoService) { }

  ngOnInit() {

    const nav = this._router.getCurrentNavigation();
    this._contato = nav.extras.state.objeto;
    this._nomemusica =  this._contato.getNomemusica()
    this._nomeartista =  this._contato.getNomeartista()
    this._ano =  this._contato.getAno()
    this._numeromusicas =  this._contato.getNumeromusicas()
    this._gravadora =  this._contato.getGravadora()
    this._genero =  this._contato.getGenero()
    this._tema =  this._contato.getTema()
  }


  private editar() : void{

      if(this.validar(this._nomemusica) && this.validar(this._nomeartista) && this.validar(this._ano) && this.validar(this._numeromusicas) && this.validar(this._gravadora) && this.validar(this._genero) && this.validar(this._tema)){
        let contatoEditado : Contato = new Contato(this._nomemusica, this._nomeartista, this._ano, this._numeromusicas, this._gravadora, this._genero, this._tema)
        if(this._contatoService.editar(this._contato, contatoEditado)){
          this.presentAlert("Lista musicas", "Editar", "Editado com sucesso");
          this._router.navigate(["/home"]);
        }else{
          this.presentAlert("Lista musicas", "Editar-erro", "Erro ao editar");
        }
        }else{
         this.presentAlert("Lista musicas", "Cadastrar", "Todos os campos são obrigatórios");
      }
  }

  private excluir() : void{

    if(this._contatoService.excluir(this._contato)){
      this.presentAlert("Lista musicas", "Exlcuir", "Excluido com sucesso");
      this._router.navigate(["/home"]);
    }else{
      this.presentAlert("Lista musicas", "Exlcuir-erro", "Erro ao excluir");
    }


  }





  private validar(campo : any) : boolean{
    if(!campo){
      return false;
    }else{
      return true;
    }
}

async presentAlert(titulo:string, subtitulo:string, mensagem:string) {
  const alert = await this.alertController.create({
    header: titulo,
    subHeader: subtitulo,
    message: mensagem,
    buttons: ['OK']
  });
  await alert.present();
  const { role } = await alert.onDidDismiss();
}

}
