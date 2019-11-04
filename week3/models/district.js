const Bar = require("./bar")

class District {
    constructor(name, bars=[], topBars=[]) {
        this.name = name
        this.bars = bars
        this.topBars = topBars
    }

    addBar(bar) {
        this.bars.push(bar)
        bar.district = this.name
    }

    promoteBar(bar) {
        this.topBars.push(bar.name)
    }

    static create({ name, bars, topBars }) {
        const district = new District(name, bars, topBars)
        district.bars = bars.map(Bar.create)
        return district
    }
}

module.exports = District
