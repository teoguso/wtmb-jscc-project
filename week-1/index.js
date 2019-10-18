console.log('Homework - Week 1')
console.log('-----------------------------------------------------------------')
// Non-smoking bars maps - An app to find non-smoking bars or bars with non-smoking areas

// A bar.
// It can be smoking/non-smoking, have a non-smoking area, and have reviews
// It can return a rating based on the average of ratings in the reviews.
class Bar {
    constructor(name, smoking, nonSmokingArea) {
        this.name = name
        this.smoking = smoking
        this.nonSmokingArea = nonSmokingArea
        this.reviews = []
    }
    
    getRating() {
        return this.reviews
            .map(rev => rev.rating)
            .reduce(
                (prev, next) => prev + next, 0
            ) / this.reviews.length
    }

    addReview(text, rating) {
        let review = new Review(text, rating)
        this.reviews.push(review)
        review.barName = this.name
    }
}

// A review. It does not do much at this point
class Review {
    constructor(text, rating) {
        this.text = text
        this.rating = rating
    }

}

// A district. It can have multiple bars
class District {
    constructor(name) {
        this.name = name
        this.bars = []
        this.topBars = []
    }

    addBar(bar) {
        this.bars.push(bar)
        bar.district = this.name
    }

    promoteBar(bar) {
        this.topBars.push(bar)
    }
}

// Utility functions
listedArrayToString = ratingsArray => ratingsArray.reduce((prev, next) => prev + next + "\n", "")

// ----------------------
// User code
// ----------------------

// Create some bars
badBar = new Bar("Ecke-Kneipe", true, false)
familyBar = new Bar("Weinberg", false, false)
// Create a district
pBerg = new District("Prenzlauer Berg")
// Add bars to the district
pBerg.addBar(badBar)
pBerg.addBar(familyBar)

// Add a bad review to the bad bar
badBar.addReview("You can't breath in there", 0.1)
// Add a good review to the good bar
familyBar.addReview("Great place!", 5)
// and so on...
badBar.addReview("Great place, great atmosphere, cheap.", 5)
badBar.addReview("Pretty smoky but also dirt cheap.", 3)
familyBar.addReview("It's ok.", 4)
familyBar.addReview("Very nice bar.", 4)
familyBar.addReview("Quiet, nice, great service.", 5)
// Promote a bar in the ditrict
pBerg.promoteBar(familyBar)

console.log("Sample district object: ")
console.log(pBerg)
console.log('-----------------------------------------------------------------')
console.log("Sample bar object: ")
console.log(familyBar)
console.log('-----------------------------------------------------------------')
console.log("Sample review object: ")
console.log(familyBar.reviews[0])
console.log('-----------------------------------------------------------------')
console.log("Bars and ratings in " + pBerg.name + ": ")
barsRatings = pBerg.bars.map(bar => bar.name 
    + ": " + bar.getRating() 
    + " (" + bar.reviews.length + " reviews)")
console.log(listedArrayToString(barsRatings))
// console.log(barsRatings.reduce((prev, next) => prev + next + "\n", ""))
console.log('-----------------------------------------------------------------')
barWithReviews = pBerg.bars[0]
console.log('Reviews for ' + barWithReviews.name + ":")
barReviews = barWithReviews.reviews.map(review => 
    "Rating: " + review.rating + "\n"
    + "Review: " + review.text
)
// console.log(barReviews)
// console.log(barReviews.reduce((prev, next) => prev + next + "\n", ""))
console.log(listedArrayToString(barReviews))
console.log('-----------------------------------------------------------------')

