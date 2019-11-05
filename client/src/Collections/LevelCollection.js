export default class LevelCollection {
    constructor(list) {
        this.levels = list
        this.counter = 0
    }

    next() {
        const currentLevel = this.levels[this.counter]

        this.counter++
        if(this.counter == this.levels.length) {
            this.reset()
        }

        return currentLevel
    }

    reset() {
        this.counter = 0
    }
}
