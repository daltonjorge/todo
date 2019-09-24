const fs = require('fs')
const path = require('path')
const os = require('os')

const taskFile = path.join(os.homedir(), 'todo', 'tasks.json')

exports.readTasks = function() {
  try {
    if (fs.existsSync(taskFile)) {
      return JSON.parse(fs.readFileSync(taskFile, { encoding: 'utf-8' }))
    }
    return []
  } catch(err) {
    return []
  }
}

exports.writeTasks = function(tasks) {
  if (!fs.existsSync(path.dirname(taskFile))) {
    fs.mkdirSync(path.dirname(taskFile))
  }
  const data = JSON.stringify(tasks)
  fs.writeFileSync(taskFile, data, { encoding: 'utf-8' })
}