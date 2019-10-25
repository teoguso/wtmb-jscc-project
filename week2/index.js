console.log('Homework - Week 1')
console.log('-----------------------------------------------------------------')
// Non-smoking bars maps - An app to find non-smoking bars or bars with non-smoking areas

const Bar = require("./bar")

const District = require("./district")

// Utility functions
arrayToListedString = ratingsArray => ratingsArray
        .reduce((prev, next) => prev + next + "\n", "")

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
console.log(arrayToListedString(barsRatings))

console.log('-----------------------------------------------------------------')
barWithReviews = pBerg.bars[0]
console.log('Reviews for ' + barWithReviews.name + ":")
barReviews = barWithReviews.reviews.map(review => 
    "Rating: " + review.rating + "\n"
    + "Review: " + review.text
)

console.log(arrayToListedString(barReviews))
console.log('-----------------------------------------------------------------')
console.log('Like and dislike reviews, sort them by number of likes:')
pBerg.bars[0].reviews[0].dislike()
pBerg.bars[0].reviews[1].like()
console.log(pBerg.bars[0].reviews.sort((a, b) => b.likes - a.likes))

