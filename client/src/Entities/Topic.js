export default class Topic {
    constructor(api, title) {
        const data = api.loadTopic(title)

        this.closed = true
        this.title = data.title
        this.completed = data.completed
    }

    open() {
        this.closed = false
    }

    close() {
        this.closed = true
    }

    showTitle() {
        return this.title
    }

    isCompleted() {
        return this.completed
    }

    isClosed() {
        return this.closed
    }

    complete() {
        this.completed = true
    }
}
