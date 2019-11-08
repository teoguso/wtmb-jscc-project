const BaseService = require('./base-service')
const DistrictModel = require('../models/review')

class DistrictService extends BaseService {
    constructor() {
        super(DistrictModel, `${__dirname}/../review-database.json`)
    }
}

module.exports = new DistrictService()
