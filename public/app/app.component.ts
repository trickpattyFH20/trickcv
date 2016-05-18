import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, Router } from '@angular/router-deprecated';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  //templateUrl: 'app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ],
})

@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/about', component: AboutComponent, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])

export class AppComponent {
    // public sendEmail(){
    //     window.location.href = "mailto:patricktlawler@gmail.com";
    // }
}
