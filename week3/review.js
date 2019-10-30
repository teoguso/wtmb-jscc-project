// A review. It does not do much at this point
class Review {
    constructor(text, rating) {
        this.text = text
        this.rating = rating
        this.likes = 0
    }

    like() {
        this.likes += 1
    }

    dislike() {
        this.likes -= 1
    }
}

module.exports = Review
