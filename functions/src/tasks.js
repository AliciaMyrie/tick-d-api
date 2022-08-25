// app.get('/tasks', getTasks)
// app.post('/tasks', createTasks)
// app.patch('/tasks/:taskId', updateTask)
// app.delete('/tasks/taskId', deleteTask)

export function getTasks(req, res) {
res.send('Tasks')
}

export function createTask(req, res) {
const newTask = req.body
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