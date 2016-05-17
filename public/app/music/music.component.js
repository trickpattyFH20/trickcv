System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MusicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MusicComponent = (function () {
                function MusicComponent() {
                    this.muted = true;
                }
                MusicComponent.prototype.sendEmail = function () {
                    window.location.href = "mailto:patricktlawler@gmail.com";
                };
                MusicComponent.prototype.toggleMute = function () {
                    if (this.player.isMuted()) {
                        this.muted = false;
                        this.player.unMute();
                        return;
                    }
                    this.muted = true;
                    this.player.mute();
                };
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
                MusicComponent.prototype.ngOnInit = function () {
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    // 3. This function creates an <iframe> (and YouTube player)
                    //    after the API code downloads.
                    var player;
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
                    function onPlayerReady(event) {
                        event.target.playVideo();
                        player.mute();
                    }
                    // 5. The API calls this function when the player's state changes.
                    //    The function indicates that when playing a video (state=1),
                    //    the player should play for six seconds and then stop.
                    var done = false;
                    function onPlayerStateChange(event) {
                        if (event.data == YT.PlayerState.PLAYING && !done) {
                            done = true;
                        }
                    }
                    function stopVideo() {
                        player.stopVideo();
                    }
                };
                MusicComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/music/music.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], MusicComponent);
                return MusicComponent;
            }());
            exports_1("MusicComponent", MusicComponent);
        }
    }
});