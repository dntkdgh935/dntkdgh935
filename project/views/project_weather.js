document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();  
    const date = document.getElementById('date').value;  

    if (!city) {
        document.getElementById('weather-result').innerHTML = "도시를 입력해주세요.";
        return;
    }

    const apiKey = 'dfcdd250230c010ba2d58feaad8195ce';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            if (data.cod === 200) {
                document.getElementById('weather-result').innerHTML = `
                    기온: ${data.main.temp}°C<br>
                    날씨: ${data.weather[0].description}<br>
                    도시: ${data.name}, ${data.sys.country}
                `;
            } else {
                document.getElementById('weather-result').innerHTML = "도시를 찾을 수 없습니다.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-result').innerHTML = "날씨 정보를 가져올 수 없습니다.";
        });
});
