import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
/// <reference path="../../../typings/youtube.d.ts"/>

//declare var YT: any;

@Component({
  templateUrl: 'app/about/about.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class AboutComponent implements OnInit {

    public sendEmail(){
        window.location.href = "mailto:patricktlawler@gmail.com";
    }

    private muted: boolean = true;

    public toggleMute(){
        if(this.player.isMuted()){
            this.muted = false;
            this.player.unMute();
            return;
        }
        this.muted = true;
        this.player.mute();
    }

    public player: any;

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

    ngOnInit(){
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let player: any;
      this.player = player = new YT.Player('playertwo', {
        height: 'auto',
        width: '300',
        playerVars: {
            'controls': 1
         },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event: any) {

        var isMobile = {
            Android: function() { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
            any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
        };

        if(isMobile.any() != null){
            this.isMobile = true;
            player.cuePlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'})
        }else{
            player.loadPlaylist({'list':'FLzULymNZwMkZqaaNIFcp3fQ'})
        }

        player.mute()
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event: any) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      function stopVideo() {
          player.stopVideo();
      }
    }
}
