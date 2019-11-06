// A review. It does not do much at this point
class Review {
    constructor(text, rating, id) {
        this.text = text
        this.rating = rating
        this.likes = 0
        this.id = id
    }

    like() {
        this.likes += 1
    }

    dislike() {
        this.likes -= 1
    }

    static create({ text, rating, id }) {
        const district = new Review(text, rating, id)
        return district
    }
}

module.exports = Review
