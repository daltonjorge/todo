const api = require('../../src/api/taskAPI')

describe('Removing tasks', () => {

  it('get task from list with existent index should return task object', () => {
    const tasks = [{done: true, task: "read js book"}]
    const expected = {done: true, task: "read js book"}
    const tasks_updated = api.getTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });

  it('get task from list with inexistent index should return undefined', () => {
    const tasks = [{done: true, task: "read js book"}]
    const expected = undefined
    const tasks_updated = api.getTask(tasks, 1)
    expect(tasks_updated).toEqual(expected);
  });

  it('get any task from empty list should return undefined', () => {
    const tasks = []
    const expected = undefined
    const tasks_updated = api.getTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });

  it('get any task from null list should return undefined', () => {
    const tasks = null
    const expected = undefined
    const tasks_updated = api.getTask(tasks, 0)
    expect(tasks_updated).toEqual(expected);
  });
});
