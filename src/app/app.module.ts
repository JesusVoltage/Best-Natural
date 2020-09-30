import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { MenusitoComponent } from './menusito/menusito.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DisplayComponent } from './display/display.component';
import { TargetComponent } from './target/target.component';



@NgModule({
  declarations: [
    AppComponent,
    MenusitoComponent,
    LoginComponent,
    MainComponent,
    DisplayComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
