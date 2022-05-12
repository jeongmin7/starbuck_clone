// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //함수명 바꾸면 안됨!
  //<div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //어떤 아이디값을 가진 비디오를 재생할건지 명시해야함
    playerVars: {
      autoplay: true, //자동재생
      loop: true, //반복재생 유무
      playlist: "An6LvWQuj_8", //반복재생할 영상 id 목록
    }, //영상재생 변수
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
