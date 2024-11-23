document.getElementById('get-rate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);  
    const currency = document.getElementById('currency').value.toUpperCase();  
    const targetCurrency = document.getElementById('target-currency').value;  

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('exchange-result').innerHTML = '유효한 금액을 입력하세요.';
        return;
    }

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            if (rates[targetCurrency]) {
                const rate = rates[targetCurrency];  
                const convertedAmount = (amount * rate).toFixed(2);  
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

