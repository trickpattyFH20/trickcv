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
    //   if (event.data === YT.PlayerState.PLAYING && !this.done) {
    //     this.done = true;
    //   }
    }

    // public onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '390',
    //     width: '640',
    //     videoId: 'M7lc1UVf-VE',
    //     events: {
    //       'onReady': onPlayerReady,
    //       'onStateChange': onPlayerStateChange
    //     }
    //   });
    // }

    onPlayerReady(event: any) {

      var isMobile = {
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

    //   if(isMobile.any() !== null) {
    //       this.isMobile = true;
    //       this.player.cuePlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'});
    //   } else {
    //       this.player.loadPlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'});
    //   }

    this.player.loadPlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'});

      this.player.mute();
    }

    ngOnInit() {
    //   var tag = document.createElement('script');
      //
    //   tag.src = 'https://www.youtube.com/iframe_api';
    //   var firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      //
    //   // 3. This function creates an <iframe> (and YouTube player)
    //   //    after the API code downloads.
      //
    //   this.player = new YT.Player('playertwo', {
    //     height: 'auto',
    //     width: '300',
    //     playerVars: {
    //         'controls': 1
    //      },
    //     events: {
    //       'onReady': this.onPlayerReady,
    //       'onStateChange': this.onPlayerStateChange
    //     }
    //   });
      //
    //   // 5. The API calls this function when the player's state changes.
    //   //    The function indicates that when playing a video (state=1),
    //   //    the player should play for six seconds and then stop.
    //   this.done = false;

    }
}
