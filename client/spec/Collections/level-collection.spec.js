import LevelCollection from '../../src/Collections/LevelCollection.js'

describe('A level collection', () => {
    it('can loop the items of a collection', () => {
        const sampleLevel = {name: "sample level"}
        const otherLevel = {name: "other level"}
        const collection = new LevelCollection([sampleLevel, otherLevel])

        const firstItem = collection.next()
        const secondItem = collection.next()

        expect(secondItem).toEqual(otherLevel)
    })

    it('resets the pointer when arrives to the last item', () => {
        const sampleLevel = {name: "sample level"}
        const collection = new LevelCollection([sampleLevel])

        collection.next()
        const firstItem = collection.next()

        expect(firstItem).toEqual(sampleLevel)
    })

    it('can reset the pointer manually', () => {
        const sampleLevel = {name: "sample level"}
        const otherLevel = {name: "other level"}
        const collection = new LevelCollection([sampleLevel, otherLevel])

        collection.next()
        collection.reset()
        const firstItem = collection.next()

        expect(firstItem).toEqual(sampleLevel)
    })
})
