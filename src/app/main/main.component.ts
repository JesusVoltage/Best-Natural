import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  nombre: String;
  uid: String;

  constructor(
    public auth: AngularFireAuth,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {

    //Cuando cuando llegamos, obtenemos los datos del usuario.
    this.auth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {

          this.nombre = user.displayName;
          this.uid = user.uid;

        })
      }
    });
  }

}
