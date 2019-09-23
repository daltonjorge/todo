import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const taskFile = path.join(os.homedir(), 'todo', 'tasks.json')

class TodoAPI {
  tasks = []

}

const api = new TodoAPI
export default api
