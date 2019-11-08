const BaseService = require('./base-service')
const ReviewModel = require('../models/review')

class DistrictService extends BaseService {
    constructor() {
        super(ReviewModel, `${__dirname}/../review-database.json`)
    }
}

module.exports = new DistrictService()
