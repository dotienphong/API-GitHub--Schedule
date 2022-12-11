const express = require('express')
const app = express()
const taskModel = require('../model/task')

//GET ALL
app.get("/tasks", async (req, res) => {
    const task = await taskModel.find({})
    try {
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

//ADD NEW task
app.post("/tasks", async (req, res) => {
    const task = new taskModel(req.body)
    try {
        await task.save()
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})


//DELETE (sửa)
app.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id, req.body)
        if (!task) res.status(404).send("No Item Found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

//UPDATE (sửa)
app.patch("/tasks/:id", async (req, res) => {
    try {
        const task = await taskModel.findByIdAndUpdate({ _id: req.params.id }, { price: req.body.data.price })
        res.status(200).send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app
