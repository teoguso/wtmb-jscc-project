const BaseService = require('./base-service')
const BarModel = require('../models/bar')

class BarService extends BaseService {
    constructor() {
        super(BarModel, `${__dirname}/../bar-database.json`)
    }
}

module.exports = new BarService()
