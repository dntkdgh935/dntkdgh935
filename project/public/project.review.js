let reviews = [];
let myReviews = [];

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const hashtags = document.getElementById('hashtags').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    const reader = new FileReader();
    reader.onload = function(event) {
        const newReview = {
            title,
            content,
            hashtags,
            image: event.target.result,
            likes: 0
        };

        reviews.push(newReview);
        myReviews.push(newReview);
        displayReviews();
        displayMyReviews();
        document.getElementById('reviewForm').reset();
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    const sortedReviews = reviews.sort((a, b) => b.likes - a.likes);

    sortedReviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-4 mb-4';
        reviewCard.innerHTML = `
            <div class="card">
                <img src="${review.image}" class="card-img-top" alt="후기 이미지">
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.content.substring(0, 100)}...</p>
                    <p><strong>${review.hashtags}</strong></p>
                    <p>좋아요: <span id="like-count-${index}">${review.likes}</span></p>
                    <button class="btn btn-success" onclick="likeReview(${index})">👍 좋아요</button>
                </div>
            </div>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
}

function displayMyReviews() {
    const myReviewsContainer = document.getElementById('my-reviews-container');
    myReviewsContainer.innerHTML = '';

    const sortedMyReviews = myReviews.sort((a, b) => b.likes - a.likes);

    sortedMyReviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-4 mb-4';
        reviewCard.innerHTML = `
            <div class="card">
                <img src="${review.image}" class="card-img-top" alt="후기 이미지">
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.content.substring(0, 100)}...</p>
                    <p><strong>${review.hashtags}</strong></p>
                    <p>좋아요: <span id="my-like-count-${index}">${review.likes}</span></p>
                    <button class="btn btn-success" onclick="likeMyReview(${index})">👍 좋아요</button>
                    <button class="btn btn-danger" onclick="removeMyReview(${index})">❌ 제거</button>
                </div>
            </div>
        `;

        myReviewsContainer.appendChild(reviewCard);
    });
}

function likeReview(index) {
    reviews[index].likes++;
    displayReviews();
}

function likeMyReview(index) {
    myReviews[index].likes++;
    displayMyReviews();
}

function removeMyReview(index) {
    myReviews.splice(index, 1);
    displayMyReviews();
}
