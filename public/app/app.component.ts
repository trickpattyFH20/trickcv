import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, Router } from '@angular/router-deprecated';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  //templateUrl: 'app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ],
})

@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/music', component: MusicComponent, name: 'Music' },
  { path: '/**', redirectTo: ['Home'] }
])

export class AppComponent {
    // public sendEmail(){
    //     window.location.href = "mailto:patricktlawler@gmail.com";
    // }
}
