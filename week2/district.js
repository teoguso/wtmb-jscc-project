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
        this.topBars.push(bar.name)
    }
}

module.exports = District
