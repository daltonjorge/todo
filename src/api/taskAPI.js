exports.addTask = function(model, done, task) {
  const data = model || []
  return [...data, {done: done, task: task}]
}