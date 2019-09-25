const {listTasks, addTask} = require('../../src/api/taskAPI')
// import { listTasks, addTask } from '../../src/api/taskAPI'

describe('Adding tasks', () => {

  it('add a task to empty list should return 1 item', () => {
    const tasks = []
    const expected = [{done: false, task: 'My task #1'}]
    // const tasks_updated = api.addTask(tasks, false, 'My task #1')
    expect(listTasks(tasks)).toEqual([])
    expect(addTask(tasks, false, 'My task #1')).toEqual(expected)
  });

  it('add a task to null list should return 1 item', () => {
    const tasks = null
    const expected = [{done: true, task: 'My task #1'}]
    const tasks_updated = addTask(tasks, true, 'My task #1')
    expect(tasks_updated).toEqual(expected);
  });
});
