let reviews = [];
let myReviews = [];

// 리뷰 폼 제출 이벤트
document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const hashtags = document.getElementById('hashtags').value;
            const imageInput = document.getElementById('image');
            const imageFile = imageInput.files[0];

            if (!imageFile) {
                alert('이미지를 첨부해주세요.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const newReview = {
                    id: crypto.randomUUID(), // 고유 ID 추가
                    title,
                    content,
                    hashtags,
                    image: event.target.result,
                    likes: 0,
                };

                reviews.push(newReview);
                myReviews.push(newReview);

                displayReviews();
                displayMyReviews();
                saveReviews();

                reviewForm.reset();
            };

            reader.readAsDataURL(imageFile);
        });
    }

    // 데이터 불러오기 및 초기 렌더링
    loadReviews();
    displayReviews();
    displayMyReviews();
});

// 리뷰를 화면에 표시
function displayReviews() {
    const hotReviewContainer = document.getElementById('hot-reviews-container');
    if (!hotReviewContainer) {
        console.error('hot-reviews-container 요소가 없습니다.');
        return;
    }

    hotReviewContainer.innerHTML = ''; // 기존 내용을 초기화

    // 좋아요 순으로 정렬
    const sortedReviews = [...reviews].sort((a, b) => b.likes - a.likes);

    // 좋아요가 많은 9개 리뷰만 표시
    sortedReviews.slice(0, 9).forEach((review) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-4 mb-4';
        reviewCard.innerHTML = `
            <div class="card">
                <img src="${review.image}" class="card-img-top" alt="후기 이미지">
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.content.substring(0, 100)}...</p>
                    <p><strong>${review.hashtags}</strong></p>
                    <p>좋아요: <span id="like-count-${review.id}">${review.likes}</span></p>
                    <button class="btn btn-success" data-id="${review.id}" onclick="likeReview(${review.id})">👍 좋아요</button>
                </div>
            </div>
        `;
        hotReviewContainer.appendChild(reviewCard);
    });
}

// 내가 작성한 리뷰를 화면에 표시
function displayMyReviews() {
    const myReviewsContainer = document.getElementById('my-reviews-container');
    if (!myReviewsContainer) return;

    myReviewsContainer.innerHTML = ''; // 기존 내용을 초기화

    myReviews.forEach((review) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-4 mb-4';
        reviewCard.innerHTML = `
            <div class="card">
                <img src="${review.image}" class="card-img-top" alt="후기 이미지">
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.content.substring(0, 100)}...</p>
                    <p><strong>${review.hashtags}</strong></p>
                    <p>좋아요: <span id="my-like-count-${review.id}">${review.likes}</span></p>
                    <button class="btn btn-danger" onclick="removeMyReview(${review.id})">❌ 제거</button>
                </div>
            </div>
        `;
        myReviewsContainer.appendChild(reviewCard);
    });
}

// 좋아요 추가
function likeReview(id) {
    const review = reviews.find(r => r.id === id);
    if (review) {
        review.likes++; // 좋아요 수 증가
        saveReviews(); // 데이터 저장
        displayReviews(); // 화면 업데이트
    } else {
        console.error(`ID가 ${id}인 리뷰를 찾을 수 없습니다.`);
    }
}

function likeMyReview(id) {
    const review = myReviews.find(r => r.id === id);
    if (review) {
        review.likes++; // 좋아요 수 증가
        saveReviews(); // 데이터 저장
        displayMyReviews(); // 화면 업데이트
    } else {
        console.error(`ID가 ${id}인 내 리뷰를 찾을 수 없습니다.`);
    }
}

// 내가 작성한 리뷰 삭제
function removeMyReview(id) {
    myReviews = myReviews.filter(review => review.id !== id);
    reviews = reviews.filter(review => review.id !== id);

    saveReviews();
    displayMyReviews();
    displayReviews();
}

// 로컬 스토리지에 데이터 저장
function saveReviews() {
    localStorage.setItem('reviews', JSON.stringify(reviews));
    localStorage.setItem('myReviews', JSON.stringify(myReviews));
}

// 로컬 스토리지에서 데이터 불러오기
function loadReviews() {
    const storedReviews = localStorage.getItem('reviews');
    const storedMyReviews = localStorage.getItem('myReviews');

    if (storedReviews) {
        reviews = JSON.parse(storedReviews);
    }

    if (storedMyReviews) {
        myReviews = JSON.parse(storedMyReviews);
    }

    console.log("Loaded Reviews: ", reviews);
    console.log("Loaded My Reviews: ", myReviews);
}
