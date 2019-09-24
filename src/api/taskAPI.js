function addTask(model, done, task) {
  const data = model || []
  return [...data, {done: done, task: task}]
}

function listTasks(model) {
  const data = model || []
  return data
}

module.exports = {
  addTask,
  listTasks
}