import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  _lista_musicas: Contato[];

  constructor(private _router : Router, private _contatoService : ContatoService) {
    this._lista_musicas = this._contatoService.getContatos();
    
   
  }

  private irParaCadastrarPage() : void{
    this._router.navigate(["/cadastrar"]);
  }

  private detalhar(contato : Contato) : void{
    this._router.navigateByUrl("/detalhar", {state : {objeto : contato}})
  }

}
