import LevelCollection from '../Collections/LevelCollection.js'

export default class LevelRepository {
    constructor(api) {
        this.api = api
    }

    getLevels() {
        const levels = this.api.getLevels()

        return new LevelCollection(levels)
    }
}
