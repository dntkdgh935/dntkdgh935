document.getElementById('get-rate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);  // 입력한 금액
    const currency = document.getElementById('currency').value.toUpperCase();  // 선택된 통화 코드
    const targetCurrency = document.getElementById('target-currency').value;  // 선택한 목표 통화

    // 금액이 유효한지 체크
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('exchange-result').innerHTML = '유효한 금액을 입력하세요.';
        return;
    }

    // 예시: ExchangeRate-API URL (API 키를 포함하지 않음)
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

    // API 호출
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // 환율 정보 추출
            const rates = data.rates;
            if (rates[targetCurrency]) {
                const rate = rates[targetCurrency];  // 선택한 목표 통화의 환율
                const convertedAmount = (amount * rate).toFixed(2);  // 환율 적용 후 금액 계산
                const resultText = `${amount} ${currency} = ${convertedAmount} ${targetCurrency}`;
                document.getElementById('exchange-result').innerHTML = resultText;
            } else {
                document.getElementById('exchange-result').innerHTML = '선택한 통화에 대한 환율 정보를 찾을 수 없습니다.';
            }
        })
        .catch(error => {
            document.getElementById('exchange-result').innerHTML = 'API 요청 중 오류가 발생했습니다: ' + error.message;
        });
});

