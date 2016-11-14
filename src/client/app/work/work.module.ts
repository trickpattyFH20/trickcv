import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { RouterModule }   from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [WorkComponent],
    exports: [WorkComponent]
})

export class WorkModule { }
