import Topic from '../../src/Entities/Topic.js'
import FakeApi from '../mocks/FakeApi.js'

describe('A topic', () => {
    it ('can be loaded', () => {
        const api = new FakeApi()
        const topic = new Topic(api, 'completed topic')

        expect(topic.isCompleted()).toBe(true)
    })

    it ('shows a title', () => {
        const api = new FakeApi()
        const topic = new Topic(api, 'completed topic')
        const text = topic.showTitle()

        expect(text).toBe('completed topic')
    })

    it ('can be completed', () => {
        const api = new FakeApi()
        const topic = new Topic(api, 'uncompleted topic')

        expect(topic.isCompleted()).toBe(false)
        topic.complete()

        expect(topic.isCompleted()).toBe(true)
    })

    it ('can be opened', () => {
        const api = new FakeApi()
        const topic = new Topic(api, 'random topic')

        expect(topic.isClosed()).toBe(true)
        topic.open()

        expect(topic.isClosed()).toBe(false)
    })

    it ('can be closed', () => {
        const api = new FakeApi()
        const topic = new Topic(api, 'random topic')
        topic.open()

        expect(topic.isClosed()).toBe(false)
        topic.close()

        expect(topic.isClosed()).toBe(true)
    })
})
