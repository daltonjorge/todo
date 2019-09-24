function addTask(model, done, task) {
  const data = model || []
  return [...data, {done: done, task: task}]
}

function listTasks(model) {
  const data = model || []
  return data
}

function removeTask(model, index) {
  const data = model || []
  data.splice(index, 1)
  return data
}

function getTask(model, index) {
  const data = model || []
  if (data) {
    return data[index]
  }
}

module.exports = {
  addTask,
  listTasks,
  removeTask,
  getTask
}