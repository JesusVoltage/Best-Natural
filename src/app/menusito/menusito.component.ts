import { Component, Input, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

declare var firebase;

@Component({
  selector: 'app-menusito',
  templateUrl: './menusito.component.html',
  styleUrls: ['./menusito.component.css']
})
export class MenusitoComponent implements OnInit {

  @Input()
  nombre : String;

  constructor(
    public auth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router,
    
  ) { }

  async ngOnInit() {
    console.log(this.nombre);

    this.auth.user.subscribe(user => {
      if (!user) {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        })
      }
    });
  }


  logout() {
    this.auth.signOut();
  }

}
