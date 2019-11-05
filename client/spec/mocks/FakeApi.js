import LevelCollection from '../../src/Collections/LevelCollection.js'

export default class FakeApi {
    loadTopic(topicTitle) {
        if (topicTitle == 'completed topic') {
            return {
                title: topicTitle,
                completed: true
            }
        }

        return {
            title: topicTitle,
            completed: false
        }
    }

    getLevels() {
        return ['sample level', 'other level']
    }
}
