document.addEventListener('DOMContentLoaded', function() {
  const cityScript = [
      { name: "강원도", image: "강원도.jpeg", description: `빼어난 자연경관으로 유명한 강원도.<br>
                                                           래프팅, 패러글라이딩, 라이딩, 스키 등 계절마다 자연을 누리며 각종 레저스포츠를 즐길 수 있다.<br> 
                                                           그뿐만 아니라, 연말연시가 되면 가장 먼저 떠오르는 정동진은 해돋이 명소로 손꼽히며,
                                                           배를 타고 들어가야 하는 남이섬 곳곳에는 운치 있는 메타세콰이어길이 있어 데이트 코스로도 유명하다.<br>
                                                           호수를 둘러싼 자전거 길을 따라 느긋하게 춘천을 둘러보는 여행도 추천한다.
                                                           `},
      { name: "도쿄", image: "도쿄.jpg", description: `신구의 조화가 절묘한 도시<br><br>
                                                      여행 추천날짜: 5월 ~ 6월 / 10월 ~ 11월<br>
                                                      비행시간: 2시간 10분 (직항)`},
      { name: "하노이", image: "하노이.jpg", description: `베트남의 수도로, 정치, 경제, 사회, 문화의 중심지이자 과거와 현재가 공존하는 곳이다.<br><br>
                                                          여행 추천날짜: 10월 ~ 1월<br>
                                                          비행시간: 4시간 30분 (직항)` },
      { name: "파리", image: "파리.jpg", description: `패션과 미식, 예술과 낭만이 있는 세계 문화의 중심지<br><br>
                                                      여행 추천날짜: 5월 ~ 9월<br>
                                                      비행시간: 14시간 (직항)`},
      { name: "제주도", image: "../image/제주도.jpg", description: `섬 전체가 하나의 거대한 관광자원인 제주도.<br>
                                                                    에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수 있는 천혜의 자연경관으로 손꼽힌다.<br>
                                                                    드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.`},
      { name: "부산", image: "../image/부산.jpg", description: `우리나라 제2의 수도 부산광역시.<br>
                                                                부산 대표 관광지로 손꼽히는 해운대는 밤에는 마린시티의 야경이 더해져 더욱 화려한 해변이 된다.<br>
                                                                감천문화마을은 사진 찍기에 좋으며, 매해 가을마다 개최되는 아시아 최대 규모의 영화제인 부산국제영화제와 함께 부산의 구석구석을 즐겨보는 것도 좋다.<br>
                                                                전통시장 투어가 있을 만큼 먹거리가 가득한 부산의 맛기행은 필수!`},
      { name: "대구", image: "../image/대구.jpg", description: `우리나라에서 가장 더운 지역 대구.<br>
                                                                하지만 매년 여름 열리는 치맥 페스티벌과 함께라면 더위도 문제없다.<br>
                                                                놀이동산 이월드는 가족과 함께 나들이하기에 좋으며, 두류공원도 산책코스로 제격!<br>
                                                                음악 분수쇼로 유명한 수성못과 독특한 외관이 인상적인 전시공간 디아크는 대구의 야경 명소로 손꼽힌다.<br> 
                                                                우리나라 3대 시장인 서문시장 야시장도 대구의 대표 핫플레이스!`},                                          
      { name: "경주", image: "../image/경주.jpg", description: `지붕 없는 박물관 경주.<br>
                                                                경주는 그만큼 발길이 닿는 어느 곳이든 문화 유적지를 만날 수 있는 곳이다.<br>
                                                                밤이면 더 빛나는 동궁과 월지를 비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대.<br>
                                                                뛰어난 건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다.<br>
                                                                경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도 좋다.<br> 
                                                                16곳의 명소를 탐방할 때마다 찍히는 도장 모으는 재미가 쏠쏠하다.<br> 
                                                                모바일 앱으로도 스탬프 투어 참여가 가능하다.`},
      { name: "방콕", image: "../image/방콕.jpg", description: `태국 역사와 경제, 문화와 트렌드의 중심지인 태국의 수도<br><br>
                                                                여행 추천날짜: 12월 ~ 2월<br>
                                                                비행시간: 5시간 40분 (직항)`},
      { name: "대만", image: "../image/대만.jpg", description: `소박하고 고즈넉한 풍경, 골목골목 나는 흙내음까지 매력적인 나라<br><br>
                                                                여행 추천날짜: 11월 ~ 4월<br>
                                                                비행시간: 2시간 30분 (직항)`},
      { name: "상하이", image: "../image/상하이.jpg", description: `중국의 문화와 경제의 중심지이자 동서양이 융합된 매력적인 도시<br><br>
                                                                    여행 추천날짜: 4월 ~ 5월 / 10월 ~ 11월<br>
                                                                    비행시간: 1시간 55분 (직항)`}
];

const recommendContainer = document.getElementById('hotCity-card');

function displayDestinations(cityshow) {
  recommendContainer.innerHTML = '';

  cityshow.forEach(cityScript => {
      const card = document.createElement('section');
      card.classList.add('hotCity-card');
      card.innerHTML = `<div class="card">
              <img src="${cityScript.image}" class="card-img-top" alt="${cityScript.name}">
              <div class="card-body">
                  <p class="card-text">${cityScript.name}</p>
              </div>
          </div>`;
          
          
      card.addEventListener('click', function() {
          const modalTitle = document.getElementById('citytitle');
          const modalBody = document.getElementById('city_contents');
          modalTitle.textContent = cityScript.name;
          modalBody.innerHTML = cityScript.description;

          const myModal = new bootstrap.Modal(document.getElementById('city'));
          myModal.show();
      });

      recommendContainer.appendChild(card);
  });
}

displayDestinations(cityScript.slice(0, 4));

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('search-query').value.toLowerCase();
  const filtercitys = cityScript.filter(dest => dest.name.toLowerCase().includes(query));

  displayDestinations(filtercitys);
});


fetch('header.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('header').innerHTML = data;
  });
});
