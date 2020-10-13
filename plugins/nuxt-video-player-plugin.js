import Vue from "vue";

import VueVideoPlayer, { videojs } from "vue-video-player/dist/ssr";

console.log("vjs", videojs);
require("@silvermine/videojs-airplay")(videojs);
require("@silvermine/videojs-chromecast")(videojs, {
  preloadWebComponents: true
});
Vue.use(VueVideoPlayer);

// I added the lines 4 and 5 to the file ssr.js inside node_modules/vue-video-player/dist/ssr and airplay plugin works, but chromecast not
// I can't access the file from codesandbox, so i added the lines here
