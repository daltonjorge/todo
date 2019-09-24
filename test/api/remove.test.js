const api = require('../../src/api/taskAPI')

describe('Removing tasks', () => {

  it('remove a task from list with 1 item should return []]', () => {
    const tasks = [{done: true, task: "read js book"}]
    const expected = []
    const tasks_updated = api.removeTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });

  it('remove a task from list passing invalid index should same list', () => {
    const tasks = [{done: true, task: "read js book"}]
    const expected = [{done: true, task: "read js book"}]
    const tasks_updated = api.removeTask(tasks, 1)
    expect(tasks_updated).toEqual(expected);
  });

  it('remove a task from empty list should return []]', () => {
    const tasks = []
    const expected = []
    const tasks_updated = api.removeTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });

  it('remove a task from null list should return []', () => {
    const tasks = null
    const expected = []
    const tasks_updated = api.removeTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });
});
