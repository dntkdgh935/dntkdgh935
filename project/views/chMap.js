function initMap() {
  //화면에서 보여지는 지도 위치
    const mapCenter = new google.maps.LatLng(37.562161, 127.035199);
            
  //지도 객체 생성
    const m = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom: 15 });


}  