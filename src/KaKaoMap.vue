<template>
  <div>
    <div id="map"></div>
    <button @click="moveTOLocation"></button>
  </div>
</template>

<style>
#map {
  margin-top: 550px;
  margin-inline: auto;
  width: 60vw;
  bottom: 500px;
  height: 500px;
}
</style>

<script>
export default {
  name: "KakaoMap", // 컴포넌트 이름 지정
  data() {
    return {
      // map 객체 설정
      map: null,
    };
  },

  setup() {},
  created() {},
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  unmounted() {},
  methods: {
    // api 불러오기
    loadScript() {
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=e0c35784cab5d994ae235f41fe7703c7&autoload=false";
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(36.321655,127.378953),
      level: 4
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(this.map);
    },
  },
};
</script>