import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router: Router,
    public fire: AngularFireAuth) {
  }

  logar() {

    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => {
        console.log('Logado com sucesso');
        this.router.navigate(['/nossas-marcas']);
      })
      .catch(() => {
        console.log('Login Inválido');
      })
  }

  cadastrar() {
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => {
        console.log("Cadastrado com sucesso!");
      }).catch(() => {
        console.log("Usuário inválido");
      })
  }

}
