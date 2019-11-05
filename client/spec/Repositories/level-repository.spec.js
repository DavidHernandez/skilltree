import LevelRepository from '../../src/Repositories/LevelRepository.js'
import LevelCollection from '../../src/Collections/LevelCollection.js'
import FakeApi from '../mocks/FakeApi.js'

describe('A level repository', () => {
    it ('can retrieve the collection of levels from the API', () => {
        const api = new FakeApi()
        const repository = new LevelRepository(api)

        const collection = repository.getLevels()

        const expectedCollection = new LevelCollection(['sample level', 'other level'])

        expect(collection).toEqual(expectedCollection)
    })
})
