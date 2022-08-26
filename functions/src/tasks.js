import dbConnect from "./dbConnect.js"

export function getTasks(req, res) { // going to later add by user id to this ..
    const db = dbConnect()
    const collection = await db.collection('tasks').get()
    .catch(err => res.status(500).send(err))
    const tasks = collection.docs.map(doc => { 
        let task = doc.data()
        task.id = doc.id
        return task
    })
res.send('tasks')
}

export function createTask(req, res) {
const newTask = req.body
if(!newTask || !newTask.task) {
    res.status(400).send({ success: false, message: "Invalid request"})
    return;
}
const db = dbConnect()
res.status(201).send('Task Added')
}

export function updateTask(req, res) {
    const updateTask = req.body
    const { taskId } = req.params
    res.status(202).send('Task Updated')
}

export function deleteTask( req, res) {
    const { taskId } = req.params
    res.status(203).send('Task Deleted')
}