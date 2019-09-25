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

function done(model, index) {
  let data = model || []
  data[index].done = true
  return data
}

function undone(model, index) {
  let data = model || []
  data[index].done = false
  return data
}

module.exports = {
  addTask,
  listTasks,
  removeTask,
  getTask,
  done,
  undone
}