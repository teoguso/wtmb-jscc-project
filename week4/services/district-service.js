const BaseService = require('./base-service')
const DistrictModel = require('../models/district')

class DistrictService extends BaseService {
    constructor() {
        super(DistrictModel, `${__dirname}/../district-database.json`)
    }
}

module.exports = new DistrictService()
