var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
// 마커 이미지의 이미지 크기 입니다.
var imageSize = new kakao.maps.Size(24, 35);
// 마커 이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
//1코스: 관저동 등교
var positions = [
    {
        title: '관저동LG전자 앞',
        latlng: new kakao.maps.LatLng(36.29879469999999, 127.3243771)
    },
    {
        title: '건양대병원네거리버스정류장(동방고등학교 방면)',
        latlng: new kakao.maps.LatLng(36.302796409348275, 127.34346270561218)
    },
    {
        title: '가수원육교버스정류장(가수원네거리방면)',
        latlng: new kakao.maps.LatLng(36.30440083306882, 127.35145525015378)
    },
    {
        title: '국방기술품질원 유도탄약센터 앞',
        latlng: new kakao.maps.LatLng(36.30436258180722, 127.3729590714223)
    },
    {
        title: '초록마을1단지 102동 앞 버스정류장',
        latlng: new kakao.maps.LatLng(36.30419710747953, 127.37947404384613)
    },
    {
        title: '해피마트 문창점 앞',
        latlng: new kakao.maps.LatLng(36.31357213573883, 127.43677833938547)
    },
    {
        title: '우성유통 앞(구TJB대전방송국)',
        latlng: new kakao.maps.LatLng(36.313872423253 , 127.4408198183978)
    },
    {
        title: '가오동 신흥교회 앞',
        latlng: new kakao.maps.LatLng(36.30590002289578, 127.45202538467423)
    },
    {
        title: '가오동 할머니보쌈 앞',
        latlng: new kakao.maps.LatLng(36.334105584653734, 127.45544174106601)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng:  new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },

];

var positions1 = [
    {
        title: '한솔유치원 입구 102동 앞',
        latlng: new kakao.maps.LatLng(36.432699,127.384367)
    },
    {
        title: '송강프라자 건너편 북대전농협 앞',
        latlng: new kakao.maps.LatLng(36.435321, 127.386499)
    },
    {
        title: '신탄진지구대(목상동) 앞',
        latlng: new kakao.maps.LatLng(36.448784, 127.412032)
    },
    {
        title: '엑슬루타워 아파트 건너편 국민은행 앞',
        latlng: new kakao.maps.LatLng(36.449158, 127.420667)
    },
    {
        title: '신탄진역 한국금거래소 앞 (신탄진동물병원 옆 건물)',
        latlng: new kakao.maps.LatLng(36.448714, 127.429059)
    },
    {
        title: '신탄진한일병원',
        latlng: new kakao.maps.LatLng(36.433924, 127.424332)
    },
    {
        title: '쌍용자동차(용전동)',
        latlng: new kakao.maps.LatLng(36.356907, 127.434585)
    },
    {
        title: '가양동 신영주유소 앞',
        latlng: new kakao.maps.LatLng(36.343831, 127.446757)
    },
    {
        title: '자양동 행정복지센터  앞',
        latlng: new kakao.maps.LatLng(36.335507, 127.448695),
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng:  new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    }
]
var positions2 = [
    {
        title: '만년동 초원아파트 정문',
        latlng: new kakao.maps.LatLng(36.369104,127.379350)
    },
    {
        title: '상록수아파트 네거리',
        latlng: new kakao.maps.LatLng(36.365172, 127.379370)
    },
    {
        title: '정부청사 서문 스타게이트',
        latlng: new kakao.maps.LatLng(36.361852, 127.379325)
    },
    {
        title: '타임월드 버스승강장',
        latlng: new kakao.maps.LatLng(36.352549, 127.379074)
    },
    {
        title: '경성큰마을 정문 농협 앞',
        latlng: new kakao.maps.LatLng(36.347615, 127.377291)
    },
    {
        title: '한신아파트(괴정동)봉순당 앞',
        latlng: new kakao.maps.LatLng(36.342761,127.384002)
    },
    {
        title: '롯데백화점 앞 버스정류장(용문동행정복지센터방면)',
        latlng: new kakao.maps.LatLng(36.340016,127.390987)
    },
    {
        title: '태평1동 행정복지센터 앞',
        latlng: new kakao.maps.LatLng(36.326235,127.397058)
    },
    {
        title: '목동 한사랑아파트 버스정류장 (중촌네거리방향)',
        latlng: new kakao.maps.LatLng(36.333010,127.412023)
    },
    {
        title: '으능정이안경원 앞',
        latlng: new kakao.maps.LatLng(36.329136,127.427452)
    },
    {
        title: '대전역동광장(찌글이식당 앞)',
        latlng: new kakao.maps.LatLng(36.333150,127.438165)
    },
    {
        title: '대전대학교',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    }
]
var positions3 = [
    {
        title: '대전청년하우스 도룡동',
        latlng: new kakao.maps.LatLng(36.379125,127.390056)
    },
    {
        title: '평송청소년수련관 사거리 우회전',
        latlng: new kakao.maps.LatLng(36.364953,127.391886)
    },
    {
        title: '정부대전청사 동문 버스정류장 (둥지아파트 정문방면)',
        latlng: new kakao.maps.LatLng(36.361466,127.390081)
    },
    {
        title: '삼천중학교 버스정류장(가람아파트방면)',
        latlng: new kakao.maps.LatLng(36.359176,127.395222)
    },
    {
        title: '한밭초등학교 버스정류장 (국화아파트 305동 맞은편)',
        latlng: new kakao.maps.LatLng(36.354932,127.395193)
    },
    {
        title: '둔산훼미리타운 앞',
        latlng: new kakao.maps.LatLng(36.351232,127.398449)
    },
    {
        title: '중촌동 파출소 앞',
        latlng: new kakao.maps.LatLng(36.339170,127.412738)
    },
    {
        title: '한밭자이아파트 버스정류장 앞(삼성초방면)',
        latlng: new kakao.maps.LatLng(36.341191,127.425115)
    },
    {
        title: '우송솔브릿지(삼성동)',
        latlng: new kakao.maps.LatLng(36.339014,127.432312)
    },
    {
        title: '대동오거리 7번출구 앞 버스정류장(우송대방면)',
        latlng: new kakao.maps.LatLng(36.330338,127.443582)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng:  new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]

var positions4 = [
    {
        title: '경남아너스빌 2단지아파트 정문 앞 출발',
        latlng: new kakao.maps.LatLng(36.418297,127.397590)
    },
    {
        title: '중일고등학교 정문 앞 출발 (테크노공인중개사무소 앞)',
        latlng: new kakao.maps.LatLng(36.420964,127.389948)
    },
    {
        title: '테크노밸리 4단지(406동 앞)버스정류장(테크노2단지방면)',
        latlng: new kakao.maps.LatLng(36.420006,127.385891)
    },
    {
        title: '세종아파트 후문',
        latlng: new kakao.maps.LatLng(36.400466,127.404858)
    },
    {
        title: '전민동 헤민 온누리약국',
        latlng: new kakao.maps.LatLng(36.399035,127.404848)
    },
    {
        title: '대전지방국세청 앞(법동 한마음 아파트 방면 좌회전)',
        latlng: new kakao.maps.LatLng(36.372220,127.428448)
    },
    {
        title: '보람아파트 버스정류장(그린아파트방면)',
        latlng: new kakao.maps.LatLng(36.370499,127.431420)
    },
    {
        title: '선비마을 4.5단지 사이(502동 앞 버스정류장)',
        latlng: new kakao.maps.LatLng(36.365927,127.444624)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]
var positions5 = [
    {
        title: 'KT인재개발원 앞 (종로기획,계동치킨) 앞',
        latlng: new kakao.maps.LatLng(36.338772,127.375466)
    },
    {
        title: '내동 맑은아침 공인중개사 앞',
        latlng: new kakao.maps.LatLng(36.332366,127.382992)
    },
    {
        title: '가장동 사거리 우회전',
        latlng: new kakao.maps.LatLng(36.330387,127.383067)
    },
    {
        title: '변동 오거리 하나은행 앞',
        latlng: new kakao.maps.LatLng(36.328230,127.380928)
    },
    {
        title: '구 농도원네거리 버스정류장 앞(도마1동 헹정복지센타 방향)',
        latlng: new kakao.maps.LatLng(36.317545,127.378173)
    },
    {
        title: '도마동 네거리 버스정류장 앞 (도마시장 방면)',
        latlng: new kakao.maps.LatLng(36.313658,127.381685)
    },
    {
        title: '유천동 롯데하이마트(버드내네거리)',
        latlng: new kakao.maps.LatLng(36.317057,127.392681)
    },
    {
        title: '유천네거리 스타벅스 대전유천DT점 앞',
        latlng: new kakao.maps.LatLng(36.318460,127.398197)
    },
    {
        title: '세이백화점KB국민은행앞 글꽃초,중 간판 앞',
        latlng: new kakao.maps.LatLng(36.321452, 127.409599)
    },
    {
        title: '대흥동 한민내과 앞',
        latlng: new kakao.maps.LatLng(36.323322,127.418332)
    },
    {
        title: '대전고등학교 정문 앞',
        latlng: new kakao.maps.LatLng(36.322910,127.424373)
    },
    {
        title: '대전 회관 앞(구 대전예식원)',
        latlng: new kakao.maps.LatLng(36.325167,127.431075)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]
var positions6 = [
    {
        title: '자운대쇼핑타운 출발 자운상가버스정류장(군인아파트방면)',
        latlng: new kakao.maps.LatLng(36.413724,127.337188)
    },
    {
        title: '자운대 네거리우회전',
        latlng: new kakao.maps.LatLng(36.400637,127.345818)
    },
    {
        title: 'KT&G 연구소 버스정류장 (럭키하나아파트 방면)',
        latlng: new kakao.maps.LatLng(36.384143,127.347198)
    },
    {
        title: '연구단지네거리(타워코리아나 앞)',
        latlng: new kakao.maps.LatLng(36.385820,127.378984)
    },
    {
        title: '대전지방국세청 앞(대덕소방서 건너편) 버스정류장',
        latlng: new kakao.maps.LatLng(36.372199,127.428375)
    },
    {
        title: '법동 우체국',
        latlng: new kakao.maps.LatLng(36.367475,127.431229)
    },
    {
        title: '송촌동 우체국',
        latlng: new kakao.maps.LatLng(36.363444,127.442500)
    },
    {
        title: '삼호아파트 버스정류장(삼호아파트 방면)',
        latlng: new kakao.maps.LatLng(36.354439,127.447881)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]
var positions7 = [
    {
        title: '도안 신도시 휴먼시아아파트 4단지 정문맞은편 출발 -> 우회전',
        latlng: new kakao.maps.LatLng(36.345840,127.337307)
    },
    {
        title: '트리풀시티아파트 9단지 첫 번째 버스정류장 -> 죄회전(도안고방면 우회전)',
        latlng: new kakao.maps.LatLng(36.339418,127.336331)
    },
    {
        title: '도안고등학교 앞 버스정류장(흥도초 방면) -> 목원대네거리서 좌회전',
        latlng: new kakao.maps.LatLng(36.337598,127.338041)
    },
    {
        title: '목원네거리(하나은행 앞) -> 가수원쪽 좌회전 버스전용도로진입',
        latlng: new kakao.maps.LatLng(36.332005,127.340555)
    },
    {
        title: '수목토아파트(103동) 버스전용 승강장 -> 혜천대쪽으로',
        latlng: new kakao.maps.LatLng(36.319391,127.347862)
    },
    {
        title: '산성네거리지나자마자 (농협 앞)',
        latlng: new kakao.maps.LatLng(36.304606,127.386431)
    },
    {
        title: '전중구보건소맞은편 버스정류장(문화 주공아파트) -> 직진',
        latlng: new kakao.maps.LatLng(36.308195,127.395780)
    },
    {
        title: '문화주공 아파트(302동)앞 버스정류장 -> 충남기계공고 쪽으로',
        latlng: new kakao.maps.LatLng(36.310405,127.399593)
    },
    {
        title: '동산 중,고등학교맞은편 버스정류장 바로 지나서(준치과 의원앞) -> 테미고개넘고',
        latlng: new kakao.maps.LatLng(36.314396,127.404975)
    },
    {
        title: '동부경찰서 지나서 우회전 인동어진마을아파트(102동앞)정문',
        latlng: new kakao.maps.LatLng(36.322434,127.441656)
    },
    {
        title: '판암역 2번출구 버스정류장',
        latlng: new kakao.maps.LatLng(36.316727,127.458477)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]
var positions8 = [
    {
        title: '회덕1동사무소 앞',
        latlng: new kakao.maps.LatLng(36.376633,127.420753)
    },
    {
        title: '대전병원',
        latlng: new kakao.maps.LatLng(36.362551,127.418052)
    },
    {
        title: '삼익양지마을 아파트(101동)유미헤어 앞',
        latlng: new kakao.maps.LatLng(36.360250,127.416012)
    },
    {
        title: '용전동 전화국 앞',
        latlng: new kakao.maps.LatLng(36.352785,127.432282)
    },
    {
        title: '션샤인 웨딩홀 앞',
        latlng: new kakao.maps.LatLng(36.349400,127.438110)
    },
    {
        title: '가양네거리 버스정류장(가양초등학교방향)',
        latlng: new kakao.maps.LatLng(36.346602,127.444795)
    },
    {
        title: '형우카공업사 앞 성남네거리 버스정류장 (대성여고 방면)',
        latlng: new kakao.maps.LatLng(36.340125,127.436183)
    },
    {
        title: '신흥마을 104동 앞',
        latlng: new kakao.maps.LatLng(36.320770,127.445909)
    },
    {
        title: '판암역 2번출구 버스정류장',
        latlng: new kakao.maps.LatLng(36.316727,127.458477)
    },
    {
        title: '대전대학교 운동장 뒤',
        latlng: new kakao.maps.LatLng(36.33643995481813, 127.46294212809339)
    },
]
export {positions8, markerImage};