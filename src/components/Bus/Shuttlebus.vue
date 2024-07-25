<template>
  <Appbar/>
  <v-main>
    <v-row>
      <v-img transition="scroll-y-reverse-transition" :style="ShuttlebusGoSchoolBannerStyle()" :src="ShuttlebusGoSchoolBanner" cover>
        <text :style="ShuttlebusGoSchoolTitle()">셔틀 버스로 등교하기</text>
      </v-img>
    </v-row>
    <v-row>
      <v-toolbar :style="ShuttlebusGoSchoolToolbar()" elevation="3">
        <v-menu :location="'bottom'" v-model="menuOpen" transition="slide-y-transition">
          <template v-slot:activator="{props: activatorProps}">
            <v-hover v-slot:default="{isHovering, props: hoverProps}">
              <v-icon icon="mdi-dots-vertical" :style="ShuttlebusGoSchoolToolbar3dots(isHovering || menuOpen)" v-bind="mergeProps(activatorProps, hoverProps)"/>
            </v-hover>
          </template>
          <v-list :style="MenuListStyle()">
            <v-hover v-slot="{ isHovering, props }" v-for="course in courses" :key="course">
              <v-list-item-title v-bind="props" :style="ListTexts(isHovering)" @click="selectCourse(course)">{{ course }}</v-list-item-title>
            </v-hover>
          </v-list>
        </v-menu>
        <text :style="ShuttlebusGoSchoolToolbarText()">{{ selectedCourse || '코스를 선택하세요.' }}</text>
      </v-toolbar>
    </v-row>
  </v-main>
  <kakao-map/>
</template>

<script>

import Appbar from "../Appbar.vue";
import KakaoMap from "../../KaKaoMap.vue";
import {mergeProps} from "vue";

export default {
  components: {Appbar, KakaoMap},
  data() {
    return {
      ShuttlebusGoSchoolBanner: new URL('/src/assets/ShuttlebusGoSchoolBanner.png', import.meta.url).href,
      menuOpen: false,
      selectedCourse: null,
      courses: [
        'course1',
        'course2',
        'cours1e3',
        'course4',
        'course5',
        'course6',
        'course7',
        'course8',
        'course9'
      ],
      coordinates: {
        "course1": [
          {"title": "관저동 LG전자 앞", "let": 36.29879469999999, "lng": 27.3243771},
          {"title": "건양대병원네거리버스정류장(동방고등학교 방면)", "let": 36.302796409348275, "lng": 127.34346270561218},
          {"title": "가수원육교버스정류장(가수원네거리방면)", "let": 36.30440083306882, "lng": 127.35145525015378},
          {"title": "국방기술품질원 유도탄약센터 앞", "let": 36.30436258180722, "lng": 27.3729590714223},
          {"title": "초록마을1단지 102동 앞 버스정류장", "let": 36.30419710747953, "lng": 127.37947404384613},
          {"title": "해피마트 문창점 앞", "let": 36.31357213573883, "lng": 127.43677833938547},
          {"title": "우성유통 앞(구TJB대전방송국)", "let": 36.313872423253, "lng": 127.4408198183978},
          {"title": "가오동 신흥교회 앞", "let": 36.30590002289578, "lng": 127.45202538467423},
          {"title": "가오동 할머니보쌈 앞", "let": 36.334105584653734, "lng": 127.45544174106601},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course2": [
          {"title": "한솔유치원 입구 102동 앞", "let": 36.432699, "lng": 127.384367},
          {"title": "송강프라자 건너편 북대전농협 앞", "let": 36.435321, "lng": 127.386499},
          {"title": "신탄진지구대(목상동) 앞", "let": 36.448784, "lng": 127.412032},
          {"title": "엑슬루타워 아파트 건너편 국민은행 앞", "let": 36.449158, "lng": 127.420667},
          {"title": "신탄진역 한국금거래소 앞 (신탄진동물병원 옆 건물)", "let": 36.448714, "lng": 127.429059},
          {"title": "신탄진한일병원", "let": 36.433924, "lng": 127.424332},
          {"title": "쌍용자동차(용전동)", "let": 36.356907, "lng": 127.434585},
          {"title": "가양동 신영주유소 앞", "let": 36.343831, "lng": 127.446757},
          {"title": "자양동 행정복지센터 앞", "let": 36.335507, "lng": 127.448695},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course3": [
          {"title": "만년동 초원아파트 정문", "let": 36.369104, "lng": 127.37935},
          {"title": "상록수아파트 네거리", "let": 36.365172, "lng": 127.37937},
          {"title": "정부청사 서문 스타게이트", "let": 36.361852, "lng": 127.379325},
          {"title": "타임월드 버스승강장", "let": 36.352549, "lng": 127.379074},
          {"title": "경성큰마을 정문 농협 앞", "let": 36.347615, "lng": 127.377291},
          {"title": "한신아파트(괴정동)봉순당 앞", "let": 36.342761, "lng": 127.384002},
          {"title": "롯데백화점 앞 버스정류장(용문동행정복지센터방면)", "let": 36.34, "lng": 127.390987},
          {"title": "태평1동 행정복지센터 앞", "let": 36.30590002289578, "lng": 127.45202538467423},
          {"title": "목동 한사랑아파트 버스정류장 (중촌네거리방향)", "let": 36.33301, "lng": 127.412023},
          {"title": "으능정이안경원 앞", "let": 36.329136, "lng": 127.427452},
          {"title": "대전역동광장(찌글이식당 앞)", "let": 36.33315, "lng": 127.438165},
          {"title": "대전대학교", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course4": [
          {"title": "대전청년하우스 도룡동", "let": 36.379125, "lng": 127.390056},
          {"title": "평송청소년수련관 사거리 우회전", "let": 36.364953, "lng": 127.391886},
          {"title": "정부대전청사 동문 버스정류장 (둥지아파트 정문방면)", "let": 36.361466, "lng": 127.390081},
          {"title": "삼천중학교 버스정류장(가람아파트방면)", "let": 36.359176, "lng": 127.395222},
          {"title": "한밭초등학교 버스정류장 (국화아파트 305동 맞은편)", "let": 36.354932, "lng": 127.395193},
          {"title": "둔산훼미리타운 앞", "let": 36.351232, "lng": 127.398449},
          {"title": "중촌동 파출소 앞", "let": 36.33917, "lng": 127.412738},
          {"title": "한밭자이아파트 버스정류장 앞(삼성초방면)", "let": 36.341191, "lng": 127.425115},
          {"title": "우송솔브릿지(삼성동)", "let": 36.339014, "lng": 127.432312},
          {"title": "대동오거리 7번출구 앞 버스정류장(우송대방면)", "let": 36.330338, "lng": 127.443582},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course5": [
          {"title": "경남아너스빌 2단지아파트 정문 앞 출발", "let": 36.418297, "lng": 127.39759},
          {"title": "중일고등학교 정문 앞 출발 (테크노공인중개사무소 앞)", "let": 36.420964, "lng": 127.389948},
          {"title": "테크노밸리 4단지(406동 앞)버스정류장(테크노2단지방면)", "let": 36.420006, "lng": 127.385891},
          {"title": "세종아파트 후문", "let": 36.400466, "lng": 127.404858},
          {"title": "전민동 헤민 온누리약국", "let": 36.399035, "lng": 127.404848},
          {"title": "대전지방국세청 앞(법동 한마음 아파트 방면 좌회전)", "let": 36.37222, "lng": 127.428448},
          {"title": "보람아파트 버스정류장(그린아파트방면)", "let": 36.370499, "lng": 127.43142},
          {"title": "선비마을 4단지 (504동 앞) 버스정류장(월평대교방면)", "let": 36.371137, "lng": 127.4366},
          {"title": "갈마동 서부농협 정류장 앞 (본량지하차도 방면 우회전)", "let": 36.349787, "lng": 127.369452},
          {"title": "관저지구대 앞", "let": 36.312984, "lng": 127.348989},
          {"title": "대전대학교", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course6": [
          {"title": "한밭중학교(정림초등학교방면)네거리", "let": 36.302992, "lng": 127.37479},
          {"title": "버드내중학교 정류장 앞", "let": 36.29665, "lng": 127.377994},
          {"title": "산내동 현대아파트 사거리", "let": 36.29581, "lng": 127.389099},
          {"title": "산성교회 옆", "let": 36.291354, "lng": 127.39301},
          {"title": "은어송 마을 2단지", "let": 36.289136, "lng": 127.40166},
          {"title": "정림 주공2단지 버스정류장(가수원네거리방면)", "let": 36.307598, "lng": 127.377425},
          {"title": "만년동 거북이아파트정류장(오정농수산물시장방면)", "let": 36.356971, "lng": 127.367663},
          {"title": "미정", "let": 0, "lng": 0},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course7": [
          {"title": "대전시청앞", "let": 36.351232, "lng": 127.398449},
          {"title": "만년동 한빛아파트", "let": 36.369104, "lng": 127.37935},
          {"title": "대전역 (시외버스터미널 맞은편)", "let": 36.332196, "lng": 127.441706},
          {"title": "용전동 롯데마트 맞은편 정류장", "let": 36.345022, "lng": 127.434847},
          {"title": "오정동 대덕구청앞 버스정류장", "let": 36.373617, "lng": 127.411157},
          {"title": "미정", "let": 0, "lng": 0},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course8": [
          {"title": "정림삼거리 네거리 횡단보도 앞(산내동방면)", "let": 36.299586, "lng": 127.389563},
          {"title": "온천2동 고속버스터미널 앞 (대전역방면)", "let": 36.338148, "lng": 127.427502},
          {"title": "대덕대로 롯데마트 맞은편 정류장 (갈마역방면)", "let": 36.349778, "lng": 127.365239},
          {"title": "비래동 정류장(산성동방면)", "let": 36.339907, "lng": 127.450471},
          {"title": "중리동 도서관 앞", "let": 36.346269, "lng": 127.389456},
          {"title": "판암동 국민은행", "let": 36.334449, "lng": 127.445835},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
        "course9": [
          {"title": "대전시청맞은편 버스정류장(롯데시네마방면)", "let": 36.351232, "lng": 127.398449},
          {"title": "천동초등학교 앞", "let": 36.332435, "lng": 127.454932},
          {"title": "비래동 정류장(산성동방면)", "let": 36.339907, "lng": 127.450471},
          {"title": "중리동 도서관 앞", "let": 36.346269, "lng": 127.389456},
          {"title": "온천2동 고속버스터미널 앞 (대전역방면)", "let": 36.338148, "lng": 127.427502},
          {"title": "정림삼거리 네거리 횡단보도 앞(산내동방면)", "let": 36.299586, "lng": 127.389563},
          {"title": "판암동 국민은행", "let": 36.334449, "lng": 127.445835},
          {"title": "대전대학교 운동장 뒤", "let": 36.33643995481813, "lng": 127.46294212809339}
        ],
      }
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    mergeProps,
    ShuttlebusGoSchoolBannerStyle(){
      return{
        transition: 'all 0s ease-in-out',
        width: '100vw',
        height: 'clamp(160px, 16vw, 20vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        textShadow: '0px 0px 3px #00000090',
        cursor: 'default'
      }
    },
    ShuttlebusGoSchoolTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '700',
        fontSize: 'clamp(40px, 4vw, 5vh)',
        color: '#FFFFFF'
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        transition: 'all 0s ease-in-out',
        width: '100vw',
        height: 'clamp(32px, 3.2vw, 4vh)',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#00837B',
      }
    },
    ShuttlebusGoSchoolToolbarText(){
      return{
        transition: 'all 0s ease-in-out',
        margin: 'auto',
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: 'clamp(16px, 1.6vw, 2vh)',
        fontWeight: '700',
        cursor: 'default'
      }
    },
    ShuttlebusGoSchoolToolbar3dots(isHovering){
      return{
        background: 'transparent !important',
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontSize: 'clamp(13px, 2vw, 20px)',
        marginLeft: 'clamp(12px, 1.5vw, 15px)',
        outline: 'none',
      }
    },
    MenuListStyle() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(150px, 13vw, 200px)',
        height: 'clamp(130px, 10vw, 150px)',
        background: '#7FB99A',
        color: '#FFFFFF',
        borderRadius: '10px',
        marginTop: '20px',
        boxShadow: '0px 0px 10px #00000050'
      };
    },
    ListTexts(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: 'clamp(19.5px, 1.5vw, 22.5px)',
        fontSize: 'clamp(15px, 1.3vw, 20px)',
        fontWeight: '700',
        textAlign: 'center',
        cursor: 'pointer'
      };
    },
    selectCourse(course) {
      this.selectedCourse = course;
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
    document.body.animate(
        [
          {opacity: 0},
          {opacity: 1},
        ],
        {
          duration: 200,
          easing: 'ease-in-out',
        }
    );
  }
}
</script>