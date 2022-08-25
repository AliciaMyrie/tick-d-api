import functions from "firebase-functions"
import { Express } from "express"
import cors from "cors"
import { app } from "firebase-admin"
import { getTasks, createTask, updateTask, deleteTask } from './src/tasks.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tasks', getTasks)
app.post('/tasks', createTask)
app.patch('/tasks/:taskId', updateTask)
app.delete('/tasks/taskId', deleteTask)

export const api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
