export default class Level {
    constructor(name, topics) {
        this.name = name
        this.topics = topics
    }

    showName() {
        return this.name
    }

    showTopics() {
        return this.topics
    }
}
