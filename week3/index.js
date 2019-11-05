// Non-smoking bars maps - An app to find non-smoking bars or bars with non-smoking areas
const Bar = require("./models/bar")
const BarService = require("./services/bar-service")
const District = require("./models/district")
const DistrictService = require("./services/district-service")
const db = require("./models/database")
var NodeGeocoder = require('node-geocoder')

async function main() {
    try {

        // Utility functions
        log = console.log
        arrayToListedString = ratingsArray => ratingsArray
            .reduce((prev, next) => prev + next + "\n", "")

        // ----------------------
        // User code
        // ----------------------

        // Create some bars
        const badBar = new Bar("Ecke-Kneipe", "Schönhauser Allee 13, Berlin", true, false)
        const familyBar = new Bar("Weinberg", "Oranienstrasse 13, Berlin", false, false)
        // Create a district
        const pBerg = new District("Prenzlauer Berg")
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

        log("Sample district object: ")
        log(pBerg)
        log('-----------------------------------------------------------------')
        log("Sample bar object: ")
        log(familyBar)
        log('-----------------------------------------------------------------')
        log("Sample review object: ")
        log(familyBar.reviews[0])
        log('-----------------------------------------------------------------')
        log("Bars and ratings in " + pBerg.name + ": ")
        const barsRatings = pBerg.bars.map(bar => bar.name
            + ": " + bar.getRating()
            + " (" + bar.reviews.length + " reviews)")
        log(arrayToListedString(barsRatings))

        log('-----------------------------------------------------------------')
        const barWithReviews = pBerg.bars[0]
        log('Reviews for ' + barWithReviews.name + ":")
        const barReviews = barWithReviews.reviews.map(review =>
            "Rating: " + review.rating + "\n"
            + "Review: " + review.text
        )

        log(arrayToListedString(barReviews))
        log('-----------------------------------------------------------------')
        log('Like and dislike reviews, sort them by number of likes:')
        pBerg.bars[0].reviews[0].dislike()
        pBerg.bars[0].reviews[1].like()
        log(pBerg.bars[0].reviews.sort((a, b) => b.likes - a.likes))

        log('-----------------------------------------------------------------')
        // log('---------------------------------------------------------------')
        // Add bars using the service
        await BarService.add(badBar)
        await BarService.add(familyBar)
        log("BarService.findAll:")
        const bars = await BarService.findAll()
        log(bars)
        log("-------------------------------------")
        // Add District with service
        await DistrictService.add(pBerg)
        log("DistrictService.findAll:")
        const mydist = await DistrictService.findAll()
        log(mydist)
        log("-------------------------------------")
        log("BarService.find():")
        foundBar = await BarService.find(0)
        log(foundBar)
        log("-------------------------------------")
        // Find exact address with geocoder library
        log('Geocoding address `' + familyBar.address + '`...')
        var options = {
            provider: 'openstreetmap',
            // Optional depending on the providers
            httpAdapter: 'https', // Default
            // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
            formatter: null         // 'gpx', 'string', ...
        };

        var geocoder = NodeGeocoder(options)
        // Using callback
        await geocoder.geocode(familyBar.address)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });

    } catch (e) {
        log(e)
    }
}

main()
