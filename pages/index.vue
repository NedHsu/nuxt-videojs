<template>
  <div class="video-container">
    <div
      class="video-player-box"
      :playsinline="playsinline"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @ready="playerReadied"
      @statechanged="playerStateChanged($event)"
      v-video-player:myVideoPlayer="playerOptions"
    ></div>
    test
  </div>
</template>

<script>
export default {
  data() {
    return {
      playsinline: false,
      timesClicked: 0,

      //videojs options
      playerOptions: {
        muted: false,
        controls: true,
        techOrder: ["chromecast", "html5"],
        plugins: {
          airPlay: {
            addButtonToControlBar: true,
          },
        },
        language: "en",
        sources: [
          {
            type: "video/mp4",
            src: "http://techslides.com/demos/sample-videos/small.mp4",
          },
        ],
        //poster : "/static/images/author.jpg",
      },
    };
  },
  head() {
    return {
      script: [
        {
          src:
            "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@silvermine/videojs-chromecast@1.1.2/dist/silvermine-videojs-chromecast.css",
        },
      ],
    };
  },
  methods: {
    // listen event
    onPlayerPlay(player) {},
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {},
    onPlayerLoadeddata(player) {},
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      player.chromecast({ addButtonToControlBar: true });
      // console.log('example 01: the player is readied', player)
    },
  },
};
</script>

<style>
.vjs_video_3-dimensions {
  width: 200%;
  height: 500px;
}
.video-container {
  width: 100%;
  height: 100%;
}
.video-player-box {
  width: 50%;
  height: 50%;
}
</style>
