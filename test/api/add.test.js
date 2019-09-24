const api = require('../../src/api/taskAPI')

describe('Adding tasks', () => {

  it('add a task to empty list should return 1 item', () => {
    const tasks = []
    const expected = [{done: false, task: 'My task #1'}]
    const tasks_updated = api.addTask(tasks, false, 'My task #1')
    expect(tasks_updated).toEqual(expected);
  });
});
