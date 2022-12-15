const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String
    },
    taskDetail: {
        type: String
    },
    timeStart: {
        type: String
    },
    timeEnd: {
        type: String
    },
    timeUpdate: {
        type: String
    },
    choiceDate: {
        type: String
    },
})
const taskModel = mongoose.model('tasks', taskSchema)
module.exports = taskModel