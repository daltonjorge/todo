const api = require('../../src/api/taskAPI')

describe('Marking tasks', () => {

  it('should change a undone task as done', () => {
    const tasks = [{done: false, task: 'My task #1'}]
    const expected = [{done: true, task: 'My task #1'}]
    const tasks_updated = api.done(tasks, 0)
    expect(tasks_updated[0].done).toBeTruthy()
  });

  it('should change a done task as undone', () => {
    // const tasks = [{done: true, task: 'My task #1'}]
    // const expected = [{done: false, task: 'My task #1'}]
    // const tasks_updated = api.undone(tasks, 0)
    // expect(tasks_updated[0].done).toBeFalsy()
  });
});
