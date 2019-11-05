import Level from '../../src/Entities/Level.js'

describe('A level', () => {
    it ('shows a name', () => {
        const level = new Level('name', [])

        expect(level.showName()).toBe('name')
    })

    it ('shows the lists of topics', () => {
        const level = new Level('name', ['first topic', 'second topic'])

        expect(level.showTopics()).toEqual(['first topic', 'second topic'])
    })
})
