import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'app/music/music.component.html',
})

export class MusicComponent implements OnInit {

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
        width: '320',
        videoId: '4u0EYOQDPag',
        playerVars: { 'controls': 1 },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event: any) {
        event.target.playVideo();
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
