import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() usuarioSeleccionado = new EventEmitter();



  constructor(
    public auth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router,) {
  }f
  ngOnInit(){

    this.auth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['main']);
        })
      }
    });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.usuarioSeleccionado.emit(auth.SAMLAuthProvider);
  }
  logout() {
    this.auth.signOut();
  }
}
