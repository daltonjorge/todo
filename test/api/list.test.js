const api = require('../../src/api/taskAPI')

describe('Listing tasks', () => {

  it('should return one item from a task list', () => {
    const tasks = [{done: false, task: 'My task #1'}]
    const expected = [{done: false, task: 'My task #1'}]
    const tasks_updated = api.listTasks(tasks)
    expect(tasks_updated.length).toEqual(1);
  });

  it('should return zero item from null list', () => {
    const tasks = null
    const expected = []
    const tasks_updated = api.listTasks(tasks)
    expect(tasks_updated.length).toEqual(0);
  });
});
