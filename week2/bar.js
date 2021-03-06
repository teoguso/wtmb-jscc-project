const Review = require("./review")

// A bar.
// It can be smoking/non-smoking, have a non-smoking area, and have reviews
// It can return a rating based on the average of ratings in the reviews.
class Bar {
    constructor(name, address, smoking, nonSmokingArea, acceptsCreditCard) {
        this.name = name
        this.address = address
        this.smoking = smoking
        this.nonSmokingArea = nonSmokingArea
        this.acceptsCreditCard = acceptsCreditCard
        this.reviews = []
        this.tags = []
    }
    
    getRating() {
        return this.reviews
            .map(rev => rev.rating)
            // Weird way to calculate a mean
            .reduce(
                (prev, next) => prev + next, 0
            ) / this.reviews.length
    }

    addReview(text, rating) {
        const review = new Review(text, rating)
        this.reviews.push(review)
        review.barName = this.name
    }

    addTag(tag) {
        this.tags.push(tag)
    }

}

module.exports = Bar
