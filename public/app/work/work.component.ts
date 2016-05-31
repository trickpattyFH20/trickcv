import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/work/work.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class WorkComponent implements OnInit {
    public preventCrawlSpam(){
        //window.location.href = "";
    }

    ngOnInit(){

    }
}
