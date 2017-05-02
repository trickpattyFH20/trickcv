import { Component, OnInit } from '@angular/core';

/// <reference path="../../../../typings/youtube.d.ts"/>

declare var YT: any;

/**
* This class represents the lazy loaded AboutComponent.
*/
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

export class AboutComponent implements OnInit {

    muted: boolean = true;
    isMobile: boolean = false;
    player: any;
    done:boolean;

    sendEmail() {
        window.location.href = 'mailto:patricktlawler@gmail.com';
    }


    toggleMute() {
        if(this.player.isMuted()) {
            this.muted = false;
            this.player.unMute();
            return;
        }
        this.muted = true;
        this.player.mute();
    }

    stopVideo() {
        this.player.stopVideo();
    }

    onPlayerStateChange(event: any) {
        console.log('this: ', this);
    }

    onPlayerReady(event: any) {
        const isMobile = {
            Android: function() { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
            any: function() { return (isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
            }
        };

        this.player.loadPlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'});
        this.player.mute();
    }
  
    ngOnInit() {
        // TODO
    }
}
