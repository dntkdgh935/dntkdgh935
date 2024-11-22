const date1 = document.getElementById('start-date');
const date2 = document.getElementById('end-date');
const addEventBtn = document.getElementById('add-event-btn');
const eventsList = document.getElementById('events-list');

const plans = {};


addEventBtn.addEventListener('click', function() {
  const eventText = document.getElementById('event').value;
  const startDate = new Date(date1.value);
  const endDate = new Date(date2.value);
  
  if (isNaN(startDate) || isNaN(endDate) || !eventText) {
    alert("여행 날짜와 계획을 모두 입력해주세요.");
    return;
  }
});


date1.addEventListener('input', function() {
  const startDate = new Date(date1.value);

  if(startDate.getTime()) {
    date2.setAttribute('min', startDate.toISOString().split('T')[0]);
  }
})


date2.addEventListener('input', function() {
  const endDate = new Date(data2.value);

  if(endDate.getTime()) {
    date2.setAttribute('max', endDate.toISOString().split('T'[0]));

  }
})
  
date2.addEventListener('input', function() {
  const endDate = new Date(date2.value);

  if (endDate.getTime()) {
    date1.setAttribute('max', endDate.toISOString().split('T')[0]);
  }
});