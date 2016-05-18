import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/home/home.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class HomeComponent {
    public sendEmail(){
        window.location.href = "mailto:patricktlawler@gmail.com";
    }
}
