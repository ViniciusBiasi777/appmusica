import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _formCadastrar : FormGroup
  private _isSubmitted : boolean = false

  constructor(public alertController: AlertController, private _router : Router, private _contatoService : ContatoService, private _formBluilder : FormBuilder) { }

  ngOnInit() {

    this._formCadastrar = this._formBluilder.group({

      nomemusica : ['', [Validators.required, Validators.minLength(3)]],
      nomeartista : ['', [Validators.required, Validators.minLength(3)]],
      ano : ['', [Validators.required, Validators.minLength(3),]],
      numeromusicas : ['', [Validators.required, Validators.minLength(1)]],
      gravadora : ['', [Validators.required, Validators.minLength(3)]],
      genero : ['', [Validators.required, Validators.minLength(3)]],
      tema : ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  private get errorControl(){
    return this._formCadastrar.controls;

  }

  private submitForm() : boolean{

    this._isSubmitted = true;
    if(!this._formCadastrar.valid){
      this.presentAlert("Lista musicas", "Cadastrar", "Formulário incorreto");
      return false;
    }else{
      this.cadastrar();
      return true;
    }

  }




  private cadastrar() : void{
        let contato : Contato = new Contato(this._formCadastrar.value['nomemusica'], this._formCadastrar.value['nomeartista'], this._formCadastrar.value['ano'],
        this._formCadastrar.value['numeromusicas'],this._formCadastrar.value['gravadora'],this._formCadastrar.value['genero'], this._formCadastrar.value['tema'])
        this._contatoService.inserir(contato);
        this.presentAlert("Lista musicas", "Cadastrar", "Cadastrado com sucesso");
        this._router.navigate(["/home"]);
 
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
