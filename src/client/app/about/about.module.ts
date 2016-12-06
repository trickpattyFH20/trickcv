import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule }   from '@angular/router';
//import { YoutubePlayerMiniModule }  from '../../../../node_modules/ng2-youtube-player-mini/src/ng2-youtube-player-mini.module.js';
//console.log(YoutubePlayerMiniModule);

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
