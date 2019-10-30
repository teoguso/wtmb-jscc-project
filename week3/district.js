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
        return new District(name, bars, topBars)
    }
}

module.exports = District
